import { Link } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";

export default function PageBanner({ title, crumbs = [], image }) {
  return (
    <section className="relative overflow-hidden px-6 pt-36 pb-16 md:pt-40 md:pb-20 text-center bg-ink-2">
      {image && (
        <>
          <img
            src={image}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 w-full h-full object-cover opacity-25"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink-2/70 via-ink-2/85 to-ink-2"
          />
        </>
      )}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse 70% 80% at 50% 30%, black 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 80% at 50% 30%, black 40%, transparent 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-[160px] left-1/2 -translate-x-1/2 w-[640px] h-[420px]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(28,171,196,0.28) 0%, transparent 70%)",
        }}
      />

      <div className="relative">
        <h1 className="font-display font-bold text-[clamp(1.9rem,4vw,2.6rem)] text-white mb-3.5">
          {title}
        </h1>
        <nav
          aria-label="Fil d'ariane"
          className="inline-flex items-center gap-2 font-mono text-[13px] text-white/60"
        >
          <Link to="/" className="hover:text-accent-2 transition-colors">
            Accueil
          </Link>
          {crumbs.map((c) => (
            <span key={c} className="inline-flex items-center gap-2">
              <FiChevronRight className="text-[12px]" aria-hidden="true" />
              <span className="text-accent-2">{c}</span>
            </span>
          ))}
        </nav>
      </div>
    </section>
  );
}
