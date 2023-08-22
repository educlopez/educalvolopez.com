'use client';

import { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';





const experiences = [
  // Tu lista de experiencias aquí
    'Experiencia 1',
    'Experiencia 2',
    'Experiencia 3',
    'Experiencia 4',
    'Experiencia 5',
    'Experiencia 6',
    'Experiencia 7',

]

const ExperienceList = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (e) => {
    setScrollPosition(e.target.scrollTop);
  };

  return (
    <div
      className="h-48 overflow-y-scroll snap-y"
      onScroll={handleScroll}
    >
      {experiences.map((experience, index) => {
            const distance = index * 57; // Altura de cada experiencia
             const offset = scrollPosition - distance; // Distancia entre el scroll y la experiencia actual

            const blurtwo =
              offset >= -56 && offset <= 0
                ? 0 : 4

            return (
            <motion.div
                key={index}
                className="px-6 py-4 bg-indigo-500 border-b border-gray-300 snap-top"
                style={{
                filter: `blur(${blurtwo}px)`,
                }}
            >
                 O:{offset} D:{distance}
            </motion.div>
            );
      })}
    </div>
  );
};

export default ExperienceList;