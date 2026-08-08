import { useEffect } from "react";
import { useLocation } from "react-router-dom";
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
