import { getSnips } from '@/app/snips/functions';
import Link from 'next/link';
import { Suspense } from 'react';

export const metadata = {
  title: 'Snips',
  description: 'A collection of snippets, tips, and short write-ups.',
}

export default function Snips() {
  let allSnips = getSnips();

  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tighter">
        {`A collection of snippets, tips, and short write-ups.`}
      </h1>
      {allSnips.sort((a, b) => {
        if (new Date(a.metadata.date) > new Date(b.metadata.date)) {
          return -1;
        }
        return 1;
        })
        .map((post) => (
        <Link
          key={post.slug}
          className="flex flex-col space-y-1 mb-4"
          href={`/snips/${post.slug}`}
        >
          <div className="w-full flex flex-col justify-center">
            <div className="w-full flex justify-between items-center">
              <div className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                {post.metadata.title}
              </div>
               <div className="text-neutral-600 dark:text-neutral-400 text-sm">
                {new Date(post.metadata.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </div>
            </div>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm">
              {(post.metadata.description)}
            </p>
          </div>
        </Link>
        ))}
    </section>
  );
}