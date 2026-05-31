import React from 'react';
import { motion } from 'framer-motion';

const Achievements = () => {
  const list = [
    {
      badge: "NATIONAL RECOGNITION",
      title: "National Runner-Up",
      subtitle: "Sopra Steria ISC 2025",
      desc: "Engineered cutting-edge software solutions competing successfully against 3900+ engineering students and 518 teams nationwide. Exhibited elite full-stack system architecture and integration skills before industry executives.",
      color: "rgba(59, 130, 246, 0.15)"
    },
    {
      badge: "ACADEMIC CERTIFICATE",
      title: "Cloud Computing Certification",
      subtitle: "NPTEL SWAYAM — IIT Kharagpur (2024)",
      desc: "Completed comprehensive academic certification focused on cloud models, architecture virtualization, resource management pipelines, containerised architectures, performance matrices, and distributed storage systems.",
      color: "rgba(147, 51, 234, 0.15)"
    }
  ];

  return (
    <section id="achievements" style={{ padding: '6rem 2rem', position: 'relative' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{ display: 'inline-block', padding: '4px 12px', background: 'rgba(255, 51, 102, 0.1)', border: '1px solid var(--accent-red)', color: 'var(--accent-red)', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold', letterSpacing: '2px', marginBottom: '1rem' }}>
            CREDENTIALS
          </div>
          <h2 style={{ fontSize: '2.5rem' }}>Achievements & Certifications</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem' }} className="achievements-grid">
          {list.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="glass-panel interactive"
              style={{
                padding: '2.5rem',
                boxShadow: `inset 0 0 15px ${item.color.replace('0.15', '0.04')}`,
                transition: 'all 0.3s ease',
                display: 'flex',
                gap: '1.5rem'
              }}
            >
              <div style={{ color: 'var(--accent-cyan)' }}>
                {idx === 0 ? (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34M12 2a4 4 0 0 1 4 4v5a4 4 0 0 1-4 4 4 4 0 0 1-4-4V6a4 4 0 0 1 4-4z" />
                  </svg>
                ) : (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2v2M4.93 4.93l1.41 1.41M20 12h2M17.66 17.66l1.41 1.41M2 12h2M6.34 17.66l-1.41 1.41M12 20v2M19.07 4.93l-1.41 1.41M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
                  </svg>
                )}
              </div>
              <div>
                <span style={{ fontSize: '0.8rem', color: 'var(--accent-pink)', fontWeight: 'bold', letterSpacing: '1px' }}>{item.badge}</span>
                <h3 style={{ fontSize: '1.4rem', marginTop: '0.25rem', color: 'var(--text-primary)' }}>{item.title}</h3>
                <h4 style={{ fontSize: '1rem', color: 'var(--accent-cyan)', fontWeight: 500, marginBottom: '1rem' }}>{item.subtitle}</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.5' }}>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Achievements;
