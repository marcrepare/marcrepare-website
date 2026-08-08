import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa6";

const WHATSAPP_NUMBER = "message/DPLC7GENBPZCF1";

const SERVICES = [
  "Maintenance et réparation informatique",
  "Réseaux et câblage",
  "Installation Starlink",
  "Wi-Fi et couverture réseau",
  "Installation d'équipements",
  "Vidéosurveillance",
  "Dépannage et diagnostic",
  "Vente de matériel",
];

export default function QuickRequest() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");

  const message = [
    "Bonjour MARC RÉPARE,",
    name && `Je m'appelle ${name}.`,
    phone && `Mon contact : ${phone}.`,
    service
      ? `J'aimerais une intervention : ${service}.`
      : "J'aimerais une intervention.",
  ]
    .filter(Boolean)
    .join(" ");

  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  return (
    <div className="relative z-10 px-6 -mt-16 md:-mt-[72px]">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="max-w-[1180px] mx-auto rounded-2xl bg-white border border-line shadow-[0_20px_50px_-20px_rgba(11,22,51,0.25)] p-5 md:p-6 grid grid-cols-1 md:grid-cols-[1fr_1fr_1.3fr_auto] gap-3.5"
      >
        <div>
          <label className="block text-[11.5px] font-medium text-ink-muted mb-1.5">
            Nom
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Votre nom"
            className="w-full rounded-lg border border-line bg-surface-alt px-3.5 py-2.5 text-[14px] text-ink placeholder:text-ink-faint focus:outline-none focus:border-accent-2"
          />
        </div>
        <div>
          <label className="block text-[11.5px] font-medium text-ink-muted mb-1.5">
            Téléphone
          </label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Votre numéro"
            className="w-full rounded-lg border border-line bg-surface-alt px-3.5 py-2.5 text-[14px] text-ink placeholder:text-ink-faint focus:outline-none focus:border-accent-2"
          />
        </div>
        <div>
          <label className="block text-[11.5px] font-medium text-ink-muted mb-1.5">
            Service souhaité
          </label>
          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="w-full rounded-lg border border-line bg-surface-alt px-3.5 py-2.5 text-[14px] text-ink focus:outline-none focus:border-accent-2"
          >
            <option value="">Choisir un service</option>
            {SERVICES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="self-end inline-flex items-center justify-center gap-2 rounded-lg bg-accent text-white font-semibold text-[14px] px-5 py-2.5 shadow-[0_10px_20px_-8px_rgba(11,125,146,0.55)] hover:brightness-110 transition"
        >
          <FaWhatsapp aria-hidden="true" />
          Demander
        </a>
      </form>
    </div>
  );
}
