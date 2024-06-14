import Link from "next/link"

export default function NotFound() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">
        404 Not Found.
      </h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Sorry! The page you requested could not be found for one (or more) of the following reasons:
        </p>
        <ul className="list-disc list-inside mt-4">
          <li>It doesn't exist.</li>
          <li>I'm a bad programmer.</li>
          <li>You're trying to break my website.</li>
        </ul>
        <p>
          Go back to <Link href="/">safety</Link>.
        </p>
      </div>
    </section>
  );
}