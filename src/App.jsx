
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import MainLayout from "@/layouts/MainLayout";
import HomePage from "@/pages/HomePage";
import GaleriaPage from "@/pages/GaleriaPage";
import ContactoPage from "@/pages/ContactoPage";
import AboutPage from "@/pages/AboutPage";
import ReservasPage from "@/pages/ReservasPage";
import CookiesPage from "@/pages/CookiesPage";
import NotFoundPage from "@/pages/NotFoundPage";
import CookieBanner from "@/components/CookieBanner";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="galeria" element={<GaleriaPage />} />
          <Route path="contacto" element={<ContactoPage />} />
          <Route path="reservas" element={<ReservasPage />} />
          <Route path="cookies" element={<CookiesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      <CookieBanner />
    </BrowserRouter>
  );
}

export default App;
