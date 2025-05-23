import Link from "next/link"

export default function NotFound() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">
        404 - Not Found
      </h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Sorry! The page you requested could not be found.
        </p>
        <p>
          Go back to <Link href="/">safety</Link>.
        </p>
      </div>
    </section>
  );
}