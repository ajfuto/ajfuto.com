export default function Home() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tighter">
          {`hi there, I'm AJ!`}
      </h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          {`I do cybersecurity research, write lots of code, and solve fun problems. `}
        </p>
      </div>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          {`My interests include networking, virtualization, cryptography, and software development.`}
        </p>
      </div>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          {`Offline, I enjoy travel, consuming media, and lifting. `}
          {`I also bounce between casual hobbies like photography, gaming, and homelabbing.`}
        </p>
      </div>
    </section>
  );
}
