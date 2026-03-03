import React from "react";
import { Bot } from "lucide-react";

export default function OsonoIntro() {
  return (
    <section className="bg-[#1a1e23] text-white py-16 px-4 border-t border-white/10">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="w-16 h-16 rounded-full bg-[#d4765d] flex items-center justify-center shadow-lg shadow-[#d4765d]/40">
          <Bot className="w-9 h-9 text-white" />
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-serif mb-3">
            Conoce a Osiño, tu asistente en Pena da Osa
          </h2>
          <p className="text-stone-200 mb-3 leading-relaxed">
            Osiño puede ayudarte a resolver dudas sobre la casa rural, la zona de Sober y la Ribeira Sacra,
            y comprobar si tus fechas están disponibles antes de reservar.
          </p>
          <p className="text-stone-300 text-sm">
            Escríbele cosas como: «¿Tenéis libre el próximo fin de semana?» o «¿Qué se puede hacer cerca de Sober?».
          </p>
        </div>
      </div>
    </section>
  );
}
