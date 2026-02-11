import React, { useEffect, useMemo, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navItems = useMemo(
    () => [
      { name: "Inicio", path: "/" },
      { name: "La Casa", path: "/about" },
      { name: "Experiencias", path: "/galeria" },
      { name: "Contacto", path: "/contacto" },
    ],
    []
  );

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // Close mobile nav on route change
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    // Prevent background scroll when menu is open
    const prev = document.body.style.overflow;
    if (isMenuOpen) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isMenuOpen]);

  const linkBase =
    "text-xs font-semibold tracking-[0.18em] uppercase transition-colors";
  const linkClass = ({ isActive }) =>
    `${linkBase} ${isActive
      ? "text-[#d4765d]"
      : "text-white/80 hover:text-white"
    }`;

  return (
    <>
      <header
        className={
          "fixed top-0 left-0 right-0 z-50 pointer-events-none transition-all duration-300"
        }
      >
        <div
          className={
            "pointer-events-auto mx-auto flex w-full max-w-[1400px] items-start justify-between px-4 md:px-8" +
            (isScrolled
              ? " py-4"
              : " py-6 md:py-8")
          }
        >

          {/* Logo - Mobile Only (Floating Left) */}
          <div className="pointer-events-auto md:hidden">
            <Link to="/" className="block group" aria-label="Ir a inicio">
              <span className="font-serif text-2xl tracking-wide text-white group-hover:text-[#e5c988] transition-colors">
                Pena da Osa
              </span>
            </Link>
          </div>

          {/* Navigation Block - Top Right Cream Box */}
          {/* Navigation Block - Centered with Logo beside */}
          {/* Navigation Block - Top Right (No Logo) */}
          <div
            className={
              "pointer-events-auto hidden md:flex items-center gap-8 pl-8 pr-2 py-1 ml-auto rounded-full border shadow-lg transition-all duration-300" +
              (isScrolled
                ? " bg-[#1a1e23]/90 backdrop-blur-md border-white/10"
                : " bg-[#1a1e23]/70 backdrop-blur-sm border-white/5")
            }
          >
            <nav className="flex items-center gap-6 py-3">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === "/"}
                  className={linkClass}
                >
                  {item.name}
                </NavLink>
              ))}
            </nav>
            <div className="pr-1 py-1">
              <a
                href="https://www.avaibook.com/reservas/nueva_reserva.php?cod_alojamiento=348171&lang=es"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full px-6 py-2.5 text-xs font-semibold tracking-[0.18em] uppercase transition-all bg-[#1a1e23] text-white hover:bg-[#d4765d]"
              >
                Reservar
              </a>
            </div>
          </div>

          {/* Mobile Menu Button - Visible only on mobile */}
          <div className="pointer-events-auto md:hidden">
            <button
              onClick={() => setIsMenuOpen(true)}
              className={
                "text-white p-3 rounded-full shadow-lg border transition-all " +
                (isScrolled
                  ? "bg-[#1a1e23]/90 backdrop-blur-md border-white/10"
                  : "bg-[#1a1e23]/70 backdrop-blur-sm border-white/5")
              }
              aria-label="Abrir menu"
              aria-expanded={isMenuOpen}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween" }}
            className="fixed inset-0 z-[60] flex flex-col items-center justify-center pointer-events-auto"
          >
            <div className="absolute inset-0 bg-[#1a1e23]" />
            <div
              className="absolute inset-0 opacity-30"
              style={{ backgroundImage: "var(--pattern-topo)", backgroundSize: "520px 520px" }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#1a1e23]/10 via-transparent to-[#1a1e23]/10" />

            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-6 right-6 p-2 text-white"
              aria-label="Cerrar menu"
            >
              <X className="w-8 h-8" />
            </button>

            <nav className="relative flex flex-col items-center space-y-7 text-center">

              <h2 className="text-4xl font-serif text-[#e5c988] mb-8 tracking-tight">
                Pena da Osa
              </h2>
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl font-serif tracking-wide text-white"
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="https://www.avaibook.com/reservas/nueva_reserva.php?cod_alojamiento=348171&lang=es"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="mt-2 inline-flex items-center rounded-full bg-[#1a1e23] text-white px-8 py-3 text-sm font-semibold tracking-[0.28em] uppercase hover:bg-[#d4765d] transition-colors"
              >
                Reservar
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;
