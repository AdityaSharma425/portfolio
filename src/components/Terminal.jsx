import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { getTheme, isLightTheme } from '../themes';

const commands = {
  help: `Available commands inside aditya_sharma_shell:
  help                     Show this directory manual.
  cat about.txt            Display Aditya's bio summary.
  ls skills/               List technical languages & frameworks.
  python list_projects.py  Display interactive highlighted products.
  cat achievements.json    Show national and global final credentials.
  clear                    Wipe console logs and restart shell.`,
  'cat about.txt': `FILE SUMMARY: about.txt
===========================================
Aditya Sharma is an innovative Software Engineer based in India, pursuing CSE at Lovely Professional University (GPA: 8.3).
Specialties: React.js, TypeScript, Next.js, Django, Node.js, WebSockets, RabbitMQ, Celery, and SQL/NoSQL databases.

Passionate about scaling conversational architectures, streamlining asynchronous task processing, and building clean, beautiful developer dashboards.`,
  'ls skills/': `DIRECTORY SEARCH RESULT: skills/
===========================================
[Languages]:  Python, TypeScript, JavaScript, C++, SQL
[Frontend]:   React.js, Next.js, HTML, CSS, Tailwind CSS, Redux, Zustand, Figma
[Backend]:    Node.js, Express.js, Django, REST APIs, Microservices
[Databases]:  MongoDB, PostgreSQL, Supabase, Prisma
[DevOps]:     Docker, Redis, RabbitMQ, Celery, Git, Linux`,
  'python list_projects.py': `COMPUTING COMPLETED PIPELINES: list_projects.py
===================================================
1. MiniCRM Platform (Production In-Dev)
   - Real-time campaign builder powered by React, Django, RabbitMQ, and Celery.
   - Leverages OpenAI APIs for dynamic audience segment classification.
   
2. Welthy (Live Platform)
   - Finance analytics engine running Next.js, Supabase, and Prisma.
   - Implements Clerk authentication, Inngest event triggers, and Arcjet security layers.
   - Demo URL: https://welthy-six.vercel.app/`,
  'cat achievements.json': `METRIC ENGINES: achievements.json
===============================================
{
  "Sopra Steria ISC 2025": {
    "Rank": "National Runner-Up",
    "Competed Against": "3900+ Students, 518 Teams Nationwide"
  },
  "NPTEL IIT Kharagpur": {
    "Certification": "Cloud Computing Certification (2024)"
  }
}`,
};

const aliases = {
  about: 'cat about.txt',
  skills: 'ls skills/',
  projects: 'python list_projects.py',
  achievements: 'cat achievements.json',
};

const Terminal = ({ currentTheme }) => {
  const theme = getTheme(currentTheme);
  const light = isLightTheme(currentTheme);
  const { terminal } = theme;

  const [history, setHistory] = useState([
    { type: 'comment', text: '# Welcome to Aditya Sharma\'s interactive command terminal.' },
    { type: 'comment', text: '# Type \'help\' to see list of valid commands or select shortcut actions.' },
    { type: 'system', text: 'Initializing system core... Authenticated. (v2.6.5-stable)' },
    {
      type: 'accent',
      text: `System highlights loaded:
• Software Engineer Intern @ Affinsys AI
• National Runner-Up - Sopra Steria ISC 2025
• B.Tech Computer Science student @ LPU (CGPA: 8.42)`,
    },
  ]);
  const [input, setInput] = useState('');
  const bodyRef = useRef(null);

  const scrollToBottom = () => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  };

  useEffect(() => {
    scrollToBottom();
  }, [history]);

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const rawCmd = input.trim();
      const cmd = rawCmd.toLowerCase();
      let response = '';
      let type = 'output';

      if (cmd === 'clear') {
        setHistory([]);
        setInput('');
        return;
      }

      const resolvedCmd = aliases[cmd] || rawCmd;

      if (commands[resolvedCmd]) {
        response = commands[resolvedCmd];
      } else if (rawCmd !== '') {
        response = `shell: command not found: ${rawCmd}. Type 'help' for directory parameters.`;
        type = 'error';
      }

      setHistory((prev) => [
        ...prev,
        { type: 'user', text: `guest@aditya_sharma:~$ ${rawCmd}` },
        ...(response ? [{ type, text: response }] : []),
      ]);
      setInput('');
    }
  };

  const executeShortcut = (cmd) => {
    let response = '';
    let type = 'output';
    if (cmd === 'clear') {
      setHistory([]);
      return;
    }
    if (commands[cmd]) response = commands[cmd];
    setHistory((prev) => [
      ...prev,
      { type: 'user', text: `guest@aditya_sharma:~$ ${cmd}` },
      ...(response ? [{ type, text: response }] : []),
    ]);
  };

  const btnStyle = {
    background: light ? 'rgba(0,0,0,0.04)' : 'rgba(255,255,255,0.06)',
    border: '1px solid var(--accent-cyan)',
    color: 'var(--accent-cyan)',
    padding: '4px 10px',
    borderRadius: '4px',
    fontSize: '0.8rem',
  };

  return (
    <section id="terminal-section" style={{ padding: '6rem 2rem', position: 'relative' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div
            style={{
              display: 'inline-block',
              padding: '4px 12px',
              background: light ? 'rgba(0,0,0,0.04)' : 'rgba(255,255,255,0.06)',
              border: '1px solid var(--accent-cyan)',
              color: 'var(--accent-cyan)',
              borderRadius: '4px',
              fontSize: '0.8rem',
              fontWeight: 'bold',
              letterSpacing: '2px',
              marginBottom: '1rem',
            }}
          >
            INTERACTIVE SHELL
          </div>
          <h2 style={{ fontSize: '2.5rem' }}>Developer Console</h2>
        </div>

        <motion.div
          key={currentTheme}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel"
          style={{
            overflow: 'hidden',
            background: light ? 'var(--surface)' : 'var(--bg-primary)',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '12px 16px',
              background: 'var(--bg-secondary)',
              borderBottom: '1px solid var(--border-glow)',
            }}
          >
            <div style={{ display: 'flex', gap: '8px', marginRight: '16px' }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--accent-red)' }} />
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--accent-purple)' }} />
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--accent-pink)' }} />
            </div>
            <div className="mono-text" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              aditya_sharma_shell.sh — {terminal.kernel}
            </div>
          </div>

          <div
            ref={bodyRef}
            className="mono-text no-scrollbar"
            style={{
              padding: '20px',
              height: '380px',
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              background: light ? 'transparent' : 'rgba(0, 0, 0, 0.25)',
            }}
            onClick={() => document.getElementById('terminal-input')?.focus()}
          >
            {history.map((line, i) => (
              <div
                key={i}
                style={{
                  color:
                    line.type === 'comment'
                      ? 'var(--text-secondary)'
                      : line.type === 'system'
                        ? 'var(--accent-cyan)'
                        : line.type === 'accent'
                          ? 'var(--accent-purple)'
                          : line.type === 'user'
                            ? 'var(--text-primary)'
                            : line.type === 'error'
                              ? 'var(--accent-red)'
                              : 'var(--text-secondary)',
                  whiteSpace: 'pre-wrap',
                  lineHeight: '1.6',
                }}
              >
                {line.text}
              </div>
            ))}

            <div style={{ display: 'flex', alignItems: 'center', marginTop: '8px' }}>
              <span style={{ color: 'var(--accent-cyan)', marginRight: '8px' }}>guest@aditya_sharma:~$</span>
              <input
                id="terminal-input"
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleCommand}
                style={{
                  background: 'transparent',
                  border: 'none',
                  outline: 'none',
                  color: 'var(--text-primary)',
                  fontFamily: 'inherit',
                  fontSize: '1rem',
                  flex: 1,
                }}
                autoComplete="off"
                spellCheck="false"
              />
            </div>
          </div>

          <div
            style={{
              padding: '12px 20px',
              background: 'var(--bg-secondary)',
              borderTop: '1px solid var(--border-glow)',
              display: 'flex',
              gap: '10px',
              flexWrap: 'wrap',
              alignItems: 'center',
            }}
          >
            <span className="mono-text" style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', marginRight: '8px' }}>
              Recruiter Quick Clicks:
            </span>
            {['help', 'cat about.txt', 'ls skills/', 'python list_projects.py', 'cat achievements.json', 'clear'].map((cmd) => (
              <button key={cmd} onClick={() => executeShortcut(cmd)} className="interactive" style={btnStyle}>
                {cmd}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Terminal;
