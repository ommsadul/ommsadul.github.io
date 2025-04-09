'use client';

import { Section } from '../components/Section';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <motion.h1
        className="text-lg font-normal tracking-tight mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        hey, i am omm sadul
      </motion.h1>
      
      <Section index={0}>
        <div className="highlight">
          <p>a senior year student, studying mechanical engineering.</p>
          <p>mainly work in developing prediction algorithms/computational medicine.</p>
        </div>
      </Section>
        <Section title="experience" index={1}>
        <ul className="experience-list">
          <li>
            <span className="text-gray-500 dark:text-gray-400">oct 24' - present</span>
            <span className="block">undergraduate research scholar @ <a href="https://www.jhu.edu/">Johns Hopkins University</a></span>
          </li>
          <li>
            <span className="text-gray-500 dark:text-gray-400">july 24' - oct 24'</span>
            <span className="block">quality intern @ 2P Technologies</span>
          </li>
          <li>
            <span className="text-gray-500 dark:text-gray-400">aug 23' - aug 24'</span>
            <span className="block">undergraduate research scholar @ <a href="https://mitwpu.edu.in/">mit-wpu</a></span>
          </li>
        </ul>
      </Section>
      
      <Section title="projects" index={2}>
        <ul>
          <li>
            <Link href="/projects">serious projects</Link> — all my important projects
          </li>
        </ul>
      </Section>
      
      <Section title="research publications" index={3}>
        <div className="highlight">
          <p className="text-sm">
            Sadul, O., Phirake, S., Sonawwanay, P.D. (2025). <strong>Intelligent Systems for Digitalization and Automation of Agriculture Equipment</strong>. In:
            Kulkarni, A.J., Hajiaghaei-Keshteli, M. (eds) Advances in Intelligent Systems for Sustainable Agriculture. ICISA 2023. Lecture Notes in
            Networks and Systems, vol 1201. Springer, Singapore. <a href="https://doi.org/10.1007/978-981-97-9839-1_6">https://doi.org/10.1007/978-981-97-9839-1_6</a>
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">[more coming by the end of 2025]</p>
        </div>
      </Section>
      
      <Section title="blogs" index={4}>
        <ul>
          <li className="blog-item">
            <Link href="/mlblogs">guide blogs</Link> — all my blogs about experiences
            <p className="text-sm text-gray-500 dark:text-gray-400">Sharing insights from my academic and professional journey.</p>
          </li>
        </ul>
      </Section>
      
      <Section title="awards" index={5}>
        <div className="highlight">
          <p>
            <strong>Johns Hopkins University Fellowship</strong> - Awarded a full scholarship to conduct research throughout my senior year.
          </p>
        </div>
      </Section>
    </>
  );
}
