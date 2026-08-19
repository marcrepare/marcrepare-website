import {
  FaScrewdriverWrench,
  FaNetworkWired,
  FaSatelliteDish,
  FaDesktop,
  FaVideo,
  FaStethoscope,
} from "react-icons/fa6";
import { FiShield, FiZap } from "react-icons/fi";

export const SERVICES = [
  {
    slug: "reparation-pc",
    icon: FaScrewdriverWrench,
    title: "Réparation PC et ordinateur portable",
    desc: "Diagnostic et réparation des ordinateurs de bureau et portables : pannes matérielles, composants défectueux et remise en service.",
    image: "/images/services/maintenance.jpg",
  },
  {
    slug: "installation-windows",
    icon: FaDesktop,
    title: "Installation Windows et logiciels",
    desc: "Installation, réinstallation et configuration de Windows, pilotes et logiciels essentiels pour un ordinateur fonctionnel.",
    image: "/images/services/atelier.jpg",
  },
  {
    slug: "suppression-virus",
    icon: FiShield,
    title: "Suppression de virus et malwares",
    desc: "Détection et suppression des virus, malwares et logiciels indésirables avec renforcement de la sécurité de votre ordinateur.",
    image: "/images/services/depannage.jpg",
  },
  {
    slug: "optimisation",
    icon: FiZap,
    title: "Nettoyage et optimisation PC",
    desc: "Optimisation des performances, nettoyage du système et amélioration du démarrage pour retrouver un ordinateur plus rapide.",
    image: "/images/services/reseaux.jpg",
  },
  {
    slug: "recuperation-donnees",
    icon: FaDesktop,
    title: "Récupération de données",
    desc: "Aide à la récupération de fichiers, photos et documents supprimés ou devenus difficiles à accéder.",
    image: "/images/services/atelier.jpg",
  },
  {
    slug: "depannage-urgent",
    icon: FaStethoscope,
    title: "Dépannage informatique",
    desc: "Diagnostic rapide des pannes informatiques et recherche d'une solution adaptée à votre ordinateur ou équipement.",
    image: "/images/services/depannage.jpg",
  },
  {
    slug: "reseaux-wifi",
    icon: FaNetworkWired,
    title: "Installation réseaux et Wi-Fi",
    desc: "Installation, configuration et optimisation de réseaux informatiques et Wi-Fi pour particuliers et professionnels à Abidjan.",
    image: "/images/services/reseaux.jpg",
  },
  {
    slug: "installation-starlink",
    icon: FaSatelliteDish,
    title: "Installation d'antenne Starlink",
    desc: "Installation et configuration de votre équipement Starlink, avec orientation de l'antenne et optimisation de la connexion Internet.",
    image: "/images/services/starlink2.jpg",
  },
  {
    slug: "videosurveillance",
    icon: FaVideo,
    title: "Installation de vidéosurveillance",
    desc: "Installation de caméras de surveillance, configuration du système et accès à distance pour sécuriser votre domicile ou votre entreprise.",
    image: "/images/services/videoSurveillance.jpg",
  },
];
