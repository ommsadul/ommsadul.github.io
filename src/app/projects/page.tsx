'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ProjectsPage() {
  return (
    <>
      <motion.h1
        className="text-lg font-normal tracking-tight mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        serious projects
      </motion.h1>
      
      <div className="space-y-8">        {/* Project 1 */}
        <motion.div 
          className="border-b border-dashed border-gray-200 dark:border-gray-800 pb-8 rounded-md p-2 transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-900"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <h2 className="text-base font-medium mb-2">Cost Optimization of Biomedical Device for Healthcare Efficiency</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
          Developing a portable ventilator for home use, which automatically enhances the oxygen flow rate when mask leaks are detected,
          while maintaining cost efficiency without compromising performance or safety. This research project focuses on developing the
          necessary computational models.
          </p>
        </motion.div>        {/* Project 2 */}
        <motion.div 
          className="border-b border-dashed border-gray-200 dark:border-gray-800 pb-8 rounded-md p-2 transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-900"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <h2 className="text-base font-medium mb-2">Design and Analysis of an Innovative Medical Autoclave</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
          Won first prize in a poster presentation, applied for a patent, and led the design and analysis of an innovative autoclave, improving
          sterilization efficacy, efficiency, and sustainability through significant advancements.
          </p>
        </motion.div>
      </div>
      
      <motion.div 
        className="mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        <Link href="/" className="text-sm border-b border-dashed border-gray-300 dark:border-gray-700">
          ← back
        </Link>
      </motion.div>
    </>
  );
}
