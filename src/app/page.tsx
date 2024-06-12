import Link from "next/link"

export default function Home() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tighter">
          {`hi there, I'm AJ!`}
      </h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          {`I'm a cybersecurity researcher and problem solver. `}
        </p>
      </div>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          {`I graduated from the University of Central Florida with a Bachelor of Science in Computer Science. `}
          {`While at UCF, I had the honor of being one of `}
          <Link
            href="https://www.ucf.edu/news/nsf-awards-ucf-2-9-million-to-train-next-generation-of-cybersecurity-defenders/"
          >
            {`UCF's first`}
          </Link>
          {` NSF Scholarship-for-Service students.`}
        </p>
      </div>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          {`I enjoy solving problems in areas like networking, cryptography, and software development. `}
        </p>
      </div>
    </section>
  );
}
