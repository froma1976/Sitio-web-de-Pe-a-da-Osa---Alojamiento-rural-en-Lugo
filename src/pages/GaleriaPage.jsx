
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogClose,
} from "@/components/ui/dialog";

function GaleriaPage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

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

      {/* Header Section */}
      <section className="bg-stone-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 font-serif">
              Galería
            </h1>
            <p className="text-xl text-stone-300 max-w-3xl mx-auto">
              Realiza un recorrido visual por Peña da Osa
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid by Category */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {categories.map((category, catIndex) => (
            <div key={catIndex}>
              <h2 className="text-2xl font-bold text-stone-800 mb-8 border-b border-stone-200 pb-2 inline-block pr-8 font-serif">
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
                    <div className="relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 h-64 bg-stone-200">
                      <img
                        src={imgUrl}
                        alt={`${category.name} - Vista ${imgIndex + 1}`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
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
