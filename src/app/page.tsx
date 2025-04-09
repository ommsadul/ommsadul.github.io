'use client';

import { Section } from '../components/Section';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <motion.h1
        className="text-2xl font-medium tracking-tight mb-3"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
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
        <ul>
          <li>undergraduate research scholar @ Johns Hopkins University [oct 24' - present]</li>
          <li>quality intern @ 2P Technologies [july 24' - oct 24']</li>
          <li>undergraduate research scholar @ my college [aug 23' - aug 24']</li>
        </ul>
      </Section>
      
      <Section title="projects" index={2}>
        <ul>
          <li>
            <Link href="/projects">serious projects</Link> : all my important projects
          </li>
        </ul>
      </Section>
      
      <Section title="research publications" index={3}>
        <div className="highlight">
          <p>
            Sadul, O., Phirake, S., Sonawwanay, P.D. (2025). <strong>Intelligent Systems for Digitalization and Automation of Agriculture Equipment</strong>. In:
            Kulkarni, A.J., Hajiaghaei-Keshteli, M. (eds) Advances in Intelligent Systems for Sustainable Agriculture. ICISA 2023. Lecture Notes in
            Networks and Systems, vol 1201. Springer, Singapore. <a href="https://doi.org/10.1007/978-981-97-9839-1_6">https://doi.org/10.1007/978-981-97-9839-1_6</a>
          </p>
          <p>[more coming by the end of 2025]</p>
        </div>
      </Section>
      
      <Section title="blogs" index={4}>
        <ul>
          <li className="blog-item">
            <Link href="/mlblogs">guide blogs</Link> : all my blogs about experiences
            <p>Sharing insights from my academic and professional journey.</p>
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
