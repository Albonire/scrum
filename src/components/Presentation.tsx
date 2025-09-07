// src/components/Presentation.tsx
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Slide1_Cover from './slides/Slide1_Cover';
import Slide2_WhatIsScrum from './slides/Slide2_WhatIsScrum';
import Slide3_Pillars from './slides/Slide3_Pillars';
import Slide4_Values from './slides/Slide4_Values';
import Slide5_Team from './slides/Slide5_Team';
import Slide6_Events from './slides/Slide6_Events';
import Slide7_Sprint from './slides/Slide7_Sprint';
import Slide8_Artifacts from './slides/Slide8_Artifacts';
import Slide9_DoD from './slides/Slide9_DoD';
import Slide10_Advantages from './slides/Slide10_Advantages';
import Slide11_Conclusion from './slides/Slide11_Conclusion';

const slides = [
  <Slide1_Cover />, <Slide2_WhatIsScrum />, <Slide3_Pillars />,
  <Slide4_Values />, <Slide5_Team />, <Slide6_Events />,
  <Slide7_Sprint />, <Slide8_Artifacts />, <Slide9_DoD />,
  <Slide10_Advantages />, <Slide11_Conclusion />,
];

const Presentation: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === ' ' || e.key === 'ArrowRight') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide]);

  return (
    <div className="relative w-full h-full">
      <AnimatePresence>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -300 }}
          transition={{ duration: 0.5 }}
          className="absolute w-full h-full"
        >
          {slides[currentSlide]}
        </motion.div>
      </AnimatePresence>

      {/* Controles de Navegación */}
      <div className="absolute bottom-8 right-8 flex items-center space-x-4">
        <button
          onClick={prevSlide}
          className="px-4 py-2 rounded-lg bg-white shadow-md hover:bg-gray-200 transition-colors text-gray-700 font-semibold"
        >
          ← Anterior
        </button>
        <button
          onClick={nextSlide}
          className="px-6 py-2 rounded-lg bg-blue-600 shadow-lg hover:bg-blue-700 transition-colors text-white font-semibold"
        >
          Siguiente →
        </button>
      </div>
    </div>
  );
};

export default Presentation;