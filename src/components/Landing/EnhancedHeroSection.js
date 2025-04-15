import React from 'react';
import { motion } from 'framer-motion';

const EnhancedHeroSection = () => {
  return (
    <section className="enhanced-hero-section" id="home">
      <div className="numbers-background">
        {Array.from({ length: 20 }).map((_, i) => (
          <div 
            key={i} 
            className="floating-number"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 20 + 10}s`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random() * 0.3 + 0.1
            }}
          >
            {Math.floor(Math.random() * 10)}
          </div>
        ))}
      </div>
      
      <div className="hero-content">
        <motion.div 
          className="hero-text"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Business Decisions, Calculated Wisely</h1>
          <p>Custom financial calculators that transform complex numbers into clear business insights</p>
          <div className="hero-buttons">
            <button className="primary-button">See Calculator Examples</button>
            <button className="secondary-button">Book a Consultation</button>
          </div>
        </motion.div>
        
        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="calculator-preview">
            <div className="calculator-screen">
              <div className="calculator-chart">
                <div className="chart-bar" style={{ height: '60%' }}></div>
                <div className="chart-bar" style={{ height: '80%' }}></div>
                <div className="chart-bar" style={{ height: '40%' }}></div>
                <div className="chart-bar" style={{ height: '70%' }}></div>
                <div className="chart-bar" style={{ height: '90%' }}></div>
              </div>
              <div className="calculator-metrics">
                <div className="metric">
                  <span className="metric-label">ROI</span>
                  <span className="metric-value">34.2%</span>
                </div>
                <div className="metric">
                  <span className="metric-label">Payback</span>
                  <span className="metric-value">14 mo</span>
                </div>
                <div className="metric">
                  <span className="metric-label">Profit</span>
                  <span className="metric-value">$124k</span>
                </div>
              </div>
            </div>
            <div className="calculator-controls">
              <div className="control-slider">
                <span>Investment</span>
                <div className="slider">
                  <div className="slider-fill" style={{ width: '70%' }}></div>
                  <div className="slider-thumb" style={{ left: '70%' }}></div>
                </div>
              </div>
              <div className="control-slider">
                <span>Revenue</span>
                <div className="slider">
                  <div className="slider-fill" style={{ width: '60%' }}></div>
                  <div className="slider-thumb" style={{ left: '60%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EnhancedHeroSection;
