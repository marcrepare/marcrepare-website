import { useEffect } from "react";
import { FaWhatsapp, FaArrowRight } from "react-icons/fa6";
import PageBanner from "../components/PageBanner.jsx";
import { SERVICES } from "../data/services.js";

const WHATSAPP_NUMBER = "message/DPLC7GENBPZCF1";

export default function ServicesPage() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <>
      <PageBanner
        title="Nos services"
        crumbs={["Services"]}
        image="/images/services/reseaux.jpg"
      />

      <section className="px-6 py-20 md:py-28 bg-bg">
        <div className="max-w-[1180px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {SERVICES.map(({ slug, icon: Icon, title, desc, image }) => {
              const message = `Bonjour MARC RÉPARE, j'aimerais en savoir plus sur : ${title}.`;
              const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                message
              )}`;
              return (
                <article
                  key={slug}
                  className="group rounded-2xl bg-white border border-line overflow-hidden hover:-translate-y-1 hover:shadow-xl hover:border-accent-2/40 transition-all"
                >
                  <div className="relative h-[150px] overflow-hidden">
                    <img
                      src={image}
                      alt={title}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-ink-2/85 via-ink-2/50 to-accent/60" />
                    <Icon
                      className="absolute top-4 right-4 text-white/25 text-[40px]"
                      aria-hidden="true"
                    />
                    <span className="absolute -bottom-6 left-6 grid place-items-center w-14 h-14 rounded-full bg-accent-2 text-white text-xl shadow-lg ring-4 ring-white">
                      <Icon aria-hidden="true" />
                    </span>
                  </div>

                  <div className="px-6 pt-10 pb-6">
                    <h3 className="font-display font-semibold text-[16px] leading-snug mb-2.5 text-ink">
                      {title}
                    </h3>
                    <p className="text-[13.5px] text-ink-muted leading-relaxed mb-6">
                      {desc}
                    </p>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-accent-soft text-accent font-semibold text-[13px] px-4 py-2 group-hover:bg-accent group-hover:text-white transition-colors"
                    >
                      <FaWhatsapp aria-hidden="true" />
                      Demander ce service
                      <FaArrowRight className="text-[11px]" aria-hidden="true" />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
