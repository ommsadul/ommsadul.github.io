'use client';

import { Section } from '../../components/Section';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Awards() {
  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <motion.h1
          className="text-lg font-normal tracking-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          awards
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <Link href="/" className="text-sm">← back to home</Link>
        </motion.div>
      </div>
        <Section index={0}>
        <div className="highlight">
          <p>
            <strong>Johns Hopkins University Fellowship</strong> - Awarded a full scholarship to conduct research throughout my senior year.
          </p>
        </div>
      </Section>
      
      <motion.div 
        className="mt-6 text-sm text-gray-500 dark:text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <p className="italic text-center">More awards coming soon...</p>
      </motion.div>
    </>
  );
}
