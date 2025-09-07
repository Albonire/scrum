// src/components/slides/Slide11_Conclusion.tsx
import React from 'react';
import { motion } from 'framer-motion';

const Slide11_Conclusion: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center text-center p-8">
      <motion.h2
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, type: 'spring' }}
        className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-8"
      >
        Scrum es un viaje, no un destino.
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-9xl font-extrabold text-gray-800"
      >
        ¿Preguntas?
      </motion.p>
    </div>
  );
};

export default Slide11_Conclusion;
