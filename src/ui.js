// Classes Tailwind réutilisées à plusieurs endroits.
// (Remplace les anciennes classes définies via @apply, qui nécessitaient
// une étape de build PostCSS — ici Tailwind tourne via le CDN dans index.html.)

export const BTN =
  "inline-flex items-center gap-2 rounded-[9px] px-6 py-3 text-[14.5px] font-semibold transition [&>svg]:text-[17px]";

export const BTN_PRIMARY = `${BTN} bg-accent text-white shadow-[0_10px_24px_-8px_rgba(11,125,146,0.55)] hover:brightness-110 hover:-translate-y-px`;

export const BTN_GHOST = `${BTN} bg-white border border-line text-ink hover:border-accent-2 hover:text-accent transition`;

export const SECTION_EYEBROW =
  "inline-flex items-center gap-2 font-mono text-[12px] font-medium uppercase tracking-[0.12em] text-accent mb-3.5 before:content-[''] before:w-4 before:h-[2px] before:bg-accent-2";

export const SECTION_TITLE =
  "font-display font-bold text-[clamp(1.7rem,3.4vw,2.4rem)] tracking-tight mb-3.5 max-w-xl text-ink";

export const SECTION_LEAD =
  "text-ink-muted max-w-lg text-[15.5px] mb-12";
