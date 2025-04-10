'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

export default function MLBlogsPage() {
  const [activeSection, setActiveSection] = useState('guide');
  
  // Staggered navigation links animation for the fixed title text
  const navContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };
  
  const navItem = {
    hidden: { opacity: 0, y: -20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };    return (    <>      {/* Blogs Title - Exact same position as in homepage navigation */}        <motion.nav
        className="fixed top-6 left-6 z-40 w-[40vw] sm:max-w-none"
        variants={navContainer}
        initial="hidden"
        animate="show"
      >
        <motion.ul className="flex flex-wrap gap-y-1 gap-x-2 sm:space-x-4 text-2xs sm:text-xs md:text-sm">
          <motion.li variants={navItem} className="mb-1 opacity-0 invisible">
            <Link href="/experience" className="text-xs sm:text-sm">
              experience
            </Link>
          </motion.li>
          <motion.li variants={navItem} className="mb-1 opacity-0 invisible">
            <Link href="/projects" className="text-xs sm:text-sm">
              projects
            </Link>
          </motion.li>
          <motion.li variants={navItem} className="mb-1 opacity-0 invisible">
            <Link href="/publications" className="text-xs sm:text-sm">
              research publications
            </Link>
          </motion.li>
          <motion.li variants={navItem} className="mb-1">
            <Link href="/mlblogs" className="text-xs sm:text-sm">
              blogs
            </Link>
          </motion.li>
          <motion.li variants={navItem} className="mb-1 opacity-0 invisible">
            <Link href="/awards" className="text-xs sm:text-sm">
              awards
            </Link>
          </motion.li>
        </motion.ul>
      </motion.nav>
      
      {/* Original layout restored */}
      <div className="flex justify-between items-center mb-6">
        <motion.h1
          className="text-lg font-normal tracking-tight invisible"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          blogs
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <Link href="/" className="text-sm">← back to home</Link>
        </motion.div>
      </div>

      {/* Section Tabs */}
      <motion.div 
        className="flex space-x-4 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <button 
          onClick={() => setActiveSection('guide')}
          className={`text-sm pb-1 border-b-2 ${
            activeSection === 'guide' 
              ? 'border-gray-600 dark:border-gray-300' 
              : 'border-transparent hover:border-gray-300 dark:hover:border-gray-700'
          }`}
        >
          Guide Blogs
        </button>
        <button 
          onClick={() => setActiveSection('technical')}
          className={`text-sm pb-1 border-b-2 ${
            activeSection === 'technical' 
              ? 'border-gray-600 dark:border-gray-300' 
              : 'border-transparent hover:border-gray-300 dark:hover:border-gray-700'
          }`}
        >
          Technical Blogs
        </button>
      </motion.div>
      
      {/* Guide Blogs Section */}
      {activeSection === 'guide' && (
        <div className="space-y-8">
          {/* Blog 1 */}
          <motion.article 
            className="pb-8 rounded-md p-2 transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-900"
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
      )}      {/* Technical Blogs Section */}
      {activeSection === 'technical' && (
        <motion.div 
          className="py-12 rounded-md text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-xl font-medium mb-4">Coming Soon</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Technical blogs section is currently under development. Check back later!
          </p>
        </motion.div>
      )}
    </>
  );
}
