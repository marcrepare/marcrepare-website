import {
  FaScrewdriverWrench,
  FaNetworkWired,
  FaSatelliteDish,
  FaDesktop,
  FaVideo,
  FaStethoscope,
  FaCartShopping,
} from "react-icons/fa6";
import { FiShield, FiZap } from "react-icons/fi";

export const SERVICES = [
  {
    slug: "reparation-pc",
    icon: FaScrewdriverWrench,
    title: "Réparation PC & portable",
    desc: "Diagnostic matériel, remplacement de pièces et remise en service rapide.",
    image: "/images/services/maintenance.jpg",
  },
  {
    slug: "installation-windows",
    icon: FaDesktop,
    title: "Installation Windows et logiciels",
    desc: "Réinstallation, mise à jour et configuration des logiciels essentiels.",
    image: "/images/services/atelier.jpg",
  },
  {
    slug: "suppression-virus",
    icon: FiShield,
    title: "Suppression de virus et malware",
    desc: "Nettoyage complet, sécurité renforcée et protection contre les infections.",
    image: "/images/services/depannage.jpg",
  },
  {
    slug: "optimisation",
    icon: FiZap,
    title: "Nettoyage & optimisation",
    desc: "Accélération du démarrage et optimisation des performances de votre PC.",
    image: "/images/services/reseaux.jpg",
  },
  {
    slug: "recuperation-donnees",
    icon: FaVideo,
    title: "Récupération de données",
    desc: "Restauration de fichiers, photos et documents perdus ou effacés.",
    image: "/images/services/atelier.jpg",
  },
  {
    slug: "depannage-urgent",
    icon: FaStethoscope,
    title: "Dépannage et diagnostic",
    desc: "Intervention express pour identifier la panne et proposer une solution claire.",
    image: "/images/services/depannage.jpg",
  },
  {
    slug: "reseaux-wifi",
    icon: FaNetworkWired,
    title: "Réseaux et Wi-Fi",
    desc: "Installation, configuration et optimisation de vos connexions réseau.",
    image: "/images/services/reseaux.jpg",
  },
  {
    slug: "installation-starlink",
    icon: FaSatelliteDish,
    title: "Installation d’antène Starlink",
    desc: "Mise en place d’une connexion Internet par satellite avec installation professionnelle et réglages optimisés.",
    image: "/images/services/starlink2.jpg",
  },
  {
    slug: "videosurveillance",
    icon: FaSatelliteDish,
    title: "Installation vidéosurveillance",
    desc: "Mise en place de caméras et contrôle à distance pour sécuriser votre local.",
    image: "/images/services/videoSurveillance.jpg",
  },
];