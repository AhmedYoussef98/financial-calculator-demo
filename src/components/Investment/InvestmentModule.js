import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const InvestmentModule = ({ data, updateData }) => {
  const [investment, setInvestment] = useState({
    equipment: data.equipment,
    renovation: data.renovation,
    permits: data.permits,
    initialInventory: data.initialInventory,
    workingCapital: data.workingCapital
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedInvestment = {
      ...investment,
      [name]: parseFloat(value)
    };
    setInvestment(updatedInvestment);
    updateData(updatedInvestment);
  };

  const totalInvestment = Object.values(investment).reduce((sum, value) => sum + value, 0);
  
  const investmentData = Object.entries(investment).map(([key, value]) => ({
    name: key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase()),
    value,
  }));
  
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

  return (
    <div>
      <h2 className="section-title">Investment Analysis</h2>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
        <motion.div 
          className="card"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3>Investment Inputs</h3>

          <div className="form-control">
            <label htmlFor="equipment" className="form-label">Equipment Cost ($)</label>
            <input
              type="number"
              id="equipment"
              name="equipment"
              className="form-input"
              value={investment.equipment}
              onChange={handleChange}
              min="0"
              step="100"
            />
            <p style={{ fontSize: '0.85rem', color: '#7f8c8d', marginTop: '5px' }}>
              Includes espresso machines, grinders, fridges, POS system, etc.
            </p>
          </div>

          <div className="form-control">
            <label htmlFor="renovation" className="form-label">Renovation/Build-out Cost ($)</label>
            <input
              type="number"
              id="renovation"
              name="renovation"
              className="form-input"
              value={investment.renovation}
              onChange={handleChange}
              min="0"
              step="100"
            />
            <p style={{ fontSize: '0.85rem', color: '#7f8c8d', marginTop: '5px' }}>
              Includes construction, plumbing, electrical, decor, furniture, etc.
            </p>
          </div>

          <div className="form-control">
            <label htmlFor="permits" className="form-label">Permits & Licensing ($)</label>
            <input
              type="number"
              id="permits"
              name="permits"
              className="form-input"
              value={investment.permits}
              onChange={handleChange}
              min="0"
              step="100"
            />
            <p style={{ fontSize: '0.85rem', color: '#7f8c8d', marginTop: '5px' }}>
              Business registration, food service permits, health department, etc.
            </p>
          </div>

          <div className="form-control">
            <label htmlFor="initialInventory" className="form-label">Initial Inventory ($)</label>
            <input
              type="number"
              id="initialInventory"
              name="initialInventory"
              className="form-input"
              value={investment.initialInventory}
              onChange={handleChange}
              min="0"
              step="100"
            />
            <p style={{ fontSize: '0.85rem', color: '#7f8c8d', marginTop: '5px' }}>
              First orders of coffee, food ingredients, retail items, etc.
            </p>
          </div>

          <div className="form-control">
            <label htmlFor="workingCapital" className="form-label">Working Capital ($)</label>
            <input
              type="number"
              id="workingCapital"
              name="workingCapital"
              className="form-input"
              value={investment.workingCapital}
              onChange={handleChange}
              min="0"
              step="100"
            />
            <p style={{ fontSize: '0.85rem', color: '#7f8c8d', marginTop: '5px' }}>
              Cash reserves for first 3-6 months of operation.
            </p>
          </div>
        </motion.div>

        <div>
          <motion.div 
            className="card"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3>Investment Breakdown</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={investmentData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                >
                  {investmentData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
              </PieChart>
            </ResponsiveContainer>
            <p style={{ textAlign: 'center', marginTop: '10px' }}>
              Total Investment: ${totalInvestment.toLocaleString()}
            </p>
          </motion.div>

          <motion.div 
            className="card"
            style={{ marginTop: '20px' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3>Financing Options</h3>
            <div style={{ padding: '10px 0' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #eee' }}>
                <strong>Total Investment Needed:</strong>
                <span>${totalInvestment.toLocaleString()}</span>
              </div>
              
              <div style={{ padding: '15px 0' }}>
                <h4>Recommended Financing Mix:</h4>
                <ul style={{ marginTop: '10px' }}>
                  <li style={{ padding: '5px 0' }}>Personal Investment (40%): ${(totalInvestment * 0.4).toLocaleString()}</li>
                  <li style={{ padding: '5px 0' }}>Small Business Loan (50%): ${(totalInvestment * 0.5).toLocaleString()}</li>
                  <li style={{ padding: '5px 0' }}>Equipment Financing (10%): ${(totalInvestment * 0.1).toLocaleString()}</li>
                </ul>
              </div>
              
              <div style={{ padding: '15px 0' }}>
                <h4>Estimated Monthly Loan Payments:</h4>
                <ul style={{ marginTop: '10px' }}>
                  <li style={{ padding: '5px 0' }}>SBA Loan (5 years, 6%): ${((totalInvestment * 0.5 * 0.06/12) / (1 - Math.pow(1 + 0.06/12, -60))).toFixed(2)}</li>
                  <li style={{ padding: '5px 0' }}>Equipment Financing (3 years, 8%): ${((totalInvestment * 0.1 * 0.08/12) / (1 - Math.pow(1 + 0.08/12, -36))).toFixed(2)}</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div 
        className="card"
        style={{ marginTop: '30px', background: 'rgba(0, 123, 255, 0.05)' }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h3 style={{ color: '#0062cc' }}>AI Investment Insights</h3>
        <p>Based on analysis of similar café startups:</p>
        <ul>
          <li>Your equipment budget is {investment.equipment > 20000 ? 'above' : 'below'} average for specialty cafés (typical range: $18,000-$30,000)</li>
          <li>Your renovation budget is in the {investment.renovation > 40000 ? 'higher' : 'mid'} range (typical range: $25,000-$50,000)</li>
          <li>Working capital is {investment.workingCapital > (totalInvestment * 0.2) ? 'sufficient' : 'potentially low'} - we recommend 20-25% of total investment</li>
        </ul>
        <p style={{ fontWeight: 500, marginTop: '10px' }}>Optimization opportunity: Consider leasing equipment to reduce initial capital requirements by up to 30%.</p>
      </motion.div>
    </div>
  );
};

export default InvestmentModule;
