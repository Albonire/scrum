// src/components/slides/Slide6_Events.tsx
import React from 'react';
import { motion } from 'framer-motion';

const events = [
  { name: "El Sprint", description: "El corazón de Scrum, un contenedor para los demás eventos." },
  { name: "Sprint Planning", description: "Se planifica el trabajo a realizar durante el Sprint." },
  { name: "Daily Scrum", description: "Reunión diaria de 15 minutos para sincronizar actividades." },
  { name: "Sprint Review", description: "Se inspecciona el Incremento y se adapta el Product Backlog." },
  { name: "Sprint Retrospective", description: "Oportunidad para el equipo de inspeccionarse y mejorar." },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.5 },
  },
};

const itemVariants = (fromRight = false) => ({
  hidden: { opacity: 0, x: fromRight ? 50 : -50 },
  visible: { opacity: 1, x: 0 },
});

const Slide6_Events: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center p-8">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-6xl font-black mb-12"
      >
        Los Eventos de Scrum
      </motion.h2>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative w-full max-w-4xl"
      >
        <div className="absolute left-1/2 top-0 h-full w-1 bg-blue-500/30 rounded" />
        {events.map((event, index) => (
          <div key={event.name} className="relative flex items-center mb-12">
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-blue-500 rounded-full border-4 border-gray-900"
              initial={{ scale: 0 }}
              animate={{ scale: 1, transition: { delay: index * 0.2 + 0.7 } }}
            />
            <motion.div
              variants={itemVariants(index % 2 !== 0)}
              className={`w-1/2 p-6 ${index % 2 === 0 ? 'text-right pr-16' : 'ml-auto text-left pl-16'}`}
            >
              <h3 className="text-3xl font-bold text-blue-400 mb-2">{event.name}</h3>
              <p className="text-lg text-gray-300">{event.description}</p>
            </motion.div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Slide6_Events;