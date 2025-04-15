import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <motion.div 
          className="hero-text"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Financial Feasibility Studies Made Simple</h1>
          <p>Custom financial analysis software that helps businesses make data-driven decisions with confidence</p>
          <div className="hero-buttons">
            <button className="primary-button">Get Started</button>
            <button className="secondary-button">Watch Demo</button>
          </div>
        </motion.div>
        
        <motion.div 
          className="hero-image"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img src="https://via.placeholder.com/600x400?text=Financial+Analysis" alt="Financial Analysis Dashboard" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
