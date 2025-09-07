// src/components/slides/Slide8_Artifacts.tsx
import React from 'react';
import { motion } from 'framer-motion';

const artifacts = [
  { name: "Product Backlog", description: "La lista ordenada y emergente de todo lo que se necesita para mejorar el producto." },
  { name: "Sprint Backlog", description: "El conjunto de ítems del Product Backlog seleccionados para el Sprint, más un plan para entregarlos." },
  { name: "Incremento", description: "La suma de todos los ítems del Product Backlog completados durante un Sprint y Sprints anteriores." },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.4, delayChildren: 0.5 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Slide8_Artifacts: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center p-8">
      <motion.h2
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-6xl font-black text-gray-800 mb-16"
      >
        Los Artefactos de Scrum
      </motion.h2>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex justify-around w-full max-w-6xl text-center"
      >
        {artifacts.map((artifact) => (
          <motion.div
            key={artifact.name}
            variants={itemVariants}
            className="bg-white p-8 rounded-2xl shadow-xl w-1/3 mx-4"
          >
            <h3 className="text-4xl font-bold text-blue-600 mb-4">{artifact.name}</h3>
            <p className="text-xl text-gray-600">{artifact.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Slide8_Artifacts;
