import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import MainLayout from "@/layouts/MainLayout";
import HomePage from "@/pages/HomePage";
import GaleriaPage from "@/pages/GaleriaPage";
import ContactoPage from "@/pages/ContactoPage";
import LaCasaPage from "@/pages/LaCasaPage";
import ReservasPage from "@/pages/ReservasPage";
import EntornoPage from "@/pages/EntornoPage";
import CookiesPage from "@/pages/CookiesPage";
import NotFoundPage from "@/pages/NotFoundPage";
import CookieBanner from "@/components/CookieBanner";
import ErrorBoundary from "@/components/ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="lacasa" element={<LaCasaPage />} />
            <Route path="about" element={<Navigate to="/lacasa" replace />} />
            <Route path="entorno" element={<EntornoPage />} />
            <Route path="galeria" element={<GaleriaPage />} />
            <Route path="contacto" element={<ContactoPage />} />
            <Route path="reservas" element={<ReservasPage />} />
            <Route path="cookies" element={<CookiesPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
        <CookieBanner />
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
