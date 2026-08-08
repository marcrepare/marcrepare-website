import { Link } from "react-router-dom";
import { FaWhatsapp, FaChevronRight } from "react-icons/fa6";

const WHATSAPP_NUMBER = "message/DPLC7GENBPZCF1";

export default function QuickRequest() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}`;

  return (
    <div className="relative z-10 px-6 -mt-16 md:-mt-[72px]">
      <div className="max-w-[1180px] mx-auto rounded-2xl bg-white border border-line shadow-[0_20px_50px_-20px_rgba(11,22,51,0.25)] p-8 md:p-10 grid gap-6 md:grid-cols-[1fr_auto] items-center">
        <div>
          <div className="text-sm uppercase tracking-[0.24em] text-accent mb-3">
            Diagnostic panne
          </div>
          <h3 className="font-display text-3xl md:text-[2.6rem] font-bold text-ink leading-tight">
            Besoin d’un diagnostic clair ?
          </h3>
          <p className="mt-4 max-w-2xl text-[15.5px] text-ink-muted leading-relaxed">
            Rendez-vous sur la page dédiée pour décrire votre panne en détail et recevoir une réponse rapide.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/description-de-panne"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-ink text-white font-semibold text-[14px] px-6 py-3 hover:bg-ink-dark transition"
            >
              Décrire ma panne
              <FaChevronRight aria-hidden="true" />
            </Link>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-line bg-white text-ink font-semibold text-[14px] px-6 py-3 hover:border-ink hover:text-ink transition"
            >
              WhatsApp direct
              <FaWhatsapp aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="rounded-3xl bg-surface-alt p-6 text-[14px] text-ink-muted leading-relaxed">
          <p className="font-semibold text-ink mb-3">Ce que nous vous demandons :</p>
          <ul className="space-y-3 list-disc pl-5">
            <li>Type d’appareil</li>
            <li>Symptômes et erreurs</li>
            <li>Durée du problème</li>
            <li>Service souhaité</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
