import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeSectionBadge from './theme/ThemeSectionBadge';
import { getSkillPillHover } from '../utils/themeAnimations';

const Skills = ({ currentTheme = 'cyberpunk' }) => {
  const [activeTab, setActiveTab] = useState('all');
  const pillHover = getSkillPillHover(currentTheme);

  const categories = [
    { id: 'all', label: 'All Stack' },
    { id: 'languages', label: 'Languages' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend & DB' },
    { id: 'devops', label: 'DevOps & Tools' },
  ];

  const skillData = [
    { cat: 'languages', title: 'Languages', skills: ['Python', 'TypeScript', 'JavaScript', 'C++', 'SQL'] },
    { cat: 'frontend', title: 'Frontend', skills: ['React.js', 'Next.js', 'Redux Toolkit', 'Zustand', 'Tailwind CSS', 'HTML & CSS', 'Context API', 'Figma'] },
    { cat: 'backend', title: 'Backend & Databases', skills: ['Node.js', 'Express.js', 'Django', 'REST APIs', 'Microservices', 'MongoDB', 'PostgreSQL', 'Supabase', 'Prisma ORM'] },
    { cat: 'devops', title: 'DevOps & Tools', skills: ['Docker', 'Redis', 'RabbitMQ', 'Celery Workers', 'Git & GitHub', 'Linux Shell'] },
  ];

  const filteredCategories = activeTab === 'all' ? skillData : skillData.filter((item) => item.cat === activeTab);

  return (
    <section id="skills" style={{ padding: '6rem 2rem', position: 'relative' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <ThemeSectionBadge label="CORE CAPABILITIES" currentTheme={currentTheme} />
          <h2 style={{ fontSize: '2.5rem' }}>Technical Expertise</h2>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
          {categories.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="interactive"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              style={{
                background: activeTab === tab.id ? 'var(--accent-cyan)' : 'var(--bg-secondary)',
                color: activeTab === tab.id ? 'var(--bg-primary)' : 'var(--text-secondary)',
                border: activeTab === tab.id ? '1px solid var(--accent-cyan)' : '1px solid var(--border-glow)',
                padding: '8px 16px',
                borderRadius: '4px',
                fontSize: '0.9rem',
                fontWeight: 600,
              }}
            >
              {tab.label}
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab + currentTheme}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}
          >
            {filteredCategories.map((cat, idx) => (
              <motion.div
                key={cat.cat}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="glass-panel interactive"
                style={{ padding: '2rem' }}
              >
                <h3 style={{ fontSize: '1.3rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>{cat.title}</h3>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  {cat.skills.map((skill, i) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.03 }}
                      whileHover={pillHover}
                      className="interactive skill-pill"
                      style={{
                        background: 'var(--bg-secondary)',
                        color: 'var(--text-primary)',
                        border: '1px solid var(--border-glow)',
                        padding: '6px 16px',
                        borderRadius: '4px',
                        fontSize: '0.9rem',
                        fontWeight: 500,
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Skills;
