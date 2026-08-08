import { FaWhatsapp } from "react-icons/fa6";
import { FiPhoneCall, FiCheckCircle } from "react-icons/fi";
import { BTN_PRIMARY, BTN_GHOST } from "../ui.js";

const WHATSAPP_LINK = "https://wa.me/message/DPLC7GENBPZCF1";
const PHONE_DISPLAY = "01 04 21 92 38";
const PHONE_LINK = "tel:0104219238";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-6 pt-32 pb-24 md:pt-40 md:pb-32 bg-gradient-to-b from-accent-soft/70 via-bg to-bg"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-[220px] -right-[160px] w-[560px] h-[560px] rounded-full"
        style={{
          background:
            "radial-gradient(circle at center, rgba(11,125,146,0.16) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-14 items-center">
        <div>
          <div
            role="status"
            className="inline-flex items-center gap-2.5 rounded-full bg-white border border-line px-3.5 py-1.5 font-mono text-[12.5px] text-ink-muted mb-7 shadow-sm"
          >
            <span className="w-[7px] h-[7px] rounded-full bg-ok animate-pulse-dot" />
            Techniciens disponibles à Abidjan
          </div>

          <h1 className="font-display font-bold text-[clamp(2.2rem,5.2vw,3.6rem)] leading-[1.08] tracking-tight mb-6 text-ink">
            Votre problème,
            <br />
            <span className="text-accent">notre solution.</span>
          </h1>

          <p className="text-ink-muted max-w-[520px] mb-9 text-[16.5px] leading-relaxed">
            MARC RÉPARE assure la maintenance, le dépannage, l'installation et
            la configuration de vos équipements informatiques et réseaux —
            pour particuliers, entreprises et professionnels.
          </p>

          <div className="flex flex-wrap items-center gap-3.5 mb-10">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${BTN_PRIMARY} justify-center`}
            >
              <FaWhatsapp aria-hidden="true" />
              Écrire sur WhatsApp
            </a>
            <a href={PHONE_LINK} className={`${BTN_GHOST} justify-center`}>
              <FiPhoneCall aria-hidden="true" />
              {PHONE_DISPLAY}
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-x-7 gap-y-2.5">
            {["Diagnostic clair", "Intervention rapide", "Pièces garanties"].map(
              (t) => (
                <div key={t} className="flex items-center gap-2 text-[13.5px] text-ink-muted">
                  <FiCheckCircle className="text-accent shrink-0" aria-hidden="true" />
                  {t}
                </div>
              )
            )}
          </div>
        </div>

        <div className="relative hidden sm:block">
          <div className="relative mx-auto max-w-[380px] rounded-[22px] overflow-hidden shadow-[0_30px_60px_-20px_rgba(11,22,51,0.35)] aspect-[4/5]">
            <img
              src="/images/services/maintenance.jpg"
              alt="Technicien MARC RÉPARE en intervention"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-2/90 via-ink-2/10 to-transparent" />

            <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
              <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-accent-2 bg-ink-2/60 backdrop-blur-sm rounded-full px-3 py-1">
                Fiche d'intervention
              </span>
              <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-ok bg-ink-2/60 backdrop-blur-sm rounded-full px-3 py-1">
                <span className="w-[5px] h-[5px] rounded-full bg-ok animate-pulse-dot" />
                en cours
              </span>
            </div>

            <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-ink-2/70 backdrop-blur-md border border-white/10 p-4 flex items-center justify-between">
              <div>
                <div className="text-[13px] text-accent-2 mb-1">Statut</div>
                <div className="text-[15px] text-white font-semibold">
                  Prêt pour restitution
                </div>
              </div>
              <FiCheckCircle className="text-2xl text-accent-2" aria-hidden="true" />
            </div>
          </div>

          <div className="absolute -left-6 top-6 rounded-2xl bg-white border border-line shadow-lg px-4 py-3 animate-float">
            <div className="text-[22px] font-display font-bold text-accent leading-none">
              2+
            </div>
            <div className="text-[11.5px] text-ink-muted mt-1">
              ans d'expérience
            </div>
          </div>

          <div
            className="absolute -right-4 bottom-8 rounded-2xl bg-white border border-line shadow-lg px-4 py-3 animate-float"
            style={{ animationDelay: "1.2s" }}
          >
            <div className="text-[22px] font-display font-bold text-accent leading-none">
              100%
            </div>
            <div className="text-[11.5px] text-ink-muted mt-1">
              service sécurisé
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
