'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [activeLink, setActiveLink] = useState(null);
  
  // Prevent hydration mismatch with window object
  useEffect(() => {
    setMounted(true);
  }, []);
  
  // Staggered navigation links animation
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
    <div className="relative flex flex-col justify-center items-center min-h-screen w-full">
      {/* Main content starts directly */}
      {/* Navigation Links - Top Left */}
      <motion.nav
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
          <motion.li variants={navItem} className="mb-1">
            <Link href="/projects" className="text-xs sm:text-sm">
              projects
            </Link>
          </motion.li>
          <motion.li variants={navItem} className="mb-1">
            <Link href="/publications" className="text-xs sm:text-sm">
              research publications
            </Link>
          </motion.li>
          <motion.li variants={navItem} className="mb-1">
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
      
      {/* Main Content - Center */}      <motion.div
        className="text-center z-10 relative px-4 sm:px-0 w-full max-w-full flex flex-col items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }} // Faster appearance after intro animation
      >
        <motion.div className="mb-8 overflow-visible flex justify-center items-center">          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl font-normal tracking-tight w-auto mx-auto"
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}  
            transition={{ 
              type: "spring", 
              stiffness: 100, 
              damping: 20,
              delay: 0.9
            }}
          >
            <div className="whitespace-nowrap overflow-visible w-auto inline-block">
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 1.2 }}
                className="inline-block"
              >
                hey, i am
              </motion.span>{" "}
              <motion.span
                className="inline-block relative pr-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 1.4 }}
              >
                omm sadul
                <motion.span
                  className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-gray-400 to-transparent dark:from-gray-600"
                  initial={{ scaleX: 0, originX: 0 }}
                  animate={{ scaleX: 1 }}                  transition={{ duration: 0.6, delay: 1.6 }}
                />
              </motion.span>
            </div>
          </motion.h1>        </motion.div>        {/* Redesigned Summary Section - Experience-like Format */}        <motion.div 
          className="w-full mx-auto mt-8 px-0 sm:px-0 md:px-0 flex justify-center"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ 
            type: "spring", 
            stiffness: 100,
            damping: 20,
            delay: 1.4
          }}
        >
          <motion.div 
            className="text-left max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          >            <motion.div className="space-y-1 flex flex-col items-left">              <motion.p 
                className="text-xs sm:text-sm font-light tracking-wide"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: 1.6 }}
              >
                Senior mech undergrad here, barely surviving thermodynamics & random ass-surfaces.
              </motion.p>
              
              <motion.p 
                className="text-xs sm:text-sm font-light tracking-wide"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}                
                transition={{ duration: 0.2, delay: 1.8 }}
              >
                I mess with predictive ML and computational medicine, plus dabble in open-source and cryptography - because who doesnt love bounties?
              </motion.p>
              
              <motion.p 
                className="text-xs sm:text-sm font-light tracking-wide"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: 2.0 }}
              >
                Professors, chai and Good-Day biscuits will make me give your lab 100x outputs.
              </motion.p>
              
              <motion.p 
                className="text-xs sm:text-sm font-light tracking-wide"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: 2.2 }}
              >
                PIs, my SaaS is coming — revolutionary or just ridiculous, you decide.
              </motion.p>
                <motion.p 
                className="text-xs sm:text-sm font-light tracking-wide"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: 2.4 }}
              >
                PI-TRACKER : It'll help you get through this tough time of funding, or at least keep you entertained while the grants dry up.
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
      
      {/* Social Links - Bottom Left */}
      <motion.div 
        className="fixed bottom-6 left-6 z-40 w-[40vw] sm:max-w-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 2.6 }}
      >
        <motion.ul 
          className="flex flex-wrap gap-x-2 gap-y-1 sm:space-x-4 text-2xs sm:text-xs md:text-sm"
          variants={navContainer}
          initial="hidden"
          animate="show"
        >
          <motion.li variants={navItem}>
            <a 
              href="https://github.com/ommsadul" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm"
            >
              github
            </a>
          </motion.li>
          <motion.li variants={navItem}>
            <a 
              href="https://x.com/sadulom13" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm"
            >
              x
            </a>
          </motion.li>
          <motion.li variants={navItem}>
            <a 
              href="https://scholar.google.com/citations?hl=en&user=RNrHfXMAAAAJ" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm"
            >
              google scholar
            </a>
          </motion.li>
          <motion.li variants={navItem}>
            <a 
              href="https://www.linkedin.com/in/omm-sadul-706515227/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm"
            >
              linkedin
            </a>
          </motion.li>
          <motion.li variants={navItem}>
            <a 
              href="mailto:omssadul@gmail.com"
              className="text-sm"
            >
              email
            </a>
          </motion.li>
          <motion.li variants={navItem}>
            <a 
              href="https://medium.com/@omssadul" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm"
            >
              medium
            </a>
          </motion.li>
        </motion.ul>
      </motion.div>
      
      {/* Book a Meeting - Bottom Right */}
      <motion.div 
        className="fixed bottom-6 right-6 z-40 w-auto sm:max-w-none text-right"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 2.7 }}
      >
        <motion.ul 
          className="flex flex-wrap justify-end"
          variants={navContainer}
          initial="hidden"
          animate="show"
        >
          <motion.li variants={navItem}>
            <a 
              href="https://cal.com/ommsadul/10min?user=ommsadul" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm"
            >
              book a meeting
            </a>
          </motion.li>
        </motion.ul>
      </motion.div>
    </div>
  );
}
