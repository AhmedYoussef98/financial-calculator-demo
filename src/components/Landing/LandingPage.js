import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from './HeroSection';
import Calculator from './Calculator';
import Features from './Features';
import Pricing from './Pricing';
import Contact from './Contact';
import './Landing.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="landing-header">
        <div className="logo">
          <h1>FinCalc<span>Pro</span></h1>
        </div>
        <nav className="main-nav">
          <ul>
            <li><a href="#calculator">Calculator</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <button className="cta-button">Try Demo</button>
      </header>

      <HeroSection />
      
      <section id="calculator" className="calculator-section">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <h2>Try Our Interactive Calculator</h2>
            <p>See how our powerful tools can transform your financial planning</p>
          </motion.div>
          <Calculator />
        </div>
      </section>

      <Features />
      <Pricing />
      <Contact />

      <footer className="landing-footer">
        <div className="footer-container">
          <div className="footer-logo">
            <h2>FinCalc<span>Pro</span></h2>
            <p>Transforming financial feasibility studies</p>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h3>Company</h3>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#team">Our Team</a></li>
                <li><a href="#careers">Careers</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Resources</h3>
              <ul>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#guides">Guides</a></li>
                <li><a href="#webinars">Webinars</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Legal</h3>
              <ul>
                <li><a href="#privacy">Privacy Policy</a></li>
                <li><a href="#terms">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 FinCalcPro. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
