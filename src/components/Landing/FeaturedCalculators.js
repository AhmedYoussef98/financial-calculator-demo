import React, { useState } from 'react';
import { motion } from 'framer-motion';

const CalculatorPreview = ({ title, industry, description, features, image, active, onClick }) => {
  return (
    <motion.div 
      className={`calculator-preview-card ${active ? 'active' : ''}`}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      onClick={onClick}
    >
      <div className="preview-header">
        <div className="preview-badge">{industry}</div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="preview-image">
        <img src={image || "https://via.placeholder.com/400x250?text=Calculator+Preview"} alt={title} />
        {active && (
          <div className="preview-overlay">
            <ul className="feature-list">
              {features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <button className="view-details-button">View Details</button>
          </div>
        )}
      </div>
    </motion.div>
  );
};

const FeaturedCalculators = () => {
  const [activePreview, setActivePreview] = useState(null);
  
  const calculators = [
    {
      id: 1,
      title: "Café Profitability Calculator",
      industry: "Food & Beverage",
      description: "Optimize your café's menu pricing, staff scheduling, and inventory for maximum profitability.",
      features: [
        "Menu price optimization",
        "Staff scheduling efficiency",
        "Inventory turnover analysis",
        "Break-even calculations",
        "Seating optimization"
      ],
      image: "https://via.placeholder.com/400x250?text=Cafe+Calculator"
    },
    {
      id: 2,
      title: "Retail Space ROI Analyzer",
      industry: "Retail",
      description: "Determine the optimal product mix, pricing strategy, and store layout for your retail business.",
      features: [
        "Product mix optimization",
        "Shelf space ROI analysis",
        "Pricing strategy modeling",
        "Customer flow simulation",
        "Seasonal inventory planning"
      ],
      image: "https://via.placeholder.com/400x250?text=Retail+Calculator"
    },
    {
      id: 3,
      title: "Manufacturing Cost Optimizer",
      industry: "Manufacturing",
      description: "Reduce production costs while maintaining quality through advanced cost modeling.",
      features: [
        "Production line efficiency",
        "Material cost optimization",
        "Labor allocation modeling",
        "Equipment ROI analysis",
        "Make vs. buy decisions"
      ],
      image: "https://via.placeholder.com/400x250?text=Manufacturing+Calculator"
    }
  ];

  return (
    <section id="calculators" className="featured-calculators-section">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2>Featured Financial Calculators</h2>
          <p>Explore some of our most popular industry-specific calculators</p>
        </motion.div>
        
        <div className="calculators-grid">
          {calculators.map(calculator => (
            <CalculatorPreview
              key={calculator.id}
              {...calculator}
              active={activePreview === calculator.id}
              onClick={() => setActivePreview(calculator.id === activePreview ? null : calculator.id)}
            />
          ))}
        </div>
        
        <div className="calculators-cta">
          <p>Looking for a different industry or specialized calculator?</p>
          <button className="secondary-button">View All Calculators</button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCalculators;
