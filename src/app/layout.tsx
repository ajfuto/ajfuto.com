import './globals.css';
import type { Metadata } from 'next';
import { Navbar } from './components/navbar';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';

export const metadata: Metadata = {
  metadataBase: new URL('https://ajfuto.com'),
  title: {
    default: 'AJ Futo',
    template: '%s | AJ Futo',
  },
  description: 'Cybersecurity researcher, problem solver.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ajfuto.com',
    siteName: 'AJ Futo',
    title: 'AJ Futo',
    description: 'Cybersecurity researcher, problem solver.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  }
};

const cx = (...classes: string[]) => classes.filter(Boolean).join(' ');

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx(
        'text-black bg-white dark:text-white dark:bg-[#111010]',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <head>
      </head>
      <body className="antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-auto mt-8">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}