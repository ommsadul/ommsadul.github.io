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
  // Component mounted

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
  };  return (
    <div className="relative flex flex-col justify-center items-center min-h-screen w-full">      {/* Main content starts directly */}      {/* Navigation Links - Top Left */}<motion.nav 
        className="fixed top-6 left-4 sm:left-6 z-40 w-[50vw] sm:w-auto sm:max-w-none"
        variants={navContainer}
        initial="hidden"
        animate="show"
      >
        <motion.ul className="flex flex-col sm:flex-row gap-y-2 gap-x-3 sm:gap-y-0 sm:space-x-4">
          <motion.li variants={navItem}>
            <Link href="/experience" className="text-xs sm:text-sm py-1 px-1 block">
              experience
            </Link>
          </motion.li>
          <motion.li variants={navItem}>
            <Link href="/projects" className="text-xs sm:text-sm py-1 px-1 block">
              projects
            </Link>
          </motion.li>
          <motion.li variants={navItem}>
            <Link href="/publications" className="text-xs sm:text-sm py-1 px-1 block">
              publications
            </Link>
          </motion.li>
          <motion.li variants={navItem}>
            <Link href="/mlblogs" className="text-xs sm:text-sm py-1 px-1 block">
              blogs
            </Link>
          </motion.li>
          <motion.li variants={navItem}>
            <Link href="/awards" className="text-xs sm:text-sm py-1 px-1 block">
              awards
            </Link>
          </motion.li>
        </motion.ul>
      </motion.nav>{/* Main Content - Center */}
      <motion.div
        className="text-center z-10 relative px-4 sm:px-0 w-full max-w-md sm:max-w-lg md:max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.8 }} // Delayed to appear after intro animation
      >
        <motion.div
          className="mb-8 overflow-hidden"
        >          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight relative inline-block"
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ 
              type: "spring", 
              stiffness: 100, 
              damping: 20,
              delay: 1.9
            }}
          >
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 2.2 }}
              className="inline-block"
            >
              hey, i am 
            </motion.span>{" "}
            <motion.span
              className="inline-block relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 2.5 }}
            >
              omm sadul
              <motion.span
                className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-gray-400 to-transparent dark:from-gray-600"
                initial={{ scaleX: 0, originX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 3.0 }}
              />
            </motion.span>
          </motion.h1>
        </motion.div>
          <motion.div 
          className="max-w-md mx-auto"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ 
            type: "spring", 
            stiffness: 100,
            damping: 20,
            delay: 2.7
          }}
        >          <motion.div className="relative flex flex-col items-center space-y-3">
            <motion.p
              className="relative z-10 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 3.0 }}
            >
              <motion.span 
                className="text-gradient bg-gradient-to-r from-current to-gray-500 dark:from-current dark:to-gray-400 bg-clip-text whitespace-nowrap inline-block"
                initial={{ backgroundPosition: "200% 0" }}
                animate={{ backgroundPosition: "0% 0" }}
                transition={{ duration: 1.2, delay: 3.2 }}
              >
                a senior year student, studying mechanical engineering.
              </motion.span>
            </motion.p>
            
            <motion.p
              className="relative z-10 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 3.3 }}
            >              <motion.span 
                className="text-gradient bg-gradient-to-r from-current to-gray-500 dark:from-current dark:to-gray-400 bg-clip-text whitespace-nowrap inline-block"
                initial={{ backgroundPosition: "200% 0" }}
                animate={{ backgroundPosition: "0% 0" }}
                transition={{ duration: 1.2, delay: 3.5 }}
              >
                mainly work in developing prediction algorithms/computational medicine.
              </motion.span>
            </motion.p>
            
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-transparent via-gray-200/30 dark:via-gray-800/30 to-transparent rounded-lg blur-sm"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: [0, 0.8, 0.4], scale: 1 }}
              transition={{ 
                duration: 2,
                times: [0, 0.5, 1],
                delay: 3.6,
                repeat: Infinity,
                repeatType: "reverse" 
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>      {/* Social Links - Bottom Left */}      <motion.div 
        className="fixed bottom-4 sm:bottom-6 left-4 sm:left-6 z-40 w-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 3.5 }}
      >
        <motion.ul 
          className="flex flex-col sm:flex-row gap-y-2 gap-x-3 sm:gap-y-0 sm:space-x-4"
          variants={navContainer}
          initial="hidden"
          animate="show"
        ><motion.li variants={navItem}>
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
          </motion.li>        </motion.ul>
      </motion.div>      {/* Book a Meeting - Bottom Right */}
      <motion.div 
        className="fixed bottom-6 right-6 z-40 w-auto sm:max-w-none text-right"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 3.7 }}
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
