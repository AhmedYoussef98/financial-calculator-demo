import React from 'react';
import { motion } from 'framer-motion';
import Header from '../Layout/Header';
import EnhancedHeroSection from './EnhancedHeroSection';
import ValueProposition from './ValueProposition';
import FeaturedCalculators from './FeaturedCalculators';
import Calculator from './Calculator';
import Testimonials from './Testimonials';
import Contact from './Contact';
import './Landing.css';

const EnhancedLandingPage = ({ onDemoClick }) => {
  return (
    <div className="enhanced-landing-page">
      <Header onDemoClick={onDemoClick} />
      
      <main>
        <EnhancedHeroSection />
        <ValueProposition />

        <section id="demo-preview" className="demo-preview-section">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="section-header"
            >
              <h2>Try Our Café Feasibility Calculator</h2>
              <p>See if your dream café will be profitable before investing a single dollar</p>
            </motion.div>

            <div className="demo-preview-container">
              <div className="demo-preview-content">
                <h3>Comprehensive Café Business Analysis</h3>
                <ul className="demo-feature-list">
                  <li>Input your investment costs and see the breakdown</li>
                  <li>Model daily operations and customer flow</li>
                  <li>Calculate profit margins and break-even points</li>
                  <li>Receive AI-powered optimization insights</li>
                  <li>Test different scenarios to maximize profitability</li>
                </ul>
                <button className="primary-button" onClick={onDemoClick}>
                  Launch Interactive Demo
                </button>
              </div>
              <div className="demo-preview-image">
                <img src="https://via.placeholder.com/600x400?text=Cafe+Calculator+Demo" alt="Café Calculator Preview" />
                <div className="demo-badge">Interactive Demo</div>
              </div>
            </div>
          </div>
        </section>

        <section id="demo-preview" className="demo-preview-section">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="section-header"
            >
              <h2>Try Our Café Feasibility Calculator</h2>
              <p>See if your dream café will be profitable before investing a single dollar</p>
            </motion.div>

            <div className="demo-preview-container">
              <div className="demo-preview-content">
                <h3>Comprehensive Café Business Analysis</h3>
                <ul className="demo-feature-list">
                  <li>Input your investment costs and see the breakdown</li>
                  <li>Model daily operations and customer flow</li>
                  <li>Calculate profit margins and break-even points</li>
                  <li>Receive AI-powered optimization insights</li>
                  <li>Test different scenarios to maximize profitability</li>
                </ul>
                <button className="primary-button" onClick={onDemoClick}>
                  Launch Interactive Demo
                </button>
                    <div className="floating-demo-button">
        <button 
          className="primary-button pulse-animation" 
          onClick={onDemoClick}
        >
          Try Café Demo
        </button>
      </div>
    </div>
              <div className="demo-preview-image">
                <img src="https://via.placeholder.com/600x400?text=Cafe+Calculator+Demo" alt="Café Calculator Preview" />
                <div className="demo-badge">Interactive Demo</div>
              </div>
            </div>
          </div>
        </section>
        <FeaturedCalculators />
        
        <section id="live-calculator" className="calculator-section">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="section-header"
            >
              <h2>Experience Our Interactive Calculator</h2>
              <p>Try it yourself and see how our tools can transform your financial planning</p>
            </motion.div>
            <Calculator />
                <div className="floating-demo-button">
        <button 
          className="primary-button pulse-animation" 
          onClick={onDemoClick}
        >
          Try Café Demo
        </button>
      </div>
    </div>
        </section>
        
        <Testimonials />
        
        <section className="cta-banner">
          <div className="banner-content">
            <h2>Ready to Calculate Wisely?</h2>
            <p>Get started with your industry-specific financial calculator today</p>
            <div className="banner-buttons">
              <button className="primary-button" onClick={onDemoClick}>Try Full Demo</button>
              <button className="secondary-button">Book a Consultation</button>
            </div>
          </div>
        </section>
        
        <Contact />
      </main>

      <footer className="enhanced-footer">
        <div className="footer-container">
          <div className="footer-main">
            <div className="footer-about">
              <div className="footer-logo">
                <svg className="logo-icon" width="40" height="40" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M30 20H90C95.5228 20 100 24.4772 100 30V90C100 95.5228 95.5228 100 90 100H30C24.4772 100 20 95.5228 20 90V30C20 24.4772 24.4772 20 30 20Z" fill="rgba(255, 255, 255, 0.1)" stroke="#ffffff" strokeWidth="3"/>
                  <circle cx="45" cy="45" r="10" fill="#FFD700"/>
                  <circle cx="75" cy="45" r="10" fill="#FFD700"/>
                  <path d="M55 60H65L60 70Z" fill="#FFD700"/>
                </svg>
                <h2>Wise<span>Calculator</span></h2>
              </div>
              <p>We help businesses make smarter financial decisions through custom calculators that provide clarity and confidence.</p>
              <div className="social-links">
                <a href="https://linkedin.com" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
                <a href="https://twitter.com" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                <a href="https://facebook.com" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
                <a href="https://instagram.com" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
            
            <div className="footer-links">
              <div className="link-group">
                <h3>Company</h3>
                <ul>
                  <li><a href="#about">About Us</a></li>
                  <li><a href="#team">Our Team</a></li>
                  <li><a href="#careers">Careers</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
              </div>
              
              <div className="link-group">
                <h3>Services</h3>
                <ul>
                  <li><a href="#calculators">Calculator Gallery</a></li>
                  <li><a href="#custom">Custom Development</a></li>
                  <li><a href="#consulting">Financial Consulting</a></li>
                  <li><a href="#training">Training</a></li>
                </ul>
              </div>
              
              <div className="link-group">
                <h3>Resources</h3>
                <ul>
                  <li><a href="#blog">Blog</a></li>
                  <li><a href="#guides">Guides</a></li>
                  <li><a href="#case-studies">Case Studies</a></li>
                  <li><a href="#webinars">Webinars</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2025 WiseCalculator. All rights reserved.</p>
            <div className="legal-links">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <a href="#cookies">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
      
      <div className="live-chat-button">
        <button aria-label="Live Chat">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2Z" fill="white"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default EnhancedLandingPage;
