'use client';

import { useTheme } from './ThemeProvider';
import { motion } from 'framer-motion';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
    return (
    <motion.button
      className="theme-toggle p-2 sm:p-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
      onClick={toggleTheme}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? 'dark' : 'light'}
    </motion.button>
  );
}
