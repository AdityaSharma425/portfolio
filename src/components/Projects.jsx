import React from 'react';
import { motion } from 'framer-motion';
import { getCardHover, getCardClass } from '../utils/themeAnimations';
import ThemeSectionBadge from './theme/ThemeSectionBadge';

const Projects = ({ currentTheme = 'cyberpunk' }) => {
  const cardHover = getCardHover(currentTheme);
  const cardClass = getCardClass(currentTheme);

  const projects = [
    {
      title: "MiniCRM Platform",
      tagline: "AI-Powered CRM & Marketing Automation Platform",
      category: "Full Stack & AI",
      status: "Production Ready",
      desc: "A robust full-stack CRM engineered to manage sales funnels, process complex automation tasks asynchronously, trigger campaigns in real-time, and leverage LLMs for intelligent audience segmentation.",
      highlights: ["AI Segments (OpenAI)", "Asynchronous Workers (Redis)", "Real-time Marketing Automations", "Analytics Dashboard"],
      tech: ["Next.js", "Node.js", "MongoDB", "Redis", "OpenAI API"],
      mockup: { url: "minicrm.aditya.io", type: "bar" }
    },
    {
      title: "Welthy",
      tagline: "AI Personal Finance Management Platform",
      category: "AI FinTech",
      status: "Live Platform",
      desc: "An intelligent personal financial advisor providing real-time expense ingestion, custom budget setting, security rate-limiting protection, and transaction-driven serverless event triggering.",
      highlights: ["Serverless (Inngest)", "Security Guard (Arcjet)", "Relational Database (Prisma)", "Clerk User Authentication"],
      tech: ["Next.js", "React", "Supabase", "Prisma", "Inngest", "Arcjet"],
      mockup: { url: "welthy-six.vercel.app", type: "balance", val: "$14,240.50" },
      link: "https://welthy-six.vercel.app/"
    }
  ];

  return (
    <section id="projects" style={{ padding: '6rem 2rem', position: 'relative' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <ThemeSectionBadge label="MY WORKS" currentTheme={currentTheme} />
          <h2 style={{ fontSize: '2.5rem' }}>Featured Engineering Projects</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }} className="projects-grid">
          {projects.map((proj, idx) => (
            <motion.div
              key={proj.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              whileHover={cardHover}
              className={`glass-panel interactive project-card ${cardClass}`}
              style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden', position: 'relative' }}
            >
              <div className="project-card-shimmer" aria-hidden="true" />

              <div style={{ padding: '1.5rem 1.5rem 0 1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)', fontWeight: 'bold' }}>{proj.category}</span>
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    style={{ fontSize: '0.8rem', color: 'var(--accent-pink)', border: '1px solid var(--accent-pink)', padding: '1px 6px', borderRadius: '4px' }}
                  >
                    {proj.status}
                  </motion.span>
                </div>
                <h3 style={{ fontSize: '1.6rem', marginBottom: '0.25rem', color: 'var(--text-primary)' }}>{proj.title}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{proj.tagline}</p>
              </div>

              <div style={{
                margin: '1.5rem 1.5rem 0 1.5rem',
                background: 'var(--bg-primary)',
                borderRadius: '6px',
                border: '1px solid var(--border-glow)',
                overflow: 'hidden',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', background: 'var(--bg-secondary)', padding: '8px 12px', borderBottom: '1px solid var(--border-glow)' }}>
                  <div style={{ display: 'flex', gap: '5px', marginRight: '12px' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-red)' }} />
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-purple)' }} />
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-pink)' }} />
                  </div>
                  <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)' }}>{proj.mockup.url}</span>
                </div>
                <div style={{ padding: '1.5rem', minHeight: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {proj.mockup.type === 'bar' ? (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                        <span>Campaign Conversion</span>
                        <span>Active: 100+ Users</span>
                      </div>
                      <div style={{ display: 'flex', gap: '6px', height: '50px', alignItems: 'flex-end' }}>
                        {[60, 80, 45, 95, 70, 90, 50].map((h, i) => (
                          <motion.div
                            key={i}
                            initial={{ height: 0 }}
                            whileInView={{ height: `${h}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.08 }}
                            style={{ flex: 1, background: 'var(--accent-cyan)', borderRadius: '2px', boxShadow: `0 0 10px var(--border-glow)` }}
                          />
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div style={{ width: '100%', textAlign: 'center' }}>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>Net Balance</div>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        style={{ fontSize: '1.8rem', fontWeight: 'bold', color: 'var(--accent-pink)' }}
                      >
                        {proj.mockup.val}
                      </motion.div>
                      <span style={{ fontSize: '0.7rem', color: 'var(--accent-cyan)' }}>↑ 12% MoM AI Optimised</span>
                    </div>
                  )}
                </div>
              </div>

              <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.5', marginBottom: '1.5rem' }}>{proj.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  {proj.highlights.map((hl) => (
                    <motion.span
                      key={hl}
                      whileHover={{ scale: 1.05, y: -2 }}
                      style={{ fontSize: '0.75rem', background: 'rgba(255,255,255,0.04)', color: 'var(--accent-cyan)', padding: '2px 8px', borderRadius: '4px', border: '1px solid var(--border-glow)' }}
                    >
                      {hl}
                    </motion.span>
                  ))}
                </div>
                <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border-glow)', paddingTop: '1rem' }}>
                  <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                    {proj.tech.map((t, i) => (
                      <span key={t} style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{t}{i < proj.tech.length - 1 ? ' • ' : ''}</span>
                    ))}
                  </div>
                  {proj.link ? (
                    <motion.a
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="interactive"
                      whileHover={{ x: 4 }}
                      style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.85rem', color: 'var(--accent-cyan)', fontWeight: 'bold' }}
                    >
                      Launch <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" /></svg>
                    </motion.a>
                  ) : (
                    <motion.a
                      href="#contact"
                      className="interactive"
                      whileHover={{ x: 4 }}
                      style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.85rem', color: 'var(--accent-cyan)', fontWeight: 'bold' }}
                    >
                      Inquire Demo <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
