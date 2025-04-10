'use client';

import { Section } from '../../components/Section';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Publications() {
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
  };
  
  return (
    <>      {/* Publications Title - Exact same position as in homepage navigation */}      <motion.nav
        className="fixed top-6 left-6 z-40 w-[40vw] sm:max-w-none"
        variants={navContainer}
        initial="hidden"
        animate="show"
      >        <motion.ul className="flex flex-wrap gap-y-1 gap-x-2 sm:space-x-4 text-2xs sm:text-xs md:text-sm">
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
          <motion.li variants={navItem} className="mb-1">
            <Link href="/publications" className="text-xs sm:text-sm">
              research publications
            </Link>
          </motion.li>
          <motion.li variants={navItem} className="mb-1 opacity-0 invisible">
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
          research publications
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
          <p className="text-sm">
            Sadul, O., Phirake, S., Sonawwanay, P.D. (2025). <strong>Intelligent Systems for Digitalization and Automation of Agriculture Equipment</strong>. In:
            Kulkarni, A.J., Hajiaghaei-Keshteli, M. (eds) Advances in Intelligent Systems for Sustainable Agriculture. ICISA 2023. Lecture Notes in
            Networks and Systems, vol 1201. Springer, Singapore. <a href="https://doi.org/10.1007/978-981-97-9839-1_6">https://doi.org/10.1007/978-981-97-9839-1_6</a>
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">[more coming by the end of 2025]</p>
        </div>
      </Section>
    </>
  );
}
