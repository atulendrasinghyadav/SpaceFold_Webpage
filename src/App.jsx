import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Concept from './components/Concept';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import DemoVideo from './components/DemoVideo';
import Privacy from './components/Privacy';
import About from './components/About';
import Download from './components/Download';
import Footer from './components/Footer';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="app-container">
      <motion.div
        className="scroll-progress-bar"
        style={{ scaleX }}
      />
      <Navbar />
      <main>
        <Hero />
        <Concept />
        <Features />
        <HowItWorks />
        <DemoVideo />
        <Privacy />
        <About />
        <Download />
      </main>
      <Footer />
    </div>
  );
}

export default App;
