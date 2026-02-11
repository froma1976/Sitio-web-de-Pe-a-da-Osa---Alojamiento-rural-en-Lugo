import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-[#1a1e23] border-t border-white/5 text-[#f9f6ef]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-20">

          {/* Brand Section */}
          <div className="md:col-span-2">
            <Link to="/" className="inline-block mb-6 group">
              <span className="text-3xl md:text-4xl font-serif text-[#e5c988] hover:text-white transition-colors tracking-tight">
                Pena da Osa
              </span>
            </Link>
            <p className="text-stone-400 text-lg leading-relaxed max-w-md font-light">
              Un refugio con encanto donde la arquitectura tradicional de piedra se fusiona con el confort moderno.
              El escenario perfecto para crear recuerdos inolvidables en el corazón de Galicia.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-serif text-[#d4765d] mb-6 tracking-wide">Contacto</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4 group">
                <MapPin className="h-5 w-5 text-stone-500 group-hover:text-[#d4765d] transition-colors mt-1" />
                <div className="text-stone-400 group-hover:text-white transition-colors">
                  <p>Os Pacios, 4</p>
                  <p>27460 Sober, Lugo</p>
                  <p className="text-sm text-stone-500 mt-1">Galicia, España</p>
                </div>
              </div>

              <a href="tel:+34639403998" className="flex items-center gap-4 group">
                <Phone className="h-5 w-5 text-stone-500 group-hover:text-[#d4765d] transition-colors" />
                <span className="text-stone-400 group-hover:text-white transition-colors">+34 639 403 998</span>
              </a>

              <a href="mailto:turismoruralpendaosa@gmail.com" className="flex items-center gap-4 group">
                <Mail className="h-5 w-5 text-stone-500 group-hover:text-[#d4765d] transition-colors" />
                <span className="text-stone-400 group-hover:text-white transition-colors">turismoruralpendaosa@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-serif text-[#d4765d] mb-6 tracking-wide">Explorar</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/about" className="text-stone-400 hover:text-white transition-colors hover:translate-x-1 inline-block duration-300">
                  La Casa
                </Link>
              </li>
              <li>
                <Link to="/galeria" className="text-stone-400 hover:text-white transition-colors hover:translate-x-1 inline-block duration-300">
                  Galería
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-stone-400 hover:text-white transition-colors hover:translate-x-1 inline-block duration-300">
                  Contacto
                </Link>
              </li>
              <li>
                <a
                  href="https://www.avaibook.com/reservas/nueva_reserva.php?cod_alojamiento=348171&lang=es"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-400 hover:text-white transition-colors hover:translate-x-1 inline-block duration-300"
                >
                  Reservar Ahora
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-stone-600 font-light">
            &copy; {new Date().getFullYear()} Pena da Osa. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <span className="text-xs text-stone-600 border border-stone-800 px-2 py-1 rounded">
              VUT-LU-001701
            </span>
            <Link to="/cookies" className="text-xs text-stone-600 hover:text-stone-400 transition-colors">
              Política de Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;