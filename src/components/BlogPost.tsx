'use client';

import type { BlogPost } from '@/lib/blog-data';
import { Calendar, Clock, Share2, Facebook, Twitter, Linkedin, Link2 } from 'lucide-react';
import { format } from 'date-fns';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import ViewCounter from './ViewCounter';

interface BlogPostProps {
  post: BlogPost;
}

function ContentWithImages({ content }: { content: string }) {
  const parts = content.split(/!\[.*?\]\((.*?)\)/g);

  return (
    <div className="prose dark:prose-invert max-w-none">
      {parts.map((part, index) => {
        if (index % 2 === 1) {
          return (
            <figure key={index} className="my-12 mx-auto relative h-96">
              <Image
                src={part.trim()}
                alt="Blog content"
                fill
                className="object-cover rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
                loading="lazy"
              />
            </figure>
          );
        }
        return part.split('\n\n').map((paragraph, pIndex) => (
          paragraph.trim() && (
            <p key={`${index}-${pIndex}`} className="text-lg leading-relaxed mb-6 text-slate-700 dark:text-slate-300">
              {paragraph}
            </p>
          )
        ));
      })}
    </div>
  );
}

export default function BlogPost({ post }: BlogPostProps) {
  const [copied, setCopied] = useState(false);
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

  const shareData = {
    title: post.title,
    text: post.excerpt,
    url: currentUrl,
  };

  // Use the slug for the post URL for sharing
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3001';
  const postUrl = `${siteUrl}/blog/${post.slug}`;

  const handleShare = async (platform: string) => {
    const encodedTitle = encodeURIComponent(post.title);
    const encodedExcerpt = encodeURIComponent(post.excerpt);
    const encodedUrl = encodeURIComponent(postUrl);

    let shareUrl = '';

    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
        break;
      case 'whatsapp':
        shareUrl = `https://api.whatsapp.com/send?text=${encodedTitle}%0A${encodedExcerpt}%0A${encodedUrl}`;
        break;
      case 'copy':
        try {
          await navigator.clipboard.writeText(postUrl);
          setCopied(true);
          toast.success('Link copied to clipboard!');
          setTimeout(() => setCopied(false), 2000);
        } catch (err) {
          toast.error('Failed to copy link');
        }
        return;
    }

    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
    }
  };

  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <div className="relative">
        <div className="absolute inset-0 blur-3xl opacity-30 dark:opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 rounded-full transform rotate-12 scale-y-50"></div>
        </div>
        <h1 className="relative text-4xl md:text-5xl font-serif font-bold text-center mb-4 text-slate-900 dark:text-slate-100">
          {post.title}
        </h1>
      </div>

      <div className="flex justify-between items-center mt-8 mb-12">
        <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4" />
            <time>{format(new Date(post.created_at), 'MMMM d, yyyy')}</time>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            <span>{Math.ceil(post.content.split(' ').length / 200)} min read</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ViewCounter blogId={post.id} initialViews={post.views} />
          </div>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Share2 className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => handleShare('facebook')}>
              <Facebook className="mr-2 h-4 w-4" />
              Facebook
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleShare('twitter')}>
              <Twitter className="mr-2 h-4 w-4" />
              Twitter
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleShare('linkedin')}>
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleShare('whatsapp')}>
              <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleShare('copy')}>
              <Link2 className="mr-2 h-4 w-4" />
              {copied ? 'Copied!' : 'Copy Link'}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="relative rounded-xl overflow-hidden mb-12 h-80">
        <Image
          src={post.image_url}
          alt={post.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="prose dark:prose-invert max-w-none">
        <ContentWithImages content={post.content} />
      </div>
    </article>
  );
}
