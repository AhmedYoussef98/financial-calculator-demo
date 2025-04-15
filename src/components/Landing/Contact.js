import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2>Ready to Transform Your Financial Planning?</h2>
          <p>Get in touch with our team of experts today</p>
        </motion.div>
        
        <div className="contact-container">
          <motion.div 
            className="contact-form-container"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" placeholder="Enter your name" />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" placeholder="Enter your email" />
              </div>
              
              <div className="form-group">
                <label htmlFor="company">Company Name</label>
                <input type="text" id="company" placeholder="Enter your company name" />
              </div>
              
              <div className="form-group">
                <label htmlFor="industry">Industry</label>
                <select id="industry">
                  <option value="">Select your industry</option>
                  <option value="cafe">Café / Restaurant</option>
                  <option value="retail">Retail</option>
                  <option value="service">Service Business</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="agriculture">Agriculture</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="4" placeholder="Tell us about your project or questions..."></textarea>
              </div>
              
              <button type="submit" className="primary-button full-width">Send Message</button>
            </form>
          </motion.div>
          
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="info-card">
              <h3>Why Contact Us?</h3>
              <ul className="benefits-list">
                <li>
                  <span className="icon">💼</span>
                  <div>
                    <h4>Expert Consultation</h4>
                    <p>Our financial analysts understand your industry-specific challenges</p>
                  </div>
                </li>
                <li>
                  <span className="icon">💡</span>
                  <div>
                    <h4>Custom Solutions</h4>
                    <p>We tailor our software to match your unique business needs</p>
                  </div>
                </li>
                <li>
                  <span className="icon">🚀</span>
                  <div>
                    <h4>Ongoing Support</h4>
                    <p>We're with you every step of the way as your business grows</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="contact-methods">
              <div className="contact-method">
                <span className="icon">📱</span>
                <div>
                  <h4>Phone</h4>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="contact-method">
                <span className="icon">✉️</span>
                <div>
                  <h4>Email</h4>
                  <p>info@fincalcpro.com</p>
                </div>
              </div>
              <div className="contact-method">
                <span className="icon">🏢</span>
                <div>
                  <h4>Office</h4>
                  <p>123 Financial District, Suite 500<br />San Francisco, CA 94111</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
