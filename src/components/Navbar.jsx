import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Apple } from 'lucide-react';
import './Navbar.css';

const navLinks = [
  { name: 'Concept', href: '#concept' },
  { name: 'Features', href: '#features' },
  { name: 'How It Works', href: '#how-it-works' },
  { name: 'Tutorial', href: '#demo' },
  { name: 'Privacy Policies', href: '#privacy' },
  { name: 'About Us', href: '#about' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Concept');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sectionIds = navLinks.map(link => link.href.substring(1)).reverse();
      for (const sectionId of sectionIds) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 300) {
            const foundLink = navLinks.find(link => link.href === `#${sectionId}`);
            if (foundLink) {
              setActiveTab(foundLink.name);
              break;
            }
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100, x: "-50%" }}
      animate={{ y: 0, x: "-50%" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="nav-content">
        <a href="#" className="logo">
          <img src="/SpaceFold.png" alt="" style={{ width: '30px', height: '30px' }} />
          <span className="logo-text">SpaceFold</span>
        </a>

        {/* Desktop Nav */}
        <div className="nav-links desktop-only">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`nav-link ${activeTab === link.name ? 'active' : ''}`}
              onClick={(e) => setActiveTab(link.name)}
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="nav-actions desktop-only">
          <a href="#download" className="btn-primary" style={{ padding: '8px 24px', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <img src="https://cdn-icons-png.flaticon.com/512/2175/2175370.png" alt="" style={{ width: '20px', height: '20px' }} />
            Download
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="mobile-toggle mobile-only"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="mobile-menu glass-panel"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="mobile-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a href="#download" className="btn-primary mobile-btn" onClick={() => setMobileMenuOpen(false)} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
              <Apple size={18} />
              Download
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
