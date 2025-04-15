import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: "The custom calculator helped us identify a pricing strategy that increased our profit margin by 23% in just the first quarter.",
      name: "Sarah Johnson",
      title: "CEO, Urban Brew Cafés",
      company: "Urban Brew Cafés",
      image: "https://via.placeholder.com/80x80?text=SJ",
      logoImage: "https://via.placeholder.com/120x50?text=Urban+Brew"
    },
    {
      id: 2,
      quote: "We used to spend weeks creating financial projections. Now we can test multiple scenarios in minutes and make confident decisions.",
      name: "Michael Chen",
      title: "Finance Director",
      company: "RetailPro Stores",
      image: "https://via.placeholder.com/80x80?text=MC",
      logoImage: "https://via.placeholder.com/120x50?text=RetailPro"
    },
    {
      id: 3,
      quote: "Their manufacturing calculator revealed inefficiencies we'd never noticed before, saving us over $150,000 annually in production costs.",
      name: "Amira Hassan",
      title: "Operations Manager",
      company: "Global Fabrication",
      image: "https://via.placeholder.com/80x80?text=AH",
      logoImage: "https://via.placeholder.com/120x50?text=Global+Fab"
    }
  ];

  return (
    <section className="testimonials-section">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2>Success Stories</h2>
          <p>See how our calculators have transformed financial decision-making for businesses like yours</p>
        </motion.div>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="testimonial-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10, 
                boxShadow: '0 15px 30px rgba(0,0,0,0.1)'
              }}
            >
              <div className="testimonial-content">
                <div className="quote-icon">❝</div>
                <p className="quote-text">{testimonial.quote}</p>
                <div className="testimonial-author">
                  <div className="author-image">
                    <img src={testimonial.image} alt={testimonial.name} />
                  </div>
                  <div className="author-info">
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.title}, {testimonial.company}</p>
                  </div>
                </div>
              </div>
              <div className="company-logo">
                <img src={testimonial.logoImage} alt={testimonial.company} />
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="case-studies-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p>Want to see detailed results and implementation stories?</p>
          <a href="#case-studies" className="text-link">View our case studies <span className="arrow">→</span></a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
