// src/components/slides/Slide2_WhatIsScrum.tsx
import React from 'react';
import { motion } from 'framer-motion';

const Slide2_WhatIsScrum: React.FC = () => {
  const cycleVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.3 + 1,
        duration: 0.5,
      },
    }),
  };

  const items = ["Planificar", "Construir", "Revisar", "Adaptar"];

  return (
    <div className="w-full h-full flex flex-col justify-center items-center text-center p-8">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-6xl font-black text-gray-800 mb-6"
      >
        ¿Qué es Scrum?
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-2xl max-w-4xl mb-16 text-gray-600"
      >
        Un marco de trabajo empírico para desarrollar, entregar y mantener productos complejos de forma iterativa e incremental.
      </motion.p>
      <div className="flex items-center space-x-6">
        {items.map((item, i) => (
          <React.Fragment key={item}>
            <motion.div
              custom={i}
              variants={cycleVariants}
              initial="hidden"
              animate="visible"
              className="bg-white shadow-lg rounded-xl px-8 py-4 text-2xl font-bold text-blue-600"
            >
              {item}
            </motion.div>
            {i < items.length - 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.3 + 1.3 }}
                className="text-3xl text-gray-400 font-light"
              >
                →
              </motion.div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Slide2_WhatIsScrum;
