import {
  FaScrewdriverWrench,
  FaNetworkWired,
  FaSatelliteDish,
  FaWifi,
  FaDesktop,
  FaVideo,
  FaStethoscope,
  FaCartShopping,
} from "react-icons/fa6";

export const SERVICES = [
  {
    slug: "maintenance-reparation",
    icon: FaScrewdriverWrench,
    title: "Maintenance et réparation informatique",
    desc: "Diagnostic, nettoyage, remplacement de pièces et remise en état de vos ordinateurs et équipements.",
    image: "/images/services/maintenance.jpg",
  },
  {
    slug: "reseaux",
    icon: FaNetworkWired,
    title: "Installation et configuration de réseaux",
    desc: "Câblage, routeurs, switchs et architecture réseau adaptés à votre local ou vos bureaux.",
    image: "/images/services/reseaux.jpg",
  },
  {
    slug: "starlink",
    icon: FaSatelliteDish,
    title: "Installation et configuration Starlink",
    desc: "Mise en service complète de votre kit Starlink, orientation de l'antenne et réglages réseau.",
    image: "/images/services/starlink.jpg",
  },
  {
    slug: "wifi",
    icon: FaWifi,
    title: "Mise en place de solutions Wi-Fi",
    desc: "Couverture optimisée, points d'accès multiples et sécurisation de votre réseau sans fil.",
    image: "/images/services/wifi.jpg",
  },
  {
    slug: "equipements",
    icon: FaDesktop,
    title: "Installation d'équipements informatiques",
    desc: "Déploiement et configuration de postes, imprimantes et périphériques prêts à l'emploi.",
    image: "/images/services/equipements.jpg",
  },
  {
    slug: "videosurveillance",
    icon: FaVideo,
    title: "Installation de vidéosurveillance",
    desc: "Caméras, enregistreurs et accès à distance pour surveiller votre domicile ou votre entreprise.",
    image: "/images/services/reseaux.jpg",
  },
  {
    slug: "depannage",
    icon: FaStethoscope,
    title: "Dépannage et diagnostic technique",
    desc: "Intervention rapide pour identifier la panne et proposer une solution durable.",
    image: "/images/services/depannage.jpg",
  },
  {
    slug: "vente-materiel",
    icon: FaCartShopping,
    title: "Vente de matériel informatique et réseau",
    desc: "Fourniture et installation d'équipements adaptés à vos besoins et à votre budget.",
    image: "/images/services/atelier.jpg",
  },
];
