import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import { SECTION_EYEBROW, SECTION_TITLE, SECTION_LEAD, BTN_GHOST } from "../ui.js";
import { SERVICES } from "../data/services.js";

export default function Services() {
  const preview = SERVICES.slice(0, 4);

  return (
    <section id="services" className="px-6 py-20 md:py-28 bg-bg">
      <div className="max-w-[1180px] mx-auto">
        <div className="max-w-xl mx-auto text-center md:mx-0 md:text-left">
          <div className={`${SECTION_EYEBROW} justify-center md:justify-start`}>
            Catalogue de services
          </div>
          <h2 className={`${SECTION_TITLE} mx-auto md:mx-0`}>
            Nos principaux services
          </h2>
          <p className={`${SECTION_LEAD} mx-auto md:mx-0`}>
            Un aperçu des interventions couramment demandées par nos clients —
            retrouvez la liste complète sur notre page dédiée.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {preview.map(({ slug, icon: Icon, title, desc, image }) => (
            <article
              key={slug}
              className="group relative rounded-2xl bg-white border border-line overflow-hidden hover:-translate-y-1 hover:shadow-lg hover:border-accent-2/40 transition-all"
            >
              <div className="relative h-[120px] overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-2/80 via-ink-2/10 to-transparent" />
                <div className="absolute bottom-3 left-3 grid place-items-center w-10 h-10 rounded-lg bg-white/95 text-accent text-lg shadow-md group-hover:bg-accent group-hover:text-white transition-colors">
                  <Icon aria-hidden="true" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display font-semibold text-[15.5px] leading-snug mb-2.5 text-ink">
                  {title}
                </h3>
                <p className="text-[13.5px] text-ink-muted leading-relaxed mb-5">
                  {desc}
                </p>
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-surface-alt text-ink-muted group-hover:bg-accent group-hover:text-white transition-colors">
                  <FaArrowRight className="text-xs" aria-hidden="true" />
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="flex justify-center md:justify-start">
          <Link to="/services" className={BTN_GHOST}>
            Voir tous nos services
            <FaArrowRight aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
