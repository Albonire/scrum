// src/components/slides/Slide3_Pillars.tsx
import React from 'react';
import { motion } from 'framer-motion';

const pillars = [
  {
    title: "Transparencia",
    description: "El proceso y el trabajo deben ser visibles para todos. Se requiere una comunicación clara y herramientas compartidas."
  },
  {
    title: "Inspección",
    description: "Los artefactos de Scrum y el progreso hacia los objetivos deben ser inspeccionados frecuentemente para detectar variaciones."
  },
  {
    title: "Adaptación",
    description: "Si la inspección revela que algo se desvía de los límites aceptables, el proceso o el producto deben ajustarse."
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3 + 0.5,
      duration: 0.6,
    },
  }),
};

const Slide3_Pillars: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center text-center p-8">
      <motion.h2
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="text-6xl font-black mb-16"
      >
        Los 3 Pilares de Scrum
      </motion.h2>
      <div className="flex justify-center space-x-8">
        {pillars.map((pillar, i) => (
          <motion.div
            key={pillar.title}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.05, y: -10, boxShadow: "0px 20px 40px rgba(0,0,0,0.4)" }}
            className="bg-black/20 p-8 rounded-2xl shadow-lg w-96 cursor-pointer backdrop-blur-sm border border-white/10"
          >
            <h3 className="text-4xl font-bold text-blue-400 mb-4">{pillar.title}</h3>
            <p className="text-xl text-gray-300">{pillar.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Slide3_Pillars;