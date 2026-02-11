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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
          isScrolled
            ? "bg-[#1a1e23]/80 backdrop-blur-md py-3 border-white/10 shadow-lg"
            : "bg-transparent py-6 border-transparent"
        }`}
      >
        <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between px-6 md:px-12">
          
          {/* Logo */}
          <Link to="/" className="group flex items-center gap-2" aria-label="Ir a inicio">
            <span className={`font-signature text-2xl md:text-3xl text-[#e5c988] transition-opacity duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0 md:opacity-100'}`}>
              Pena da Osa
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-8">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === "/"}
                  className={({ isActive }) =>
                    `text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 ${
                      isActive ? "text-[#d4765d]" : "text-white/80 hover:text-white hover:tracking-[0.25em]"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </nav>

            {/* CTA Button */}
            <a
              href="https://www.avaibook.com/reservas/nueva_reserva.php?cod_alojamiento=348171&lang=es"
              target="_blank"
              rel="noopener noreferrer"
              className={`
                inline-flex items-center rounded-full px-6 py-2.5 text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300
                ${isScrolled 
                  ? "bg-[#e5c988] text-[#1a1e23] hover:bg-white" 
                  : "bg-white/10 text-white backdrop-blur-sm hover:bg-[#e5c988] hover:text-[#1a1e23] border border-white/20"}
              `}
            >
              Reservar
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden text-white p-2"
            aria-label="Abrir menu"
          >
            <Menu className="w-6 h-6" />
          </button>
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
