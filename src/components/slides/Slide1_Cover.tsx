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
        className="text-7xl font-black text-gray-800 mb-4"
      >
        Scrum: Una Metodología Ágil
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-xl space-y-2 mt-8 border-t-4 border-blue-500 pt-6"
      >
        <p><strong className="font-semibold">Nombre:</strong> Anderson Fabian Gonzalez Aparicio</p>
        <p><strong className="font-semibold">Código:</strong> 1097302218</p>
        <p><strong className="font-semibold">Curso:</strong> Investigación en Ingeniería de Sistemas</p>
        <p><strong className="font-semibold">Universidad:</strong> Universidad de Pamplona</p>
      </motion.div>
    </div>
  );
};

export default Slide1_Cover;
