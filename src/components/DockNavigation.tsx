'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Interface for dock item props
interface DockItemProps {
  href: string;
  label: string;
  icon: React.ReactNode;
  isActive: boolean;
}

// DockItem component
const DockItem = ({ href, label, icon, isActive }: DockItemProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.li 
      className="dock-item flex flex-col items-center justify-end relative"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
    >
      <AnimatePresence>
        {isHovered && (
          <motion.div 
            className="tooltip absolute -top-10 px-3 py-1 bg-white dark:bg-gray-800 rounded-md text-sm font-medium shadow-lg"
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.95 }}
            transition={{ duration: 0.15 }}
          >
            {label}
          </motion.div>
        )}
      </AnimatePresence>
      
      <Link href={href}>
        <motion.div
          className={`dock-icon-wrapper p-2 sm:p-3 flex items-center justify-center rounded-xl ${
            isActive 
              ? 'bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 shadow-md' 
              : 'bg-white/90 dark:bg-gray-900/70 hover:bg-gray-100 dark:hover:bg-gray-800'
          } backdrop-blur-md transition-all border border-gray-200 dark:border-gray-800`}
          whileHover={{ 
            scale: 1.15,
            y: -8,
            transition: { type: 'spring', stiffness: 400, damping: 15 }
          }}
          whileTap={{ scale: 0.92 }}
          style={{
            boxShadow: isActive ? '0 4px 12px rgba(0,0,0,0.08)' : '0 2px 6px rgba(0,0,0,0.05)'
          }}
        >
          <span className={`text-xl sm:text-2xl ${isActive ? 'scale-110' : ''}`}>{icon}</span>
        </motion.div>
      </Link>
      
      {isActive && (
        <motion.div 
          className="h-1 w-1 rounded-full bg-black dark:bg-white mt-1.5"
          layoutId="activeIndicator"
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        />
      )}
    </motion.li>
  );
};

// Main DockNavigation component
export function DockNavigation() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) return null;
  
  return (    <motion.div
      className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 w-[90%] sm:w-auto"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.5, type: 'spring', stiffness: 300, damping: 25 }}
    >
      <nav className="dock-navigation w-full overflow-x-auto">
        <motion.ul 
          className="flex space-x-2 sm:space-x-4 px-3 sm:px-5 py-3 sm:py-3.5 bg-white/80 dark:bg-black/80 backdrop-blur-md rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-800/50 min-w-fit"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.9 }}
        >
          <DockItem 
            href="/" 
            label="Home" 
            icon="🏠"
            isActive={pathname === '/'} 
          />
          <DockItem 
            href="/experience" 
            label="Experience" 
            icon="👨‍💻" 
            isActive={pathname === '/experience'}
          />
          <DockItem 
            href="/projects" 
            label="Projects" 
            icon="🚀" 
            isActive={pathname === '/projects'}
          />
          <DockItem 
            href="/publications" 
            label="Publications" 
            icon="📚" 
            isActive={pathname === '/publications'}
          />
          <DockItem 
            href="/mlblogs" 
            label="Blogs" 
            icon="📝" 
            isActive={pathname === '/mlblogs'}
          />
          <DockItem 
            href="/awards" 
            label="Awards" 
            icon="🏆" 
            isActive={pathname === '/awards'}
          />
        </motion.ul>
      </nav>    </motion.div>
  );
}
