import { FiStar } from "react-icons/fi";

const TESTIMONIALS = [
    {
        quote:
            "Intervention rapide et professionnelle. Mon PC était réparé le lendemain.",
        author: "Aïcha K.",
    },
    {
        quote:
            "Diagnostic clair, pas de mauvaises surprises et très bon suivi après réparation.",
        author: "Jean-Marc T.",
    },
    {
        quote:
            "Service sérieux et prix juste. Je recommande MARC RÉPARE pour les pannes urgentes.",
        author: "Sophie D.",
    },
];

export default function Testimonials() {
    return (
        <section id="avis" className="px-6 py-20 md:py-28 bg-white">
            <div className="max-w-[1180px] mx-auto">
                <div className="text-center max-w-xl mx-auto mb-14">
                    <div className="inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.14em] text-accent mb-3">
                        Avis clients
                    </div>
                    <h2 className="font-display font-bold text-[clamp(1.8rem,3vw,2.4rem)] text-ink mb-4">
                        Ils nous font confiance
                    </h2>
                    <p className="text-ink-muted text-[15.5px]">
                        Témoignages concrets de clients qui ont retrouvé un ordinateur
                        fonctionnel rapidement.
                    </p>
                </div>

                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {TESTIMONIALS.map(({ quote, author }) => (
                        <article
                            key={author}
                            className="rounded-3xl border border-line bg-bg p-6 shadow-sm"
                        >
                            <div className="flex items-center gap-2 text-accent mb-4">
                                <FiStar className="text-xl" aria-hidden="true" />
                                <span className="font-semibold">Très satisfait</span>
                            </div>
                            <p className="text-ink mb-5 leading-relaxed">{quote}</p>
                            <div className="text-sm font-medium text-ink-muted">{author}</div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}