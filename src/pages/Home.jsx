import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import Hero from "../components/Hero.jsx";
import QuickRequest from "../components/QuickRequest.jsx";
import Features from "../components/Features.jsx";
import Mission from "../components/Mission.jsx";
import Testimonials from "../components/Testimonials.jsx";
import Services from "../components/Services.jsx";
import Contact from "../components/Contact.jsx";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    const targetId = location.state?.scrollTo;

    if (targetId) {
      const el = document.getElementById(targetId);
      el?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0 });
    }
  }, [location]);

  return (
    <>
      <Helmet>
        <title>
          Service informatique à Abidjan | MARC RÉPARE
        </title>

        <meta
          name="description"
          content="MARC RÉPARE propose des services informatiques à Abidjan : réparation PC, dépannage informatique, réseaux Wi-Fi, installation Starlink, vidéosurveillance et maintenance informatique."
        />

        <meta
          name="robots"
          content="index, follow"
        />

        <link
          rel="canonical"
          
          href="https://www.servicesinformatique.space/"
        />
        <script type="application/ld+json">
  {JSON.stringify({
    "@context": "https://schema.org",
    "@type": "ComputerStore",
    "name": "MARC RÉPARE",
    "url": "https://www.servicesinformatique.space/",
    "telephone": "+2250104219238",
    "email": "marcrepare.ci@gmail.com",
    "description":
      "Service informatique à Abidjan : réparation PC, dépannage informatique, réseaux Wi-Fi, installation Starlink, vidéosurveillance et maintenance informatique.",
    "areaServed": {
      "@type": "City",
      "name": "Abidjan"
    },
    "sameAs": []
  })}
</script>

      </Helmet>

      <Hero />
      <QuickRequest />
      <Features />
      <Mission />
      <Testimonials />
      <Services />
      <Contact />
    </>
  );
}