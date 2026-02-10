
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import {
  Dialog,
  DialogContent,
  DialogClose,
} from "@/components/ui/dialog";

function GaleriaPage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const slugify = (str) =>
    str
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");

  // Group images by category
  const categories = [
    {
      name: "Salón",
      images: [
        "/images/galeria/salon.jpg",
        "/images/galeria/salon1.jpg",
        "/images/galeria/salon3.jpg",
        "/images/galeria/sala.jpg"
      ]
    },
    {
      name: "Habitaciones",
      images: [
        "/images/galeria/habitacion1.jpg",
        "/images/galeria/habitacion2.jpg",
        "/images/galeria/habitacion3.jpg",
        "/images/galeria/habitacion4.jpg",
        "/images/galeria/habitacion5.jpg",
        "/images/galeria/habitacion6.jpg"
      ]
    },
    {
      name: "Cocina",
      images: [
        "/images/galeria/cocina1.jpg",
        "/images/galeria/cocina2.jpg",
        "/images/galeria/cocina3.jpg"
      ]
    },
    {
      name: "Patio",
      images: [
        "/images/galeria/exterior3.jpg",
        "/images/galeria/exterior.jpg",
        "/images/galeria/exterior11.jpg",
        "/images/galeria/exterior14.jpg",
        "/images/galeria/exterioir15.jpg"
      ]
    },
    {
      name: "Terraza",
      images: [
        "/images/galeria/exterior8.jpg"
      ]
    },
    {
      name: "Exterior y Fachada",
      images: [
        "/images/galeria/exterior12.jpg",
        "/images/galeria/exterior13.jpg",
        "/images/galeria/exterior5.jpg",
        "/images/galeria/exterior6.jpg",
        "/images/galeria/exterior18.jpg"
      ]
    },
    {
      name: "Alrededores",
      images: [
        "/images/galeria/alrededor.jpg",
        "/images/galeria/alrededor1.jpg",
        "/images/galeria/alrededor3.jpg",
        "/images/galeria/alrededor4.jpg",
        "/images/galeria/alrededor5.jpg",
        "/images/galeria/alrededor7.jpg",
        "/images/galeria/alrededor8.jpg",
        "/images/galeria/alrededeor9.jpg",
        "/images/galeria/alrededor19.jpg",
        "/images/galeria/alrededor20.jpg"
      ]
    }
  ];

  // Flatten all images for lightbox navigation
  const allImages = categories.flatMap(cat => cat.images.map(img => ({ url: img, category: cat.name })));

  const openLightbox = (url) => {
    const index = allImages.findIndex(img => img.url === url);
    setCurrentIndex(index);
    setSelectedImage(allImages[index]);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : allImages.length - 1;
    setCurrentIndex(newIndex);
    setSelectedImage(allImages[newIndex]);
  };

  const goToNext = () => {
    const newIndex = currentIndex < allImages.length - 1 ? currentIndex + 1 : 0;
    setCurrentIndex(newIndex);
    setSelectedImage(allImages[newIndex]);
  };

  return (
    <>
      <Helmet>
        <title>Galería - Peña da Osa | Recorrido Fotográfico</title>
        <meta
          name="description"
          content="Explora la galería de fotos de Peña da Osa. Vea nuestras habitaciones, cocina, patio, zona de barbacoa, sala de cine y los impresionantes alrededores exteriores."
        />
      </Helmet>

      <PageHero
        eyebrow="Galería"
        title="Recorrido fotográfico"
        subtitle="Interior, exterior y alrededores. Un vistazo fiel para que sepas exactamente lo que vas a vivir."
        backgroundImage="/images/galeria/alrededor5.jpg"
      />

      {/* Category quick nav */}
      <section className="bg-[#f5f3ef] border-y border-black/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-6">
          <div className="flex gap-3 overflow-x-auto no-scrollbar">
            {categories.map((c) => (
              <button
                key={c.name}
                type="button"
                onClick={() => {
                  const el = document.getElementById(slugify(c.name));
                  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className="shrink-0 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-xs font-semibold tracking-[0.18em] uppercase text-[#1a1e23] hover:bg-white hover:border-black/20 transition-colors"
              >
                {c.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid by Category */}
      <section className="py-20 bg-[#f7f6f2]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 space-y-20">
          {categories.map((category, catIndex) => (
            <div key={catIndex} id={slugify(category.name)} className="scroll-mt-28">
              <h2 className="text-2xl md:text-3xl font-semibold text-[#1a1e23] mb-8 border-b border-black/10 pb-3 inline-block pr-10 font-serif">
                {category.name}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.images.map((imgUrl, imgIndex) => (
                  <motion.div
                    key={`${catIndex}-${imgIndex}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: imgIndex * 0.05 }}
                    className="group cursor-pointer"
                    onClick={() => openLightbox(imgUrl)}
                  >
                    <div className="relative overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 h-64 bg-black/5">
                      <img
                        src={imgUrl}
                        alt={`${category.name} - Vista ${imgIndex + 1}`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      <Dialog open={!!selectedImage} onOpenChange={closeLightbox}>
        <DialogContent className="max-w-[95vw] w-full p-0 bg-black/95 border-0 shadow-none sm:rounded-none h-screen flex flex-col justify-center">
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Close Button */}
            <DialogClose className="absolute top-4 right-4 z-50 p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors">
              <X className="h-6 w-6 text-white" />
            </DialogClose>

            {/* Previous Button */}
            <button
              onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
              className="absolute left-4 z-50 p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
              aria-label="Imagen anterior"
            >
              <ChevronLeft className="h-8 w-8 text-white" />
            </button>

            {/* Image */}
            <AnimatePresence mode="wait">
              {selectedImage && (
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="w-full h-full flex flex-col items-center justify-center p-4"
                  onClick={(e) => e.stopPropagation()}
                >
                  <img
                    src={selectedImage.url}
                    alt={selectedImage.category}
                    className="max-w-full max-h-[85vh] object-contain shadow-2xl"
                  />
                  <div className="mt-4 text-center">
                    <p className="text-white/80 text-lg font-medium tracking-wide">{selectedImage.category}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Next Button */}
            <button
              onClick={(e) => { e.stopPropagation(); goToNext(); }}
              className="absolute right-4 z-50 p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
              aria-label="Siguiente imagen"
            >
              <ChevronRight className="h-8 w-8 text-white" />
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white/70 text-sm bg-black/50 backdrop-blur-sm px-4 py-1 rounded-full border border-white/10">
              {currentIndex + 1} / {allImages.length}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default GaleriaPage;
