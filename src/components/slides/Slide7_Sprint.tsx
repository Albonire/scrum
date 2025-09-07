// src/components/slides/Slide7_Sprint.tsx
import React from 'react';
import { motion } from 'framer-motion';

const Slide7_Sprint: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center text-center p-8">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-6xl font-black mb-6"
      >
        El Sprint: El Corazón de Scrum
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-2xl max-w-4xl mb-16 text-gray-300"
      >
        Un evento de tiempo fijo (time-box) de un mes o menos, donde se crea un Incremento de producto "Hecho", utilizable y potencialmente desplegable.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1, type: 'spring', stiffness: 100 }}
        className="relative w-72 h-72"
      >
        <motion.div
          className="absolute inset-0 border-[12px] border-blue-900/50 rounded-full"
        />
        <motion.div
          className="absolute inset-0 border-[12px] border-t-blue-500 border-l-blue-500 border-b-blue-500/0 border-r-blue-500/0 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute inset-0 flex justify-center items-center text-5xl font-black text-blue-300">
          1-4 Semanas
        </div>
      </motion.div>
    </div>
  );
};

export default Slide7_Sprint;