import React, { useState } from 'react';
import { MotionConfig } from 'framer-motion';
import CustomCursor from './components/CustomCursor';
import AmbientParticles from './components/AmbientParticles';
import Header from './components/Header';
import Hero from './components/Hero';
import Terminal from './components/Terminal';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import GithubCalendar from './components/GithubCalendar';
import Achievements from './components/Achievements';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeSelector from './components/ThemeSelector';
import ThemeTransition from './components/ThemeTransition';
import ThemeBackground from './components/ThemeBackground';
import { DEFAULT_THEME, normalizeStoredTheme } from './themes';

function App() {
  const [gateOpen, setGateOpen] = useState(true);
  const [currentTheme, setCurrentTheme] = useState(
    () => normalizeStoredTheme(localStorage.getItem('portfolio-theme')) || DEFAULT_THEME
  );

  const handleEnter = () => setGateOpen(false);

  return (
    <MotionConfig reducedMotion="user" transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}>
      {/* Portal to body — stays visible while scrolling (no transform parent) */}
      <CustomCursor currentTheme={currentTheme} />

      {gateOpen && (
        <ThemeSelector onThemeSelect={setCurrentTheme} onEnter={handleEnter} />
      )}

      {!gateOpen && (
        <div className="portfolio-enter">
          <ThemeBackground currentTheme={currentTheme} />
          <ThemeTransition currentTheme={currentTheme} />
          <AmbientParticles currentTheme={currentTheme} />
          <Header currentTheme={currentTheme} onThemeChange={setCurrentTheme} />
          <main className="portfolio-main" id="home" style={{ position: 'relative', zIndex: 1 }}>
            <Hero currentTheme={currentTheme} />
            <Terminal currentTheme={currentTheme} />
            <About currentTheme={currentTheme} />
            <Experience currentTheme={currentTheme} />
            <Projects currentTheme={currentTheme} />
            <Skills currentTheme={currentTheme} />
            <GithubCalendar />
            <Achievements />
            <Education />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </MotionConfig>
  );
}

export default App;
