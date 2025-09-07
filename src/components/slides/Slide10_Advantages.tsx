// src/components/slides/Slide10_Advantages.tsx
import React from 'react';
import { motion } from 'framer-motion';

const advantages = [
  { icon: "👍", text: "Mayor satisfacción del cliente" },
  { icon: "🏆", text: "Mejora de la calidad del producto" },
  { icon: "🔄", text: "Flexibilidad y adaptación a cambios" },
  { icon: "🚀", text: "Entregas más rápidas y frecuentes" },
  { icon: "🤝", text: "Mayor motivación y compromiso" },
  { icon: "📈", text: "Aumento del retorno de inversión" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.6 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1 },
};

const Slide10_Advantages: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center p-8">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-6xl font-black text-gray-800 mb-12"
      >
        Ventajas de Usar Scrum
      </motion.h2>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-3 gap-8 max-w-6xl"
      >
        {advantages.map((advantage) => (
          <motion.div
            key={advantage.text}
            variants={itemVariants}
            className="bg-white p-6 rounded-2xl flex items-center space-x-6 shadow-lg"
          >
            <span className="text-5xl">{advantage.icon}</span>
            <p className="text-2xl font-bold text-gray-700">{advantage.text}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Slide10_Advantages;
