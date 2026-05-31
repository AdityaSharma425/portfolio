import React from 'react';
import { motion } from 'framer-motion';
import ThemeSectionBadge from './theme/ThemeSectionBadge';
import { getExperienceHover } from '../utils/themeAnimations';

const Experience = ({ currentTheme = 'cyberpunk' }) => {
  const expHover = getExperienceHover(currentTheme);

  return (
    <section id="experience" style={{ padding: '6rem 2rem', position: 'relative' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <ThemeSectionBadge label="CAREER JOURNEY" currentTheme={currentTheme} />
          <h2 style={{ fontSize: '2.5rem' }}>Professional Experience</h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={expHover}
          className="glass-panel experience-card"
          style={{ padding: '2.5rem', transition: 'box-shadow 0.4s ease, border-color 0.4s ease' }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-glow)', paddingBottom: '1.5rem' }}>
            <div>
              <span style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)', background: 'rgba(255,255,255,0.04)', padding: '2px 8px', borderRadius: '4px', fontWeight: 'bold' }}>ACTIVE INTERNSHIP</span>
              <h3 style={{ fontSize: '1.5rem', marginTop: '0.5rem', color: 'var(--text-primary)' }}>Software Engineer Intern</h3>
              <h4 style={{ fontSize: '1.1rem', color: 'var(--accent-pink)', fontWeight: 500 }}>Affinsys AI &bull; Bengaluru, India (Remote/Hybrid)</h4>
            </div>
            <div style={{ textAlign: 'right' }} className="edu-meta-right">
              <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)' }}>June 2025 — Present</span>
            </div>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{ color: 'var(--accent-cyan)', marginBottom: '0.75rem', fontSize: '1.1rem' }}>UI & Real-time Conversational Engineering</h4>
            <ul style={{ listStyleType: 'square', paddingLeft: '1.25rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><strong>GPT-Style Conversational Interfaces:</strong> Led development of dynamic, recursive markdown and streaming-response interfaces using React.js and TypeScript.</li>
              <li><strong>Real-time WebSockets:</strong> Engineered scalable client-server socket channels for bi-directional streaming, decreasing messaging latency.</li>
              <li><strong>High Scalability:</strong> Supported stable connections handling over <strong>500+ daily user interactions</strong>.</li>
            </ul>
          </div>

          <div>
            <h4 style={{ color: 'var(--accent-cyan)', marginBottom: '0.75rem', fontSize: '1.1rem' }}>Enterprise CRM & Distributed Task Pipelines</h4>
            <ul style={{ listStyleType: 'square', paddingLeft: '1.25rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><strong>Django Microservices Sales CRM:</strong> Architected sales pipelines managing full lifecycle transitions of <strong>1000+ business leads</strong>.</li>
              <li><strong>Central Business Dashboards:</strong> Built drag-and-drop workflow status boards, reducing manual administrative tracking by <strong>30%</strong>.</li>
              <li><strong>Asynchronous Task Migration:</strong> Designed scalable worker architectures migrating heavy campaigns to Celery and RabbitMQ broker pipelines, achieving <strong>25% increase in throughput processing</strong>.</li>
              <li><strong>API Lead Capture Automation:</strong> Developed automated hooks securing lead captures, dropping manual workflow dependencies by <strong>40%</strong>.</li>
            </ul>
          </div>

          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '2rem', borderTop: '1px solid var(--border-glow)', paddingTop: '1.5rem' }}>
            {['React.js', 'TypeScript', 'Django', 'WebSockets', 'RabbitMQ', 'Celery', 'PostgreSQL'].map((tech) => (
              <motion.span
                key={tech}
                whileHover={{ scale: 1.06, y: -2 }}
                className="interactive"
                style={{ fontSize: '0.8rem', background: 'var(--bg-secondary)', color: 'var(--text-secondary)', padding: '4px 12px', borderRadius: '4px', border: '1px solid var(--border-glow)' }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
