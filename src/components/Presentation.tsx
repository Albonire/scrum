// src/components/Presentation.tsx
import React, { useState } from 'react';
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
  <Slide1_Cover />,
  <Slide2_WhatIsScrum />,
  <Slide3_Pillars />,
  <Slide4_Values />,
  <Slide5_Team />,
  <Slide6_Events />,
  <Slide7_Sprint />,
  <Slide8_Artifacts />,
  <Slide9_DoD />,
  <Slide10_Advantages />,
  <Slide11_Conclusion />,
];

const Presentation: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

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
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/20 p-2 rounded-full hover:bg-black/40 transition-all duration-300 backdrop-blur-sm border border-white/10"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/20 p-2 rounded-full hover:bg-black/40 transition-all duration-300 backdrop-blur-sm border border-white/10"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
      </button>
    </div>
  );
};

export default Presentation;
