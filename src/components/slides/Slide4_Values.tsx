// src/components/slides/Slide4_Values.tsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const values = [
  { name: "Compromiso", description: "El equipo se compromete a alcanzar sus objetivos y a apoyarse mutuamente." },
  { name: "Coraje", description: "Los miembros del equipo tienen el coraje de hacer lo correcto y trabajar en problemas difíciles." },
  { name: "Foco", description: "Todos se centran en el trabajo del Sprint y en los objetivos del Equipo Scrum." },
  { name: "Apertura", description: "El Equipo Scrum y sus stakeholders son abiertos sobre el trabajo y los desafíos." },
  { name: "Respeto", description: "Los miembros del equipo se respetan mutuamente como personas capaces e independientes." },
];

const Slide4_Values: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState(values[0]);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center p-8">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-6xl font-black mb-12"
      >
        Los 5 Valores de Scrum
      </motion.h2>
      <div className="flex w-full max-w-5xl">
        <div className="w-1/3 flex flex-col items-start space-y-4">
          {values.map((value) => (
            <motion.button
              key={value.name}
              onClick={() => setSelectedValue(value)}
              className={`w-full text-left p-4 rounded-lg text-2xl font-bold transition-colors duration-300 border ${
                selectedValue.name === value.name 
                  ? 'bg-blue-600 border-blue-500' 
                  : 'bg-black/20 border-white/10 hover:bg-white/10'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {value.name}
            </motion.button>
          ))}
        </div>
        <div className="w-2/3 pl-12 flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedValue.name}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="bg-black/20 p-8 rounded-2xl shadow-2xl backdrop-blur-sm border border-white/10"
            >
              <h3 className="text-4xl font-bold text-blue-400 mb-4">{selectedValue.name}</h3>
              <p className="text-2xl text-gray-300">{selectedValue.description}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Slide4_Values;