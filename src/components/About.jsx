import React from 'react';
import { motion } from 'framer-motion';
import ThemeSectionBadge from './theme/ThemeSectionBadge';
import { getMilestoneHover } from '../utils/themeAnimations';

const About = ({ currentTheme = 'cyberpunk' }) => {
  const milestoneHover = getMilestoneHover(currentTheme);

  const milestones = [
    { title: "Software Engineer Intern", desc: "Affinsys AI - Leading UI architecture and sales system microservices." },
    { title: "National Runner-Up", desc: "Sopra Steria ISC 2025 - Outperformed thousands of developers nationwide." },
    { title: "AI & Automation Enthusiast", desc: "Developing production grade LLM connectors and robust agents." },
    { title: "Scalable Enterprise Architectures", desc: "Engineering systems with task queues, distributed caching, and microservices." },
  ];

  return (
    <section id="about" style={{ padding: '6rem 2rem', position: 'relative' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }} className="about-grid">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <ThemeSectionBadge label="ABOUT ME" currentTheme={currentTheme} />
          <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', lineHeight: '1.2' }}>
            Building Scalable Software <br />
            <span style={{ color: 'var(--accent-cyan)' }}>That Solves Real Problems</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '1.05rem' }}>
            I am a Computer Science Engineering student at Lovely Professional University with hands-on experience building enterprise-grade software products, AI-powered platforms, CRM systems, workflow automation solutions, and modern web applications.
          </p>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.05rem' }}>
            My expertise spans frontend engineering, backend development, API integrations, cloud-native architectures, and user experience optimization. I enjoy transforming complex business requirements into scalable and intuitive software products.
          </p>
          <motion.div
            whileHover={{ x: 4, borderLeftWidth: '4px' }}
            transition={{ duration: 0.3 }}
            style={{ borderLeft: '3px solid var(--accent-pink)', padding: '1rem 1rem 1rem 1.5rem' }}
            className="glass-panel"
          >
            <p style={{ fontStyle: 'italic', color: 'var(--text-primary)', fontSize: '1rem' }}>
              "The best software bridges complex machine intelligence with high-fidelity, frictionless user experiences."
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}
          className="milestones-grid"
        >
          {milestones.map((m, idx) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={milestoneHover}
              className="glass-panel interactive milestone-card"
              style={{ padding: '1.5rem' }}
            >
              <h4 style={{ color: 'var(--text-primary)', fontSize: '1.1rem', marginBottom: '0.75rem' }}>{m.title}</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.4' }}>{m.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
