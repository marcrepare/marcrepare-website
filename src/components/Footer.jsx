import { Link } from "react-router-dom";
import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa6";
import { FiPhoneCall, FiMail, FiMapPin } from "react-icons/fi";

const WHATSAPP_LINK = "https://wa.me/message/DPLC7GENBPZCF1";
const PHONE_DISPLAY = "01 04 21 92 38";
const PHONE_LINK = "tel:0104219238";

const SERVICES = [
  "Réparation informatique",
  "Réseaux et câblage",
  "Installation Starlink",
  "Vidéosurveillance",
];

const LINKS = [
  { to: "/", label: "Accueil" },
  { to: "/services", label: "Services" },
];

export default function Footer() {
  return (
    <footer className="bg-ink-2 text-white/70">
      <div className="max-w-[1180px] mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.1fr] gap-10">
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <img
              src="/logo-mark.png"
              alt="MARC RÉPARE"
              className="w-9 h-9 rounded-lg object-cover"
            />
            <span className="text-[15px] tracking-wide text-white font-medium font-display">
              MARC <strong className="font-bold">RÉPARE</strong>
            </span>
          </div>
          <p className="text-[13.5px] leading-relaxed max-w-[280px] mb-5">
            Maintenance, dépannage et installation informatique pour
            particuliers, entreprises et professionnels à Abidjan.
          </p>
          <div className="flex items-center gap-3">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="grid place-items-center w-9 h-9 rounded-full bg-white/10 hover:bg-accent transition-colors"
            >
              <FaWhatsapp aria-hidden="true" />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="grid place-items-center w-9 h-9 rounded-full bg-white/10 hover:bg-accent transition-colors"
            >
              <FaFacebook aria-hidden="true" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="grid place-items-center w-9 h-9 rounded-full bg-white/10 hover:bg-accent transition-colors"
            >
              <FaInstagram aria-hidden="true" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-display font-semibold text-white text-[14.5px] mb-4">
            Liens rapides
          </h3>
          <ul className="flex flex-col gap-2.5 text-[13.5px]">
            {LINKS.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-accent-2 transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display font-semibold text-white text-[14.5px] mb-4">
            Services
          </h3>
          <ul className="flex flex-col gap-2.5 text-[13.5px]">
            {SERVICES.map((s) => (
              <li key={s}>
                <Link to="/services" className="hover:text-accent-2 transition-colors">
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display font-semibold text-white text-[14.5px] mb-4">
            Contact
          </h3>
          <ul className="flex flex-col gap-3 text-[13.5px]">
            <li className="flex items-center gap-2.5">
              <FiPhoneCall className="text-accent-2 shrink-0" aria-hidden="true" />
              <a href={PHONE_LINK} className="hover:text-accent-2 transition-colors">
                {PHONE_DISPLAY}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <FiMail className="text-accent-2 shrink-0" aria-hidden="true" />
              <a
                href="mailto:contact@marcrepare.ci"
                className="hover:text-accent-2 transition-colors"
              >
                marcrepare.ci@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <FiMapPin className="text-accent-2 shrink-0" aria-hidden="true" />
              Abidjan, Côte d'Ivoire
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-6">
        <div className="max-w-[1180px] mx-auto flex flex-wrap items-center justify-between gap-2.5 font-mono text-[12px] text-white/45 text-center sm:text-left">
          <span>© {new Date().getFullYear()} MARC RÉPARE — Abidjan, Côte d'Ivoire</span>
          <span>Votre problème, notre solution.</span>
        </div>
      </div>
    </footer>
  );
}
