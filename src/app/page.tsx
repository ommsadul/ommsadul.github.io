'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';

// Floating particles effect component
const Particles = () => {
  const [particles, setParticles] = useState<Array<{
    x: number;
    y: number;
    size: number;
    duration: number;
    delay: number;
    scale: number;
    xEnd: number;
    yEnd: number;
  }>>([]);

  useEffect(() => {
    // Only generate particles on the client side
    const newParticles = Array.from({ length: 20 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 6 + 2,
      duration: Math.random() * 30 + 20,
      delay: Math.random() * 5,
      scale: Math.random() * 0.8 + 0.2,
      xEnd: Math.random() * window.innerWidth,
      yEnd: Math.random() * window.innerHeight,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="particles-container absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className="particle absolute rounded-full bg-gray-200 dark:bg-gray-800"
          initial={{
            opacity: 0,
            scale: 0,
            x: particle.x,
            y: particle.y,
          }}
          animate={{
            opacity: [0, 0.4, 0],
            scale: [0, particle.scale, 0],
            x: [null, particle.xEnd],
            y: [null, particle.yEnd],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "linear"
          }}
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
        />
      ))}
    </div>
  )
}

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
    <div className="relative flex flex-col justify-center items-center min-h-screen">
      {mounted && <Particles />}
        {/* Intro animation overlay */}
      <AnimatePresence mode="wait">
        {mounted && (          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white dark:from-gray-900 dark:to-black z-50 flex items-center justify-center intro-overlay"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0, pointerEvents: "none" }}
            transition={{ duration: 1.2, delay: 0.5 }}
            onAnimationComplete={() => {
              // Make sure overlay is completely removed after animation
              const element = document.querySelector('.intro-overlay');
              if (element) {
                element.remove();
              }
            }}
            style={{ pointerEvents: "auto" }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ 
                scale: [0.8, 1.2, 1],
                opacity: [0, 1, 0]
              }}
              transition={{ 
                duration: 1.5,
                times: [0, 0.5, 1]
              }}
              className="text-4xl font-light"
            >
              omm sadul
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Navigation Links - Top Left */}
      <motion.nav 
        className="fixed top-6 left-6 z-40"
        variants={navContainer}
        initial="hidden"
        animate="show"
      >
        <motion.ul className="flex space-x-4 text-sm">          <motion.li variants={navItem}>
            <Link href="/experience" className="text-sm">
              experience
            </Link>
          </motion.li>
          <motion.li variants={navItem}>
            <Link href="/projects" className="text-sm">
              projects
            </Link>
          </motion.li>
          <motion.li variants={navItem}>
            <Link href="/publications" className="text-sm">
              research publications
            </Link>
          </motion.li>
          <motion.li variants={navItem}>
            <Link href="/mlblogs" className="text-sm">
              blogs
            </Link>
          </motion.li>
          <motion.li variants={navItem}>
            <Link href="/awards" className="text-sm">
              awards
            </Link>
          </motion.li>
        </motion.ul>
      </motion.nav>
        {/* Main Content - Center */}
      <motion.div
        className="text-center z-10 relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.8 }} // Delayed to appear after intro animation
      >
        <motion.div
          className="mb-8 overflow-hidden"
        >
          <motion.h1
            className="text-3xl md:text-4xl font-normal tracking-tight relative inline-block"
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
        >
          <motion.div className="relative space-y-2">
            <motion.p
              className="relative z-10 inline-block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 3.0 }}
            >
              <motion.span 
                className="text-gradient bg-gradient-to-r from-current to-gray-500 dark:from-current dark:to-gray-400 bg-clip-text"
                initial={{ backgroundPosition: "200% 0" }}
                animate={{ backgroundPosition: "0% 0" }}
                transition={{ duration: 1.2, delay: 3.2 }}
              >
                a senior year student, studying mechanical engineering.
              </motion.span>
            </motion.p>
            
            <motion.p
              className="relative z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 3.3 }}
            >
              <motion.span 
                className="text-gradient bg-gradient-to-r from-current to-gray-500 dark:from-current dark:to-gray-400 bg-clip-text"
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
      </motion.div>        {/* Social Links - Bottom Left */}
      <motion.div 
        className="fixed bottom-6 left-6 z-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 3.5 }}
      >
        <motion.ul 
          className="flex space-x-4 text-sm"
          variants={navContainer}
          initial="hidden"
          animate="show"
        >          <motion.li variants={navItem}>
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
    </div>
  );
}
