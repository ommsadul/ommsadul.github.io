'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function MLBlogsPage() {
  return (
    <>
      <motion.h1
        className="text-lg font-normal tracking-tight mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        guide blogs
      </motion.h1>
      
      <div className="space-y-8">        {/* Blog 1 */}
        <motion.article 
          className="border-b border-dashed border-gray-200 dark:border-gray-800 pb-8 rounded-md p-2 transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-900"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <h2 className="text-base font-medium mb-2">A Survival Guide for Tier-3 Mechanical Engineering Undergraduates</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">coming soon</p>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
          This guide discusses effective strategies to navigate various challenges, including misconceptions about mech careers, outdated curriculum, toxic academic environments, lack of proper mentorship, unprofessional behavior and misleading guidance from professors, poor placement opportunities, unmotivated peer groups, and much more.
          </p>
          <Link href="https://medium.com/@omssadul" className="text-sm border-b border-dashed border-gray-300 dark:border-gray-700">
            read more →
          </Link>
        </motion.article>
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
