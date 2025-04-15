import React from 'react';
import { motion } from 'framer-motion';

const SetupModule = ({ data, updateData }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="section-title">Café Setup</h2>
      <div className="card">
        <h3>Select Your Café Type</h3>
        <p>Choose a café model to load default parameters or customize your own.</p>
        <div style={{ display: 'flex', gap: '15px', marginTop: '20px' }}>
          <motion.div 
            className="card" 
            style={{ flex: 1, cursor: 'pointer', border: data === 'specialty' ? '2px solid #0062cc' : '1px solid rgba(255, 255, 255, 0.18)' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => updateData('specialty')}
          >
            <h4>Specialty Coffee Shop</h4>
            <p>Focus on premium coffee experience with limited food options</p>
            <ul style={{ marginTop: '10px', fontSize: '0.9rem' }}>
              <li>Higher ticket average</li>
              <li>Lower food costs</li>
              <li>Quality focused</li>
            </ul>
          </motion.div>
          
          <motion.div 
            className="card" 
            style={{ flex: 1, cursor: 'pointer', border: data === 'full-service' ? '2px solid #0062cc' : '1px solid rgba(255, 255, 255, 0.18)' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => updateData('full-service')}
          >
            <h4>Full-Service Café</h4>
            <p>Balanced coffee and food offerings with table service</p>
            <ul style={{ marginTop: '10px', fontSize: '0.9rem' }}>
              <li>Higher food sales</li>
              <li>Longer customer stay</li>
              <li>Higher labor costs</li>
            </ul>
          </motion.div>
          
          <motion.div 
            className="card" 
            style={{ flex: 1, cursor: 'pointer', border: data === 'kiosk' ? '2px solid #0062cc' : '1px solid rgba(255, 255, 255, 0.18)' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => updateData('kiosk')}
          >
            <h4>Coffee Kiosk</h4>
            <p>Small footprint with quick service and limited seating</p>
            <ul style={{ marginTop: '10px', fontSize: '0.9rem' }}>
              <li>Lower overhead</li>
              <li>Higher turnover</li>
              <li>Lower investment</li>
            </ul>
          </motion.div>
        </div>
      </div>
      
      <div className="card" style={{ marginTop: '20px' }}>
        <h3>Café Details</h3>
        <div className="form-control">
          <label htmlFor="cafeName" className="form-label">Café Name</label>
          <input
            type="text"
            id="cafeName"
            className="form-input"
            defaultValue="My Dream Café"
          />
        </div>
        
        <div className="form-control">
          <label htmlFor="location" className="form-label">Location</label>
          <select id="location" className="form-input">
            <option value="urban">Urban Center</option>
            <option value="suburban">Suburban Area</option>
            <option value="mall">Shopping Mall</option>
            <option value="business">Business District</option>
          </select>
        </div>
        
        <div className="form-control">
          <label htmlFor="size" className="form-label">Café Size (sq ft)</label>
          <input
            type="number"
            id="size"
            className="form-input"
            defaultValue="1200"
          />
        </div>
      </div>
      
      <motion.div 
        className="card"
        style={{ marginTop: '20px', background: 'rgba(0, 123, 255, 0.05)' }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h3 style={{ color: '#0062cc' }}>AI Location Insights</h3>
        <p>Based on typical Urban Center locations:</p>
        <ul>
          <li>Average foot traffic: 500-800 people per day</li>
          <li>Typical conversion rate: 8-12% of passersby</li>
          <li>Peak hours: 7-9am and 11:30am-1:30pm</li>
          <li>Weekend patterns: 30% higher traffic, 15% higher average ticket</li>
        </ul>
        <p style={{ fontWeight: 500, marginTop: '10px' }}>Recommendation: Urban locations benefit from extended evening hours and weekend promotions to maximize revenue potential.</p>
      </motion.div>
    </motion.div>
  );
};

export default SetupModule;
