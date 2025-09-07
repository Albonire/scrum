// src/components/slides/Slide5_Team.tsx
import React from 'react';
import { motion } from 'framer-motion';

const roles = [
  {
    name: "Product Owner",
    responsibilities: "Maximiza el valor del producto. Gestiona el Product Backlog.",
    icon: "🎯"
  },
  {
    name: "Scrum Master",
    responsibilities: "Asegura que Scrum se entienda y se aplique. Elimina impedimentos.",
    icon: "🛡️"
  },
  {
    name: "Developers",
    responsibilities: "Crean el Incremento del producto. Son un equipo auto-gestionado.",
    icon: "💻"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.5,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Slide5_Team: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center p-8">
      <motion.h2
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-6xl font-black text-gray-800 mb-16"
      >
        El Equipo Scrum
      </motion.h2>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex justify-around w-full max-w-6xl"
      >
        {roles.map((role) => (
          <motion.div
            key={role.name}
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -10 }}
            className="bg-white p-8 rounded-2xl shadow-lg w-1/3 mx-4 text-center"
          >
            <div className="text-6xl mb-4">{role.icon}</div>
            <h3 className="text-4xl font-bold text-blue-600 mb-4">{role.name}</h3>
            <p className="text-xl text-gray-600">{role.responsibilities}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Slide5_Team;
