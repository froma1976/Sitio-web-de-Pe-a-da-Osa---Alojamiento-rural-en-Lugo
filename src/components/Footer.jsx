import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Instagram } from "lucide-react";
function Footer() {
  return <footer className="bg-stone-100 border-t border-stone-200 mt-auto">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand Section */}
        <div>
          <span className="text-2xl font-bold text-stone-800 mb-4 block" style={{
            fontFamily: 'Georgia, serif'
          }}>
            Peña da Osa
          </span>
          <p className="text-stone-600 text-sm leading-relaxed max-w-xs">
            Un retiro rural de lujo con arquitectura tradicional de piedra, impresionantes vistas al lago y comodidades modernas para una estancia inolvidable.
          </p>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-lg font-semibold text-stone-800 mb-4">Contacto</h3>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <MapPin className="h-5 w-5 text-stone-600 mt-0.5 flex-shrink-0" />
              <div className="text-sm text-stone-600">
                <p className="font-medium">Os pacios, 4 27460 SOBER
                </p>
                <p>Galicia, España</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-stone-600 flex-shrink-0" />
              <span className="text-sm text-stone-600">+34 639 403 998</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-stone-600 flex-shrink-0" />
              <span className="text-sm text-stone-600">turismoruralpendaosa@gmail.com</span>
            </div>
          </div>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold text-stone-800 mb-4">Enlaces</h3>
          <div className="space-y-2">
            <Link to="/about" className="block text-sm text-stone-600 hover:text-stone-900 transition-colors">
              Acerca de la Propiedad
            </Link>
            <Link to="/galeria" className="block text-sm text-stone-600 hover:text-stone-900 transition-colors">
              Ver Galería
            </Link>
            <a href="https://www.avaibook.com/reservas/nueva_reserva.php?cod_alojamiento=348171&lang=es" target="_blank" rel="noopener noreferrer" className="block text-sm text-stone-600 hover:text-stone-900 transition-colors">
              Reservar tu Estancia
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-stone-200 mt-8 pt-6 text-center">
        <p className="text-sm text-stone-500">
          &copy; {new Date().getFullYear()} Peña da Osa. Todos los derechos reservados.
        </p>
        <div className="flex items-center justify-center gap-3 mt-2">
          <p className="text-xs text-stone-400">
            Licencia Turística: VUT-LU-001701
          </p>
          <span className="text-xs text-stone-300">•</span>
          <Link to="/cookies" className="text-xs text-stone-400 hover:text-stone-600 underline transition-colors">
            Política de Cookies
          </Link>
        </div>
      </div>
    </div>
  </footer>;
}
export default Footer;