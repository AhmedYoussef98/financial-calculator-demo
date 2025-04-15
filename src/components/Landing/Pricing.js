import React from 'react';
import { motion } from 'framer-motion';

const Pricing = () => {
  const plans = [
    {
      id: 'basic',
      name: 'Basic',
      price: '499',
      description: 'Essential tools for small businesses',
      features: [
        'Simple financial model',
        'Basic revenue and cost projections',
        'Break-even analysis',
        'Basic reporting',
        '30-day support'
      ],
      recommended: false
    },
    {
      id: 'professional',
      name: 'Professional',
      price: '999',
      description: 'Advanced analysis for growing businesses',
      features: [
        'Comprehensive financial model',
        'Detailed cash flow projections',
        'Multiple scenario analysis',
        'Interactive dashboards',
        'ROI and NPV calculations',
        '90-day support and training'
      ],
      recommended: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: '2499',
      description: 'Complete solution for complex business needs',
      features: [
        'Custom industry-specific models',
        'Advanced sensitivity analysis',
        'Multi-year projections',
        'Integration with existing systems',
        'Executive report generation',
        'Dedicated support representative',
        'Unlimited updates for 1 year'
      ],
      recommended: false
    }
  ];

  return (
    <section id="pricing" className="pricing-section">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2>Simple, Transparent Pricing</h2>
          <p>Choose the plan that fits your business needs</p>
        </motion.div>
        
        <div className="pricing-container">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              className={`pricing-card ${plan.recommended ? 'recommended' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
            >
              {plan.recommended && <div className="recommended-badge">Most Popular</div>}
              <h3>{plan.name}</h3>
              <div className="price">
                <span className="currency">$</span>
                <span className="amount">{plan.price}</span>
              </div>
              <p className="plan-description">{plan.description}</p>
              
              <ul className="features-list">
                {plan.features.map((feature, i) => (
                  <li key={i}>✓ {feature}</li>
                ))}
              </ul>
              
              <button className={`${plan.recommended ? 'primary-button' : 'secondary-button'} full-width`}>
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
        
        <div className="custom-solution">
          <h3>Need a custom solution?</h3>
          <p>Contact us to discuss your specific requirements and get a tailored quote.</p>
          <button className="outline-button">Contact Sales</button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
