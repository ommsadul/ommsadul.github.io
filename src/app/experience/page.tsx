'use client';

import { Section } from '../../components/Section';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Experience() {
  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <motion.h1
          className="text-lg font-normal tracking-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          experience
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
        <ul className="experience-list">
          <li className="!border-b-0">
            <span className="text-gray-500 dark:text-gray-400">oct 24' - present</span>
            <span className="block">undergraduate research scholar @ <a href="https://www.jhu.edu/">Johns Hopkins University</a></span>
          </li>
          <li className="!border-b-0">
            <span className="text-gray-500 dark:text-gray-400">july 24' - oct 24'</span>
            <span className="block">quality intern @ 2P Technologies</span>
          </li>
          <li className="!border-b-0">
            <span className="text-gray-500 dark:text-gray-400">aug 23' - aug 24'</span>
            <span className="block">undergraduate research scholar @ <a href="https://mitwpu.edu.in/">mit-wpu</a></span>
          </li>
        </ul>
      </Section>
    </>
  );
}
