import React from 'react';
import { motion } from 'framer-motion';

const ValueProposition = () => {
  const benefits = [
    {
      id: 1,
      icon: '📊',
      title: 'Clear Visualizations',
      description: 'Transform complex data into intuitive charts and graphs that make financial insights immediately visible.'
    },
    {
      id: 2,
      icon: '🔄',
      title: 'Instant Scenario Testing',
      description: 'Test multiple business scenarios with real-time results to identify the most profitable path forward.'
    },
    {
      id: 3,
      icon: '🏭',
      title: 'Industry-Specific Insights',
      description: 'Calculators tailored to your industry\'s unique metrics, benchmarks, and success factors.'
    },
    {
      id: 4,
      icon: '👨‍💼',
      title: 'Expert Support',
      description: 'Our financial experts help you interpret results and implement strategic recommendations.'
    }
  ];

  return (
    <section className="value-proposition-section">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2>What Makes Our Calculators Different</h2>
          <p>We don't just calculate numbers. We deliver financial clarity and confidence.</p>
        </motion.div>
        
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.id}
              className="benefit-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10, 
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                background: 'linear-gradient(135deg, #ffffff 0%, #f5f7fa 100%)' 
              }}
            >
              <div className="benefit-icon">{benefit.icon}</div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
