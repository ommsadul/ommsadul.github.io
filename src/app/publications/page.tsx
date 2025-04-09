'use client';

import { Section } from '../../components/Section';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Publications() {
  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <motion.h1
          className="text-lg font-normal tracking-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          research publications
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
        <div className="highlight">
          <p className="text-sm">
            Sadul, O., Phirake, S., Sonawwanay, P.D. (2025). <strong>Intelligent Systems for Digitalization and Automation of Agriculture Equipment</strong>. In:
            Kulkarni, A.J., Hajiaghaei-Keshteli, M. (eds) Advances in Intelligent Systems for Sustainable Agriculture. ICISA 2023. Lecture Notes in
            Networks and Systems, vol 1201. Springer, Singapore. <a href="https://doi.org/10.1007/978-981-97-9839-1_6">https://doi.org/10.1007/978-981-97-9839-1_6</a>
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">[more coming by the end of 2025]</p>
        </div>
      </Section>
    </>
  );
}
