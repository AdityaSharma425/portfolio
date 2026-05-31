import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <section id="education" style={{ padding: '6rem 2rem', position: 'relative' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{ display: 'inline-block', padding: '4px 12px', background: 'rgba(168, 85, 247, 0.1)', border: '1px solid var(--accent-purple)', color: 'var(--accent-purple)', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold', letterSpacing: '2px', marginBottom: '1rem' }}>
            ACADEMIC BACKGROUND
          </div>
          <h2 style={{ fontSize: '2.5rem' }}>Education Profile</h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel interactive"
          style={{
            padding: '2.5rem',
            boxShadow: 'inset 0 0 15px rgba(168, 85, 247, 0.03)'
          }}
        >
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div style={{ color: 'var(--accent-cyan)' }}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
              </svg>
            </div>
            
            <div style={{ flex: 1, minWidth: '250px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)' }}>2022 — 2026</span>
                <span style={{ color: 'var(--accent-cyan)', fontWeight: 'bold' }}>CGPA: 8.42 / 10.0</span>
              </div>
              
              <h3 style={{ fontSize: '1.6rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>Lovely Professional University</h3>
              <h4 style={{ fontSize: '1.1rem', color: 'var(--accent-pink)', fontWeight: 500, marginBottom: '1rem' }}>Bachelor of Technology &bull; Computer Science &amp; Engineering</h4>
              
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '1rem' }}>
                Rigorous course syllabus including Data Structures &amp; Algorithms, Object-Oriented Design, Operating Systems, Computer Networks, Database Management Systems, Cloud Architectures, and Full Stack Development.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Education;
