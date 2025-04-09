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
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {title && <h2>{title}</h2>}
      <div 
        className="section-content"
        style={{ '--delay': index } as any}
      >
        {children}
      </div>
    </motion.div>
  );
}
