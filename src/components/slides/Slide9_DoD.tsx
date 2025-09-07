// src/components/slides/Slide9_DoD.tsx
import React from 'react';
import { motion } from 'framer-motion';

const checklistItems = [
  "Código revisado",
  "Pruebas unitarias pasan",
  "Integrado en la rama principal",
  "Documentación actualizada",
  "Aceptado por el Product Owner",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const Slide9_DoD: React.FC = () => {
  return (
    <div className="w-full h-full flex justify-center items-center p-8">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-1/2 pr-12"
      >
        <h2 className="text-6xl font-black text-gray-800 mb-6">
          La Definición de "Hecho"
        </h2>
        <p className="text-2xl text-gray-600">
          Un acuerdo formal y compartido sobre cómo se ve el trabajo cuando está completo, asegurando la transparencia y la calidad del Incremento.
        </p>
      </motion.div>
      <div className="w-1/2">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-white p-8 rounded-2xl shadow-2xl"
        >
          <motion.ul
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {checklistItems.map((item, index) => (
              <motion.li
                key={index}
                variants={itemVariants}
                className="flex items-center text-2xl mb-4 text-gray-700"
              >
                <span className="text-green-500 mr-4 text-3xl">✓</span>
                <span>{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Slide9_DoD;
