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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      {title && <h2 className="text-sm uppercase tracking-wide text-gray-500 dark:text-gray-400">{title}</h2>}
      <div className="section-content mt-3">
        {children}
      </div>
    </motion.div>
  );
}
