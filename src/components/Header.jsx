import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa6";

const WHATSAPP_LINK = "https://wa.me/message/DPLC7GENBPZCF1";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { type: "route", to: "/services", label: "Services" },
    { type: "scroll", targetId: "mission", label: "À propos" },
    { type: "scroll", targetId: "contact", label: "Contact" },
  ];

  const goToSection = (targetId) => {
    setOpen(false);
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: targetId } });
    } else {
      document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[100] transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-line shadow-[0_1px_0_0_rgba(11,22,51,0.04)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-[1180px] mx-auto flex items-center justify-between gap-6 px-6 py-4">
        <Link to="/" className="flex items-center gap-2.5 font-display">
          <img
            src="/logo-mark.png"
            alt="MARC RÉPARE"
            className="w-9 h-9 rounded-lg object-cover"
          />
          <span className="text-[15px] tracking-wide text-ink font-medium">
            MARC <strong className="font-bold">RÉPARE</strong>
          </span>
        </Link>

        <nav className="hidden md:flex gap-8">
          {links.map((l) =>
            l.type === "route" ? (
              <Link
                key={l.to}
                to={l.to}
                className="text-[14.5px] text-ink-muted font-medium hover:text-accent transition-colors"
              >
                {l.label}
              </Link>
            ) : (
              <button
                key={l.targetId}
                onClick={() => goToSection(l.targetId)}
                className="text-[14.5px] text-ink-muted font-medium hover:text-accent transition-colors"
              >
                {l.label}
              </button>
            )
          )}
        </nav>

        <div className="flex items-center gap-3.5">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg bg-accent text-white font-semibold text-[13.5px] px-4 py-2.5 shadow-[0_8px_18px_-6px_rgba(11,125,146,0.55)] hover:brightness-110 hover:-translate-y-px transition"
          >
            <FaWhatsapp className="text-base" aria-hidden="true" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
          <button
            className="md:hidden flex flex-col justify-center gap-[5px] w-[34px] h-[34px] border border-line rounded-lg bg-white"
            aria-label="Ouvrir le menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="block w-4 h-0.5 mx-auto bg-ink rounded" />
            <span className="block w-4 h-0.5 mx-auto bg-ink rounded" />
            <span className="block w-4 h-0.5 mx-auto bg-ink rounded" />
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden flex flex-col px-6 pb-5 bg-white/95 border-b border-line">
          {links.map((l) =>
            l.type === "route" ? (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-3 border-b border-line text-[15px] text-ink-muted text-left"
              >
                {l.label}
              </Link>
            ) : (
              <button
                key={l.targetId}
                onClick={() => goToSection(l.targetId)}
                className="py-3 border-b border-line text-[15px] text-ink-muted text-left"
              >
                {l.label}
              </button>
            )
          )}
        </nav>
      )}
    </header>
  );
}
