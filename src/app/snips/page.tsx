import { getSnips } from '@/app/snips/functions';

export const metadata = {
    title: 'Snips',
    description: 'A collection of snippets, tips, and short write-ups.',
}

export default function Snips() {
    let allSnips = getSnips();

    return (
        <section>
            <h1 className="mb-8 text-2xl font-medium tracking-tighter">
                {`Snips`}
            </h1>
            <div className="prose prose-neutral dark:prose-invert">
                <p>
                    {`A collection of snippets, tips, and short write-ups.`}
                </p>
            </div>
            <div className="prose prose-neutral dark:prose-invert">
                <ul>
                    {allSnips.map(({ metadata, slug }) => {
                        return (
                            <li key={slug}>
                                <a href={`/snips/${slug}`}>
                                    {metadata.title}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
}