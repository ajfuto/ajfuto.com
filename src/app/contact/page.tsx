import Link from "next/link"

export default function Home() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tighter">
          {`Feel free to reach out!`}
      </h1>
        <div className="prose prose-neutral dark:prose-invert">
            <p>
            {`Check out my projects on `}
            <Link href="https://github.com/ajfuto">GitHub</Link>
            {`, connect with me on `}
            <Link href="https://www.linkedin.com/in/ajfuto/">LinkedIn</Link>
            {`, or send me an email at `}
            <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">hello [at] ajfuto [dot] com</Link>
            {`.`}
            </p>
        </div>
    </section>
  );
}
