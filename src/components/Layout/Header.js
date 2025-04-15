import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Layout.css';

const Header = ({ onDemoClick }) => {
  const [language, setLanguage] = useState('en');
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
    // In a real implementation, this would trigger the site's language change
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="site-header">
      <div className="header-container">
        <div className="logo">
          <svg className="logo-icon" width="40" height="40" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M30 20H90C95.5228 20 100 24.4772 100 30V90C100 95.5228 95.5228 100 90 100H30C24.4772 100 20 95.5228 20 90V30C20 24.4772 24.4772 20 30 20Z" fill="rgba(48, 87, 185, 0.1)" stroke="#3057B9" strokeWidth="3"/>
            <circle cx="45" cy="45" r="10" fill="#3057B9"/>
            <circle cx="75" cy="45" r="10" fill="#3057B9"/>
            <path d="M55 60H65L60 70Z" fill="#FFD700"/>
          </svg>
          <h1>Wise<span>Calculator</span></h1>
        </div>

        <div className="mobile-menu-toggle" onClick={toggleMenu}>
          <div className={`hamburger ${menuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <nav className={`main-navigation ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="#home" className="active">Home</a></li>
            <li><a href="#calculators">Calculator Gallery</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#case-studies">Case Studies</a></li>
            <li><a href="#blog">Resources</a></li>
            <li><a href="#contact">Contact</a></li>
            <li className="demo-nav-item"><a href="#" onClick={onDemoClick} className="demo-link">Try Demo</a></li>
          </ul>
        </nav>

        <div className="header-actions">
          <button className="language-toggle" onClick={toggleLanguage}>
            {language === 'en' ? 'العربية' : 'English'}
          </button>
          <button className="cta-button">Get Your Calculator</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
