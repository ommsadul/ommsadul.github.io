'use client';

import { Section } from '../../components/Section';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Awards() {
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
  };    return (    <>      {/* Awards Title - Hidden on mobile, visible on larger screens */}        <motion.nav
        className="fixed top-6 left-6 z-40 w-[40vw] sm:max-w-none hidden sm:block"
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
          <motion.li variants={navItem} className="mb-1 opacity-0 invisible">
            <Link href="/mlblogs" className="text-xs sm:text-sm">
              blogs
            </Link>
          </motion.li>
          <motion.li variants={navItem} className="mb-1">
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
          <p className="text-justify">
            <strong>Johns Hopkins University Fellowship</strong> - Awarded a full scholarship to conduct research throughout my senior year.
          </p>
        </div>
      </Section>
      
      <Section index={1}>
        <div className="highlight">
          <p className="text-justify">
            <strong>Dean's Master's Fellowship</strong> - Awarded a merit-based scholarship that covers 50% tuition for my Master of Science in Systems Engineering program at the Johns Hopkins University.
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
