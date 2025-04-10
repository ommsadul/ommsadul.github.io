'use client';

import { Section } from '../../components/Section';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Experience() {
  // Staggered navigation links animation for the fixed experience text
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
  };
  
  return (
    <>
      {/* Experience Title - Top Left (Same position as homepage) */}      <motion.nav
        className="fixed top-6 left-6 z-40 w-[40vw] sm:max-w-none"
        variants={navContainer}
        initial="hidden"
        animate="show"
      >
        <motion.ul className="flex flex-wrap gap-y-1 gap-x-2 sm:space-x-4 text-2xs sm:text-xs md:text-sm">
          <motion.li variants={navItem} className="mb-1">
            <Link href="/experience" className="text-xs sm:text-sm">
              experience
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
          experience
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
          <ul className="experience-list">
            <li className="!border-b-0">
              <span className="text-gray-500 dark:text-gray-400">oct 24' - present</span>
              <span className="block">undergraduate research scholar @ <a href="https://www.jhu.edu/">Johns Hopkins University</a></span>
            </li>
            <li className="!border-b-0">
              <span className="text-gray-500 dark:text-gray-400">july 24' - oct 24'</span>
              <span className="block">quality intern @ 2P Technologies</span>          </li>
          <li className="!border-b-0">
            <span className="text-gray-500 dark:text-gray-400">aug 23' - aug 24'</span>
            <span className="block">undergraduate research scholar @ <a href="https://mitwpu.edu.in/">mit-wpu</a></span>
          </li>        </ul>
      </Section>
    </>
  );
}
