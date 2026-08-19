import { Link, useParams } from "react-router-dom";
import { FaArrowLeft, FaWhatsapp, FaCheck } from "react-icons/fa6";
import { Helmet } from "react-helmet-async";

import PageBanner from "../components/PageBanner.jsx";
import { SERVICES } from "../data/services.js";

const WHATSAPP_NUMBER = "message/DPLC7GENBPZCF1";

export default function ServiceDetail() {
  const { slug } = useParams();

  const service = SERVICES.find((item) => item.slug === slug);

  // Vérification avant d'utiliser service
  if (!service) {
    return (
      <section className="px-6 py-32 text-center bg-bg">
        <h1 className="text-3xl font-bold text-ink">
          Service introuvable
        </h1>

        <p className="mt-4 text-ink-muted">
          Le service demandé n'existe pas ou n'est plus disponible.
        </p>

        <Link
          to="/services"
          className="inline-flex items-center gap-2 mt-8 rounded-full bg-accent text-white px-6 py-3 font-semibold"
        >
          <FaArrowLeft />
          Retour aux services
        </Link>
      </section>
    );
  }

  // SEO de la page
  const seoTitle = service.seoTitle;

const seoDescription = service.seoDescription;

  // Message WhatsApp
  const message =
    `Bonjour MARC RÉPARE, je souhaite avoir plus d'informations ` +
    `concernant le service : ${service.title}.`;

  const whatsappHref =
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>{seoTitle}</title>

        <meta
          name="description"
          content={seoDescription}
        />

        <meta
          name="robots"
          content="index, follow"
        />

        <link
          rel="canonical"
          href={`https://www.servicesinformatique.space/services/${service.slug}`}
        />
      </Helmet>

      <PageBanner
        title={service.title}
        crumbs={["Services", service.title]}
        image={service.image}
      />

      <main className="px-6 py-20 md:py-28 bg-bg">
        <div className="max-w-[1000px] mx-auto">
          <article className="bg-white rounded-[32px] border border-line overflow-hidden shadow-lg">

            {/* Image */}
            <img
              src={service.image}
              alt={`${service.title} à Abidjan - MARC RÉPARE`}
              className="w-full h-[280px] md:h-[400px] object-cover"
            />

            <div className="p-8 md:p-12">

              {/* Titre */}
              <div className="flex items-center gap-4 mb-6">
                <div className="grid place-items-center w-14 h-14 rounded-2xl bg-accent-soft text-accent text-2xl">
                  <service.icon aria-hidden="true" />
                </div>

                <div>
                  <p className="text-sm uppercase tracking-widest text-accent font-semibold">
                    MARC RÉPARE
                  </p>

                  <h1 className="text-3xl md:text-4xl font-display font-bold text-ink">
                    {service.title} à Abidjan
                  </h1>
                </div>
              </div>

              {/* Description */}
              <p className="text-lg text-ink-muted leading-relaxed mb-10">
                {service.desc}
              </p>

              {/* Avantages */}
              <div className="grid md:grid-cols-2 gap-4 mb-10">
                {[
                  "Diagnostic et analyse du besoin",
                  "Intervention professionnelle",
                  "Configuration adaptée",
                  "Conseils et accompagnement",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl bg-surface-alt p-4"
                  >
                    <FaCheck
                      className="text-accent shrink-0"
                      aria-hidden="true"
                    />

                    <span className="text-sm text-ink">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Boutons */}
              <div className="flex flex-wrap gap-4">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-accent text-white px-6 py-3.5 font-semibold hover:brightness-110 transition"
                >
                  <FaWhatsapp aria-hidden="true" />
                  Demander ce service
                </a>

                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3.5 font-semibold text-ink hover:border-accent hover:text-accent transition"
                >
                  <FaArrowLeft aria-hidden="true" />
                  Tous les services
                </Link>
              </div>

            </div>
          </article>
        </div>
      </main>
    </>
  );
}