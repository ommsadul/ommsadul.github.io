'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function MLBlogsPage() {
  return (
    <>
      <motion.h1
        className="text-2xl font-medium tracking-tight mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Guide Blogs
      </motion.h1>
      
      <div className="space-y-8">
        {/* Blog 1 */}
        <motion.article 
          className="blog-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="text-xl font-medium mb-2">A Survival Guide for Tier-3 Mechanical Engineering Undergraduates</h2>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-3">coming soon</p>
          <p className="mb-4">
          This guide discusses effective strategies to navigate various challenges, including misconceptions about mech careers, outdated curriculum, toxic academic environments, lack of proper mentorship, unprofessional behavior and misleading guidance from professors, poor placement opportunities, unmotivated peer groups, and much more.
          </p>
          <Link href="https://medium.com/@omssadul" className="read-more">
            Read more →
          </Link>
        </motion.article>
      </div>
      
      <motion.div 
        className="mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Link href="/" className="back-link">
          ← Back to home
        </Link>
      </motion.div>
    </>
  );
}
