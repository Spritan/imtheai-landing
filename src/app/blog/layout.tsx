
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from 'sonner';

const inter = Inter({ subsets: ['latin'] });

// Use NEXT_PUBLIC_SITE_URL with a fallback to localhost
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3001';

export const metadata: Metadata = {
  title: 'imtheai Blogs',
  description: 'Stay updated with the latest AI insights, trends, and tutorials.',
  openGraph: {
    title: 'imtheai Blogs',
    description: 'Stay updated with the latest AI insights, trends, and tutorials.',
    url: siteUrl,
    siteName: 'imtheai',
    images: [
      {
        url: `${siteUrl}/default-og-image.jpg`, // your default OG image
        width: 1200,
        height: 630,
        alt: 'imtheai Blogs',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'imtheai Blogs',
    description: 'Stay updated with the latest AI insights, trends, and tutorials.',
    images: [`${siteUrl}/default-og-image.jpg`],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
