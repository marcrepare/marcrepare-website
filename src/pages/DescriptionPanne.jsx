import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa6";
import PageBanner from "../components/PageBanner.jsx";

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

export default function DescriptionPanne() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [device, setDevice] = useState("");
    const [service, setService] = useState("");
    const [details, setDetails] = useState("");

    const message = [
        "Bonjour MARC RÉPARE,",
        name && `Je m'appelle ${name}.`,
        phone && `Mon contact : ${phone}.`,
        device && `Appareil : ${device}.`,
        service && `Service souhaité : ${service}.`,
        details && `Description de la panne : ${details}.`,
    ]
        .filter(Boolean)
        .join(" ");

    const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    return (
        <>
            <PageBanner
                title="Description de panne"
                crumbs={["Description de panne"]}
                image="/images/services/depannage.jpg"
            />

            <section className="px-6 py-20 md:py-28 bg-bg">
                <div className="max-w-[1180px] mx-auto">
                    <div className="rounded-[32px] bg-white border border-line shadow-[0_20px_60px_-20px_rgba(11,22,51,0.15)] overflow-hidden">
                        <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
                            <div className="bg-surface-alt p-8 md:p-12 flex flex-col justify-center">
                                <div className="text-sm uppercase tracking-[0.24em] text-accent mb-4">
                                    Nous sommes là pour vous aider
                                </div>
                                <h2 className="font-display text-3xl md:text-[3rem] font-bold text-ink leading-tight">
                                    Décrivez votre panne et recevez une prise en charge rapide.
                                </h2>
                                <p className="mt-6 max-w-xl text-[15.5px] text-ink-muted leading-relaxed">
                                    Renseignez les détails de votre appareil et son dysfonctionnement. Nous vous
                                    contactons rapidement pour un diagnostic clair et une intervention adaptée.
                                </p>

                                <div className="mt-10 grid gap-4">
                                    <div className="rounded-[28px] bg-white p-6 shadow-sm">
                                        <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-ink-muted mb-4">
                                            Contact direct
                                        </p>
                                        <div className="space-y-4 text-[14px] text-ink">
                                            <div>
                                                <p className="font-semibold">Email</p>
                                                <p className="text-ink-muted">marcrepare.ci@gmail.com</p>
                                            </div>
                                            <div>
                                                <p className="font-semibold">Téléphone</p>
                                                <p className="text-ink-muted">+225 01 04 21 92 38</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rounded-[28px] bg-white p-6 shadow-sm">
                                        <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-ink-muted mb-4">
                                            Ce que nous avons besoin
                                        </p>
                                        <ul className="list-disc pl-5 space-y-2 text-[14px] text-ink-muted">
                                            <li>Appareil concerné</li>
                                            <li>Symptômes ou message d’erreur</li>
                                            <li>Durée du problème</li>
                                            <li>Service recherché</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-surface-alt p-8 md:p-12 flex items-center justify-center">
                                <div className="w-full max-w-xl rounded-[32px] bg-white p-8 shadow-[0_18px_56px_-24px_rgba(11,22,51,0.32)]">
                                    <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
                                        <div>
                                            <label className="block text-[12px] font-medium text-ink-muted mb-2">
                                                Nom complet
                                            </label>
                                            <input
                                                type="text"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                placeholder="Votre nom"
                                                className="w-full rounded-[24px] border border-line bg-white px-4 py-4 text-[14px] text-ink shadow-sm focus:outline-none focus:border-accent-2"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-[12px] font-medium text-ink-muted mb-2">
                                                Téléphone
                                            </label>
                                            <input
                                                type="tel"
                                                value={phone}
                                                onChange={(e) => setPhone(e.target.value)}
                                                placeholder="Votre numéro"
                                                className="w-full rounded-[24px] border border-line bg-white px-4 py-4 text-[14px] text-ink shadow-sm focus:outline-none focus:border-accent-2"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-[12px] font-medium text-ink-muted mb-2">
                                                Appareil
                                            </label>
                                            <input
                                                type="text"
                                                value={device}
                                                onChange={(e) => setDevice(e.target.value)}
                                                placeholder="Ex : PC portable, routeur, caméra"
                                                className="w-full rounded-[24px] border border-line bg-white px-4 py-4 text-[14px] text-ink shadow-sm focus:outline-none focus:border-accent-2"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-[12px] font-medium text-ink-muted mb-2">
                                                Service souhaité
                                            </label>
                                            <select
                                                value={service}
                                                onChange={(e) => setService(e.target.value)}
                                                className="w-full rounded-[24px] border border-line bg-white px-4 py-4 text-[14px] text-ink shadow-sm focus:outline-none focus:border-accent-2"
                                            >
                                                <option value="">Choisir un service</option>
                                                {SERVICES.map((item) => (
                                                    <option key={item} value={item}>
                                                        {item}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                        <div>
                                            <label className="block text-[12px] font-medium text-ink-muted mb-2">
                                                Description de la panne
                                            </label>
                                            <textarea
                                                value={details}
                                                onChange={(e) => setDetails(e.target.value)}
                                                placeholder="Expliquez le problème, les erreurs, et depuis quand cela arrive"
                                                rows={6}
                                                className="w-full rounded-[24px] border border-line bg-white px-4 py-4 text-[14px] text-ink shadow-sm focus:outline-none focus:border-accent-2"
                                            />
                                        </div>

                                        <div className="flex flex-col items-center gap-4">
                                            <a
                                                href={href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-4 text-sm font-semibold text-white transition hover:brightness-110"
                                            >
                                                <FaWhatsapp aria-hidden="true" />
                                                Envoyer via WhatsApp
                                            </a>
                                            <p className="text-center text-xs text-ink-muted max-w-xs">
                                                Votre message sera pré-rempli avec les informations saisies.
                                            </p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
