'use client';

import { useTheme } from './ThemeProvider';
import { motion } from 'framer-motion';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <motion.button
      className="theme-toggle p-2 sm:p-3"
      onClick={toggleTheme}      whileHover={{ 
        scale: 1.05,
        transition: { type: "spring", stiffness: 400, damping: 15 }
      }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        transition: { 
          type: "spring",
          stiffness: 260,
          damping: 20
        }
      }}
      transition={{ duration: 0.5 }}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? 'dark' : 'light'}
    </motion.button>
  );
}
