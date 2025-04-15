import React from 'react';
import { motion } from 'framer-motion';

const Features = () => {
  const features = [
    {
      id: 1,
      icon: '📊',
      title: 'Customized Analysis',
      description: 'Tailored financial models for your specific industry and business needs.'
    },
    {
      id: 2,
      icon: '🔍',
      title: 'Detailed Projections',
      description: 'Comprehensive cash flow, ROI, and breakeven analysis with visual reports.'
    },
    {
      id: 3,
      icon: '📈',
      title: 'Scenario Testing',
      description: 'Test multiple scenarios to identify risks and opportunities.'
    },
    {
      id: 4,
      icon: '⚡',
      title: 'Real-time Updates',
      description: 'Adjust parameters and see results instantly with our interactive interface.'
    },
    {
      id: 5,
      icon: '💡',
      title: 'AI Insights',
      description: 'Intelligent recommendations to optimize your business model.'
    },
    {
      id: 6,
      icon: '📱',
      title: 'Accessible Anywhere',
      description: 'Access your financial models on any device, anytime.'
    }
  ];

  return (
    <section id="features" className="features-section">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2>Powerful Features</h2>
          <p>Everything you need to make informed business decisions</p>
        </motion.div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
