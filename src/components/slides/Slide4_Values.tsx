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
        className="text-6xl font-black text-gray-800 mb-12"
      >
        Los 5 Valores de Scrum
      </motion.h2>
      <div className="flex w-full max-w-5xl">
        <div className="w-1/3 flex flex-col items-start space-y-4">
          {values.map((value) => (
            <motion.button
              key={value.name}
              onClick={() => setSelectedValue(value)}
              className={`w-full text-left p-4 rounded-lg text-2xl font-bold transition-all duration-300 ${
                selectedValue.name === value.name 
                  ? 'bg-blue-600 text-white shadow-lg' 
                  : 'bg-white text-gray-700 hover:bg-gray-200'
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
              className="bg-white p-8 rounded-2xl shadow-2xl"
            >
              <h3 className="text-4xl font-bold text-blue-600 mb-4">{selectedValue.name}</h3>
              <p className="text-2xl text-gray-600">{selectedValue.description}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Slide4_Values;
