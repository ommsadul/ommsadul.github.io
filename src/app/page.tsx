'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ThemeToggle } from '../components/ThemeToggle';

export default function Home() {  const [mounted, setMounted] = useState(false);
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
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
    <div className="relative flex flex-col justify-center items-center min-h-screen w-full">      {/* Main content starts directly */}      {/* Navigation Links */}
      <motion.nav
        className="fixed top-0 left-0 right-0 sm:top-6 sm:left-6 sm:right-auto z-40 w-full sm:w-[40vw] sm:max-w-none"
        variants={navContainer}
        initial="hidden"
        animate="show"
      >        {/* Mobile Top Navigation with toggle */}        <div className="sm:hidden w-full px-1 py-3 bg-white/80 dark:bg-black/80 backdrop-blur-sm flex items-center justify-between">
          <div className="flex items-center">
            <motion.button
              className="p-2 text-[12px] tracking-tight"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileHover={{ 
                scale: 1.05,
                transition: { type: "spring", stiffness: 400, damping: 15 }
              }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? 'close' : 'hire me'}
            </motion.button>
            
            {/* Mobile dropdown menu */}
            <AnimatePresence>
              {mobileMenuOpen && (
                <motion.div 
                  className="absolute top-12 left-0 w-full bg-white/90 dark:bg-black/90 backdrop-blur-md z-50 py-2 px-3"
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.2 }}
                 >                  <div className="flex flex-col space-y-3 text-[10px]">                    <Link href="/experience" className="min-w-fit border-0" onClick={() => setMobileMenuOpen(false)}>
                      <span className="relative inline-block w-fit border-b border-dashed border-gray-400 dark:border-gray-600">experience</span>
                    </Link>
                    <Link href="/projects" className="min-w-fit border-0" onClick={() => setMobileMenuOpen(false)}>
                      <span className="relative inline-block w-fit border-b border-dashed border-gray-400 dark:border-gray-600">projects</span>
                    </Link>
                    <Link href="/publications" className="min-w-fit border-0" onClick={() => setMobileMenuOpen(false)}>
                      <span className="relative inline-block w-fit border-b border-dashed border-gray-400 dark:border-gray-600">research publications</span>
                    </Link>
                    <Link href="/mlblogs" className="min-w-fit border-0" onClick={() => setMobileMenuOpen(false)}>
                      <span className="relative inline-block w-fit border-b border-dashed border-gray-400 dark:border-gray-600">blogs</span>
                    </Link>
                    <Link href="/awards" className="min-w-fit border-0" onClick={() => setMobileMenuOpen(false)}>
                      <span className="relative inline-block w-fit border-b border-dashed border-gray-400 dark:border-gray-600">awards</span>
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          {/* Theme toggle in mobile nav */}
          <div className="flex-shrink-0 ml-2 scale-[1] origin-right">
            {mounted && <ThemeToggle />}
          </div>
        </div>
        
        {/* Desktop Navigation - Original layout */}        <motion.ul className="hidden sm:flex flex-wrap gap-y-1 gap-x-2 sm:space-x-4 text-2xs sm:text-xs md:text-sm">
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
      </motion.nav>      {/* Main Content - Center - Optimized for mobile */}      <motion.div
        className="text-center z-10 relative px-4 sm:px-0 w-full max-w-full flex flex-col items-center justify-center pt-14 pb-14 sm:pt-0 sm:pb-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }} // Faster appearance after intro animation
        style={{
          minHeight: "calc(100vh - 80px)",
          height: "auto"
        }}
      >
        <motion.div className="mb-2 sm:mb-8 overflow-visible flex justify-center items-center">          <motion.h1            className="text-[1.8rem] sm:text-6xl md:text-7xl font-normal tracking-tight w-auto mx-auto px-2"
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}  
            transition={{ 
              type: "spring", 
              stiffness: 100, 
              damping: 20,
              delay: 0.9
            }}
          ><div className="whitespace-nowrap overflow-visible w-auto inline-block relative scale-[1.1] sm:scale-100">
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 1.2 }}
                className="inline-block"
              >
                hey, i am omm sadul
              </motion.span>              <motion.span
                className="absolute -bottom-2 sm:-bottom-2 left-0 w-full h-[2px] bg-gradient-to-r from-gray-400 to-transparent dark:from-gray-600"
                initial={{ scaleX: 0, originX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 1.6 }}
              />
            </div>
          </motion.h1>        </motion.div>        {/* Redesigned Summary Section - Experience-like Format - Mobile optimized */}        <motion.div 
          className="w-full mx-auto mt-1 sm:mt-8 px-1.5 sm:px-0 md:px-0 flex justify-center"
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
            className="text-left sm:text-justify max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          >            <motion.div className="space-y-1 sm:space-y-3 flex flex-col items-center"><motion.p 
                className="text-xs sm:text-sm font-light tracking-wider py-0.5 leading-relaxed text-justify"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: 1.6 }}
              >
                Senior mech undergrad here, barely surviving thermodynamics & random surfaces.
              </motion.p>
              
              <motion.p 
                className="text-xs sm:text-sm font-light tracking-wider py-0.5 leading-relaxed text-justify"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}                
                transition={{ duration: 0.2, delay: 1.8 }}
              >
                I mess with predictive ML and computational medicine, plus dabble in open-source and cryptography - because who doesnt love bounties?
              </motion.p>
              
              <motion.p 
                className="text-xs sm:text-sm font-light tracking-wider py-0.5 leading-relaxed text-justify"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: 2.0 }}
              >
                Professors, chai and Good-Day biscuits will make me give your lab 100x outputs.
              </motion.p>
              
              <motion.p 
                className="text-xs sm:text-sm font-light tracking-wider py-0.5 leading-relaxed text-justify"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: 2.2 }}
              >
                PIs, my SaaS is coming — revolutionary or just ridiculous, you decide.
              </motion.p>
              
              <motion.p 
                className="text-xs sm:text-sm font-light tracking-wider py-0.5 leading-relaxed text-justify"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: 2.4 }}
              >
                PI-TRACKER : It'll help you get through this tough time of funding, or at least keep you entertained while the grants dry up.
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>      {/* Mobile-optimized Footer */}      <motion.div 
        className="fixed bottom-0 left-0 right-0 z-40 sm:static sm:bottom-auto sm:left-auto sm:right-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 2.6 }}
      >        {/* Mobile Footer - Single line with toggle - aligned with top bar */}        <div className="sm:hidden w-full px-1 py-3 bg-white/80 dark:bg-black/80 backdrop-blur-sm flex items-center justify-between">
          {/* Social links toggle button */}
          <div className="flex items-center">
            <motion.button
              className="p-2 text-[12px] tracking-tight"
              onClick={() => setActiveLink(activeLink === 'socials' ? null : 'socials')}
              whileHover={{ 
                scale: 1.05,
                transition: { type: "spring", stiffness: 400, damping: 15 }
              }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle social links"
            >
              {activeLink === 'socials' ? 'close' : 'socials'}
            </motion.button>
            
            {/* Mobile social links dropdown */}
            <AnimatePresence>
              {activeLink === 'socials' && (                <motion.div 
                  className="absolute bottom-12 left-0 w-full bg-white/90 dark:bg-black/90 backdrop-blur-md z-50 py-2 px-3"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex flex-col space-y-3 text-[10px]">
                    <a href="https://github.com/ommsadul" target="_blank" rel="noopener noreferrer" className="min-w-fit border-0">
                      <span className="relative inline-block w-fit border-b border-dashed border-gray-400 dark:border-gray-600">github</span>
                    </a>
                    <a href="https://x.com/sadulom13" target="_blank" rel="noopener noreferrer" className="min-w-fit border-0">
                      <span className="relative inline-block w-fit border-b border-dashed border-gray-400 dark:border-gray-600">x</span>
                    </a>
                    <a href="https://scholar.google.com/citations?hl=en&user=RNrHfXMAAAAJ" target="_blank" rel="noopener noreferrer" className="min-w-fit border-0">
                      <span className="relative inline-block w-fit border-b border-dashed border-gray-400 dark:border-gray-600">google scholar</span>
                    </a>
                    <a href="https://www.linkedin.com/in/omm-sadul-706515227/" target="_blank" rel="noopener noreferrer" className="min-w-fit border-0">
                      <span className="relative inline-block w-fit border-b border-dashed border-gray-400 dark:border-gray-600">linkedin</span>
                    </a>
                    <a href="mailto:omssadul@gmail.com" className="min-w-fit border-0">
                      <span className="relative inline-block w-fit border-b border-dashed border-gray-400 dark:border-gray-600">email</span>
                    </a>
                    <a href="https://medium.com/@omssadul" target="_blank" rel="noopener noreferrer" className="min-w-fit border-0">
                      <span className="relative inline-block w-fit border-b border-dashed border-gray-400 dark:border-gray-600">medium</span>
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>          </div>            {/* Book meeting - positioned exactly like theme toggle */}
          <div className="flex-shrink-0 ml-2 scale-[1.2] origin-right">
            <motion.a 
              href="https://cal.com/ommsadul/10min?user=ommsadul" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block p-2 text-[10px] border-0"
              whileHover={{ 
                scale: 1.05,
                transition: { type: "spring", stiffness: 400, damping: 15 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              book a meeting
            </motion.a>
          </div>
        </div>
        
        {/* Desktop Footer - Original layout */}
        <div className="hidden sm:block">
          {/* Social Links - Bottom Left */}
          <motion.div 
            className="fixed bottom-6 left-6 z-40 w-[40vw] max-w-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.ul 
              className="flex flex-wrap gap-x-2 gap-y-1.5 space-x-4 text-2xs text-xs md:text-sm"
              variants={navContainer}
              initial="hidden"
              animate="show"
            >
              <motion.li variants={navItem}>
                <a href="https://github.com/ommsadul" target="_blank" rel="noopener noreferrer" className="text-sm">
                  github
                </a>
              </motion.li>
              <motion.li variants={navItem}>
                <a href="https://x.com/sadulom13" target="_blank" rel="noopener noreferrer" className="text-sm">
                  x
                </a>
              </motion.li>
              <motion.li variants={navItem}>
                <a href="https://scholar.google.com/citations?hl=en&user=RNrHfXMAAAAJ" target="_blank" rel="noopener noreferrer" className="text-sm">
                  google scholar
                </a>
              </motion.li>
              <motion.li variants={navItem}>
                <a href="https://www.linkedin.com/in/omm-sadul-706515227/" target="_blank" rel="noopener noreferrer" className="text-sm">
                  linkedin
                </a>
              </motion.li>
              <motion.li variants={navItem}>
                <a href="mailto:omssadul@gmail.com" className="text-sm">
                  email
                </a>
              </motion.li>
              <motion.li variants={navItem}>
                <a href="https://medium.com/@omssadul" target="_blank" rel="noopener noreferrer" className="text-sm">
                  medium
                </a>
              </motion.li>
            </motion.ul>
          </motion.div>
          {/* Book a Meeting - Bottom Right */}
          <motion.div 
            className="fixed bottom-6 right-6 z-40 w-auto max-w-none text-right"
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
                <a href="https://cal.com/ommsadul/10min?user=ommsadul" target="_blank" rel="noopener noreferrer" className="text-sm">
                  book a meeting
                </a>
              </motion.li>
            </motion.ul>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
