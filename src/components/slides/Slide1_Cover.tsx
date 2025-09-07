// src/components/slides/Slide1_Cover.tsx
import React from 'react';
import { motion } from 'framer-motion';

const Slide1_Cover: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center text-center p-8">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-7xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
      >
        Scrum: Una Metodología Ágil
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-xl space-y-2 mt-8 bg-black/20 p-6 rounded-xl backdrop-blur-sm border border-white/10"
      >
        <p><strong className="text-blue-300">Nombre:</strong> Anderson Fabian Gonzalez Aparicio</p>
        <p><strong className="text-blue-300">Código:</strong> 1097302218</p>
        <p><strong className="text-blue-300">Curso:</strong> Investigación en Ingeniería de Sistemas</p>
        <p><strong className="text-blue-300">Universidad:</strong> Universidad de Pamplona</p>
      </motion.div>
    </div>
  );
};

export default Slide1_Cover;