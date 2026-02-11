import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowLeft, Compass } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NotFoundPage = () => {
  return (
    <>
      <Helmet>
        <title>404 - Perdido en el Bosque | Pena da Osa</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <div className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden bg-[#1a1e23]">
        
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-center opacity-40 scale-105"
            style={{ backgroundImage: "url('/images/galeria/alrededor.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1e23]/80 via-[#1a1e23]/50 to-[#1a1e23]" />
        </div>

        {/* Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-2xl mx-auto"
        >
          <div className="mb-6 inline-flex p-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            <Compass className="w-8 h-8 text-[#e5c988] animate-pulse" />
          </div>

          <h1 className="font-serif text-6xl md:text-8xl text-[#e5c988] mb-4 opacity-90">
            404
          </h1>
          
          <p className="font-signature text-4xl md:text-5xl text-white/90 mb-6 -rotate-2 origin-center">
            Parece que te has desviado del sendero...
          </p>
          
          <p className="text-stone-300 text-lg max-w-md mx-auto mb-10 font-light leading-relaxed">
            Pero no te preocupes, en Galicia perderse es solo otra forma de encontrar lugares maravillosos.
          </p>

          <Button 
            asChild 
            size="lg"
            className="rounded-full px-8 bg-[#e5c988] text-[#1a1e23] hover:bg-white hover:text-[#1a1e23] font-bold tracking-widest uppercase transition-all"
          >
            <Link to="/" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Volver al Refugio
            </Link>
          </Button>
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute bottom-10 left-0 right-0 text-center z-10">
          <p className="text-xs text-stone-500 uppercase tracking-[0.3em]">
            Pena da Osa • Sober, Lugo
          </p>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
