import { FiZap, FiShield, FiUsers } from "react-icons/fi";

const PILLARS = [
  {
    icon: FiZap,
    title: "Service rapide",
    desc: "Des interventions organisées pour limiter votre temps d'arrêt.",
  },
  {
    icon: FiShield,
    title: "Équipe expérimentée",
    desc: "Un travail professionnel, testé et vérifié avant chaque restitution.",
  },
  {
    icon: FiUsers,
    title: "100% sécurisé",
    desc: "Une assistance adaptée aux particuliers comme aux entreprises.",
  },
];

export default function Features() {
  return (
    <div className="px-6 pt-14 pb-6 md:pt-20">
      <div className="max-w-[1180px] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-5">
        {PILLARS.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="rounded-2xl bg-white border border-line p-6 hover:-translate-y-1 hover:shadow-lg hover:border-accent-2/40 transition-all"
          >
            <div className="grid place-items-center w-12 h-12 rounded-xl bg-accent-soft text-accent text-xl mb-4">
              <Icon aria-hidden="true" />
            </div>
            <h3 className="font-display font-semibold text-[16.5px] mb-2 text-ink">
              {title}
            </h3>
            <p className="text-sm text-ink-muted leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
