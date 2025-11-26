export default function Home() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tighter">
          {`hi, I'm AJ!`}
      </h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          {`I do cybersecurity research, write lots of code, and solve fun problems.`}
        </p>
      </div>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          {`My technical interests include networking, cryptography, infrastructure-as-code, and software development.`}
        </p>
      </div>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          {`Ask me about lifting, homelabbing, concerts, and travel.`}
        </p>
      </div>
    </section>
  );
}
