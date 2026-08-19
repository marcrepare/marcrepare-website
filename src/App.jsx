import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";
import DescriptionPanne from "./pages/DescriptionPanne.jsx";
import ServiceDetail from "./pages/ServiceDetail.jsx";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/description-de-panne" element={<DescriptionPanne />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
