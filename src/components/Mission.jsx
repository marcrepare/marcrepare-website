import { FiTag, FiHeart } from "react-icons/fi";
import { BTN_PRIMARY, SECTION_EYEBROW } from "../ui.js";

const POINTS = [
  {
    icon: FiTag,
    title: "Tarifs justes",
    desc: "Un devis clair avant toute intervention, sans mauvaise surprise.",
  },
  {
    icon: FiHeart,
    title: "Service de confiance",
    desc: "Une équipe locale, disponible et à l'écoute de chaque client.",
  },
];

export default function Mission() {
  return (
    <section
      id="mission"
      className="px-6 py-20 md:py-28 bg-white border-y border-line"
    >
      <div className="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-14 items-center">
        <div className="relative hidden sm:block max-w-[420px]">
          <div className="relative rounded-[22px] aspect-[4/5] p-7 flex flex-col justify-between overflow-hidden shadow-[0_25px_50px_-20px_rgba(11,22,51,0.35)]">
            <img
              src="/images/services/atelier.jpg"
              alt="Atelier de réparation MARC RÉPARE"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-2/95 via-ink-2/40 to-ink-2/10" />
            <span className="relative font-mono text-[11px] uppercase tracking-[0.1em] text-accent-2">
              Notre atelier
            </span>
            <div className="relative">
              <div className="text-white font-display font-bold text-2xl mb-2">
                Interventions menées avec soin
              </div>
              <p className="text-gray-900 text-[13.5px]">
                Du diagnostic à la mise en service, chaque équipement est
                testé avant restitution.
              </p>
            </div>
          </div>
          <div className="absolute -top-4 -right-4 w-[150px] rounded-2xl bg-accent text-white p-5 shadow-xl">
            <div className="font-display font-bold text-3xl leading-none mb-1">
              2+
            </div>
            <div className="text-[12.5px] text-white/85">
              années d'expérience
            </div>
          </div>
        </div>

        <div>
          <div className={SECTION_EYEBROW}>Notre mission</div>
          <h2 className="font-display font-bold text-[clamp(1.6rem,2.8vw,2.1rem)] leading-tight mb-5 max-w-[480px] text-ink">
            Fournir des solutions technologiques fiables, rapides et
            accessibles.
          </h2>
          <p className="text-ink-muted text-[15.5px] max-w-[480px] mb-8">
            Nous accompagnons les particuliers, entreprises et professionnels
            dans l'installation et la mise en service de leurs équipements,
            avec un travail professionnel et une assistance adaptée aux
            besoins de chaque client.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mb-9 max-w-[520px]">
            {POINTS.map(({ icon: Icon, title, desc }) => (
              <div key={title}>
                <Icon className="text-xl text-accent mb-2.5" aria-hidden="true" />
                <h3 className="font-display font-semibold text-[15px] mb-1.5 text-ink">
                  {title}
                </h3>
                <p className="text-[13.5px] text-ink-muted leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>

          <a href="#services" className={BTN_PRIMARY}>
            Découvrir nos services
          </a>
        </div>
      </div>
    </section>
  );
}
