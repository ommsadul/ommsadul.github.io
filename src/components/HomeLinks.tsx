'use client';

import Link from 'next/link';
import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface HomeLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export function HomeLink({ href, children, className = '' }: HomeLinkProps) {
  return (
    <Link 
      href={href as any} 
      className={`home-link transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md px-1 border-none ${className}`}
    >
      {children}
    </Link>
  );
}

export function HomeSocialLink({ href, children, className = '' }: HomeLinkProps) {
  return (
    <motion.a 
      href={href} 
      className={`home-social-link transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md px-1 border-none ${className}`}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </motion.a>
  );
}
