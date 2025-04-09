'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionProps {
  title?: string;
  children: ReactNode;
  index: number;
}

export function Section({ title, children, index }: SectionProps) {
  return (
    <motion.div 
      className="section"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        type: "spring", 
        stiffness: 100, 
        damping: 15, 
        delay: index * 0.1,
        when: "beforeChildren" 
      }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      {title && (
        <motion.h2 
          className="text-sm uppercase tracking-wide text-gray-500 dark:text-gray-400"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
        >
          {title}
        </motion.h2>
      )}
      <motion.div 
        className="section-content mt-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
