import { getBlogPosts } from '@/lib/blog-data';
import BlogPost from '@/components/BlogPost';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export const revalidate = 3600;

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Dynamically set the page metadata (including the <title>) based on the blog post
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const decodedSlug = decodeURIComponent(params.slug);
  const posts = await getBlogPosts();
  const post = posts.find((p) => p.slug === decodedSlug);
  return {
    title: post?.title || 'Blog Post',
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  try {
    const decodedSlug = decodeURIComponent(params.slug);
    const posts = await getBlogPosts();
    const post = posts.find((p) => p.slug === decodedSlug);

    if (!post) {
      return notFound();
    }

    return (
      <div className="relative">
        {/* Floating back button with glowing effect */}
        <Link
          href="/blog"
          className="absolute top-6 left-6 md:top-10 md:left-10 p-6 w-10 h-10 flex items-center justify-center rounded-full bg-white-900 hover:bg-gray-200 shadow-lg shadow-blue-500/50 transition-all"
        >
          <span className="text-black text-2xl">&larr;</span>
        </Link>
        <BlogPost post={post} />
      </div>
    );
  } catch (error) {
    console.error('Error in Blog Post page:', error);
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Unable to load blog post
          </h2>
          <p className="text-slate-600 dark:text-slate-400">
            Please try again later
          </p>
        </div>
      </div>
    );
  }
}
