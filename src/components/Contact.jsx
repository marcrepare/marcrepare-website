import { FaWhatsapp } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { SECTION_EYEBROW } from "../ui.js";

const WHATSAPP_LINK = "https://wa.me/message/DPLC7GENBPZCF1";
const PHONE_DISPLAY = "01 04 21 92 38";
const PHONE_LINK = "tel:0104219238";

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-20 md:py-28 bg-bg">
      <div className="max-w-[1180px] mx-auto">
        <div
          className="relative overflow-hidden rounded-[24px] text-center px-6 py-14 md:px-12 md:py-16"
          style={{
            background: "linear-gradient(135deg, #0b7d92, #0c1150)",
          }}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-70"
            style={{
              background:
                "radial-gradient(ellipse 60% 80% at 50% 0%, rgba(28,171,196,0.35), transparent 70%)",
            }}
          />

          <div className={`relative ${SECTION_EYEBROW} !mb-3.5 justify-center !text-accent-2`}>
            Prendre contact
          </div>
          <h2 className="relative font-display font-bold text-[clamp(1.7rem,3.2vw,2.3rem)] mb-3.5 text-white">
            Un équipement en panne ?
          </h2>
          <p className="relative text-white/75 max-w-[460px] mx-auto mb-9 text-[15.5px]">
            Décrivez votre besoin sur WhatsApp ou appelez-nous directement —
            nous revenons vers vous avec un diagnostic et un délai clair.
          </p>

          <div className="relative flex flex-wrap items-center justify-center gap-3.5">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-[9px] px-6 py-3 text-[14.5px] font-semibold bg-white text-accent hover:brightness-105 hover:-translate-y-px transition [&>svg]:text-[17px]"
            >
              <FaWhatsapp aria-hidden="true" />
              Écrire sur WhatsApp
            </a>
            <a
              href={PHONE_LINK}
              className="inline-flex items-center gap-2 rounded-[9px] px-6 py-3 text-[14.5px] font-semibold border border-white/30 text-white hover:border-white hover:-translate-y-px transition [&>svg]:text-[17px]"
            >
              <FiPhoneCall aria-hidden="true" />
              {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
