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
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const prev = document.body.style.overflow;
    if (isMenuOpen) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={`fixed z-50 transition-all duration-500 ${
          isScrolled
            ? "top-4 left-4 right-4 mx-auto max-w-[1400px]"
            : "top-0 left-0 right-0"
        }`}
      >
        <div
          className={`transition-all duration-500 rounded-2xl ${
            isScrolled
              ? "bg-[#1a1e23]/90 backdrop-blur-xl border border-white/10 shadow-2xl"
              : "bg-transparent border border-transparent"
          }`}
        >
          <div className="mx-auto flex w-full items-center justify-between px-6 md:px-8 py-4">
            
            {/* Logo */}
            <Link to="/" className="group flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4765d] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a1e23] rounded-lg" aria-label="Ir a inicio">
              <span className={`font-signature text-2xl md:text-3xl text-[#e5c988] transition-all duration-300 ${isScrolled ? 'opacity-100' : 'opacity-90'}`}>
                Pena da Osa
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              <nav className="flex items-center gap-6 lg:gap-8">
                {navItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    end={item.path === "/"}
                    className={({ isActive }) =>
                      `text-sm font-semibold tracking-[0.15em] uppercase transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4765d] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded px-2 py-1 ${
                        isActive ? "text-[#d4765d]" : "text-white/80 hover:text-white hover:tracking-[0.18em]"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </nav>

              {/* CTA Button - Más prominente */}
              <a
                href="https://www.avaibook.com/reservas/nueva_reserva.php?cod_alojamiento=348171&lang=es"
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  inline-flex items-center rounded-full px-6 lg:px-8 py-3 text-sm font-bold tracking-[0.15em] uppercase 
                  transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#e5c988]/20
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e5c988] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent
                  ${isScrolled 
                    ? "bg-[#e5c988] text-[#1a1e23] hover:bg-white" 
                    : "bg-[#e5c988] text-[#1a1e23] hover:bg-white shadow-lg shadow-black/20"}
                `}
              >
                Reservar
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4765d]"
              aria-label="Abrir menu"
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-[#1a1e23]/98 backdrop-blur-xl"
          >
            <div
              className="absolute inset-0 opacity-20"
              style={{ backgroundImage: "var(--pattern-topo)", backgroundSize: "520px 520px" }}
            />

            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-6 right-6 p-2 text-white rounded-lg hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4765d]"
              aria-label="Cerrar menu"
            >
              <X className="w-8 h-8" />
            </button>

            <nav className="relative h-full flex flex-col items-center justify-center space-y-8 text-center px-6">
              <h2 className="text-4xl md:text-5xl font-serif text-[#e5c988] mb-4 tracking-tight">
                Pena da Osa
              </h2>
              
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-2xl md:text-3xl font-serif tracking-wide text-white hover:text-[#e5c988] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4765d] rounded px-4 py-2"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
                href="https://www.avaibook.com/reservas/nueva_reserva.php?cod_alojamiento=348171&lang=es"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="mt-4 inline-flex items-center rounded-full bg-[#e5c988] text-[#1a1e23] px-10 py-4 text-base font-bold tracking-[0.2em] uppercase hover:bg-white transition-all duration-300 transform hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Reservar
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;
