import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, LineChart, Line, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const OperationsModule = ({ data, updateData }) => {
  const [operations, setOperations] = useState({
    seatingCapacity: data.seatingCapacity,
    avgTicket: data.avgTicket,
    turnoverRate: data.turnoverRate,
    hoursOpen: data.hoursOpen,
    daysOpen: data.daysOpen,
    staffCount: data.staffCount,
    avgStaffWage: data.avgStaffWage,
    foodCost: data.foodCost,
    beverageCost: data.beverageCost,
    rent: data.rent
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedOperations = {
      ...operations,
      [name]: parseFloat(value)
    };
    setOperations(updatedOperations);
    updateData(updatedOperations);
  };

  // Calculate key metrics
  const dailyCustomers = operations.seatingCapacity * operations.turnoverRate;
  const weeklyCustomers = dailyCustomers * operations.daysOpen;
  const monthlyCustomers = weeklyCustomers * 4; // Assuming 4 weeks in a month
  
  const dailyRevenue = dailyCustomers * operations.avgTicket;
  const weeklyRevenue = dailyRevenue * operations.daysOpen;
  const monthlyRevenue = weeklyRevenue * 4;
  const annualRevenue = monthlyRevenue * 12;
  
  const laborHoursPerDay = operations.staffCount * operations.hoursOpen;
  const dailyLaborCost = laborHoursPerDay * operations.avgStaffWage;
  const monthlyLaborCost = dailyLaborCost * operations.daysOpen * 4;
  
  const monthlyCOGS = monthlyRevenue * ((operations.foodCost + operations.beverageCost) / 100);
  const monthlyRent = operations.rent;
  const monthlyUtilities = 1200; // Assumption
  const monthlyOther = 2000; // Assumption
  
  const totalMonthlyCosts = monthlyLaborCost + monthlyCOGS + monthlyRent + monthlyUtilities + monthlyOther;
  const monthlyProfit = monthlyRevenue - totalMonthlyCosts;
  const profitMargin = (monthlyProfit / monthlyRevenue) * 100;

  // Data for charts
  const weekdayData = [
    { name: 'Monday', customers: dailyCustomers * 0.6, revenue: dailyRevenue * 0.6 },
    { name: 'Tuesday', customers: dailyCustomers * 0.7, revenue: dailyRevenue * 0.7 },
    { name: 'Wednesday', customers: dailyCustomers * 0.8, revenue: dailyRevenue * 0.8 },
    { name: 'Thursday', customers: dailyCustomers * 0.9, revenue: dailyRevenue * 0.9 },
    { name: 'Friday', customers: dailyCustomers * 1.2, revenue: dailyRevenue * 1.2 },
    { name: 'Saturday', customers: dailyCustomers * 1.5, revenue: dailyRevenue * 1.5 },
    { name: 'Sunday', customers: dailyCustomers * 1.3, revenue: dailyRevenue * 1.3 }
  ];
  
  const hourlyData = [
    { hour: '7am', customers: 5, revenue: 5 * operations.avgTicket },
    { hour: '8am', customers: 12, revenue: 12 * operations.avgTicket },
    { hour: '9am', customers: 18, revenue: 18 * operations.avgTicket },
    { hour: '10am', customers: 15, revenue: 15 * operations.avgTicket },
    { hour: '11am', customers: 14, revenue: 14 * operations.avgTicket },
    { hour: '12pm', customers: 20, revenue: 20 * operations.avgTicket },
    { hour: '1pm', customers: 22, revenue: 22 * operations.avgTicket },
    { hour: '2pm', customers: 16, revenue: 16 * operations.avgTicket },
    { hour: '3pm', customers: 12, revenue: 12 * operations.avgTicket },
    { hour: '4pm', customers: 10, revenue: 10 * operations.avgTicket },
    { hour: '5pm', customers: 15, revenue: 15 * operations.avgTicket },
    { hour: '6pm', customers: 12, revenue: 12 * operations.avgTicket },
    { hour: '7pm', customers: 8, revenue: 8 * operations.avgTicket }
  ];

  return (
    <div>
      <h2 className="section-title">Operations Simulator</h2>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
        <motion.div 
          className="card"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3>Café Parameters</h3>

          <div className="form-control">
            <label htmlFor="seatingCapacity" className="form-label">Seating Capacity</label>
            <input
              type="number"
              id="seatingCapacity"
              name="seatingCapacity"
              className="form-input"
              value={operations.seatingCapacity}
              onChange={handleChange}
              min="1"
              step="1"
            />
          </div>

          <div className="form-control">
            <label htmlFor="avgTicket" className="form-label">Average Ticket ($)</label>
            <input
              type="number"
              id="avgTicket"
              name="avgTicket"
              className="form-input"
              value={operations.avgTicket}
              onChange={handleChange}
              min="1"
              step="0.5"
            />
          </div>

          <div className="form-control">
            <label htmlFor="turnoverRate" className="form-label">Table Turnover Rate (customers per seat per day)</label>
            <input
              type="number"
              id="turnoverRate"
              name="turnoverRate"
              className="form-input"
              value={operations.turnoverRate}
              onChange={handleChange}
              min="0.1"
              max="10"
              step="0.1"
            />
          </div>

          <div className="form-control">
            <label htmlFor="hoursOpen" className="form-label">Hours Open per Day</label>
            <input
              type="number"
              id="hoursOpen"
              name="hoursOpen"
              className="form-input"
              value={operations.hoursOpen}
              onChange={handleChange}
              min="1"
              max="24"
              step="0.5"
            />
          </div>

          <div className="form-control">
            <label htmlFor="daysOpen" className="form-label">Days Open per Week</label>
            <input
              type="number"
              id="daysOpen"
              name="daysOpen"
              className="form-input"
              value={operations.daysOpen}
              onChange={handleChange}
              min="1"
              max="7"
              step="1"
            />
          </div>
        </motion.div>

        <motion.div 
          className="card"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3>Cost Structure</h3>

          <div className="form-control">
            <label htmlFor="staffCount" className="form-label">Staff Count (per shift)</label>
            <input
              type="number"
              id="staffCount"
              name="staffCount"
              className="form-input"
              value={operations.staffCount}
              onChange={handleChange}
              min="1"
              step="1"
            />
          </div>

          <div className="form-control">
            <label htmlFor="avgStaffWage" className="form-label">Average Staff Wage ($ per hour)</label>
            <input
              type="number"
              id="avgStaffWage"
              name="avgStaffWage"
              className="form-input"
              value={operations.avgStaffWage}
              onChange={handleChange}
              min="1"
              step="0.5"
            />
          </div>

          <div className="form-control">
            <label htmlFor="foodCost" className="form-label">Food Cost (% of sales)</label>
            <input
              type="number"
              id="foodCost"
              name="foodCost"
              className="form-input"
              value={operations.foodCost}
              onChange={handleChange}
              min="1"
              max="100"
              step="0.5"
            />
          </div>

          <div className="form-control">
            <label htmlFor="beverageCost" className="form-label">Beverage Cost (% of sales)</label>
            <input
              type="number"
              id="beverageCost"
              name="beverageCost"
              className="form-input"
              value={operations.beverageCost}
              onChange={handleChange}
              min="1"
              max="100"
              step="0.5"
            />
          </div>

          <div className="form-control">
            <label htmlFor="rent" className="form-label">Monthly Rent ($)</label>
            <input
              type="number"
              id="rent"
              name="rent"
              className="form-input"
              value={operations.rent}
              onChange={handleChange}
              min="0"
              step="100"
            />
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="card"
        style={{ marginTop: '20px' }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h3>Operational Performance</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '15px', marginBottom: '20px' }}>
          <div className="metric-card">
            <span className="metric-label">Daily Customers</span>
            <span className="metric-value">{Math.round(dailyCustomers)}</span>
          </div>
          <div className="metric-card">
            <span className="metric-label">Monthly Revenue</span>
            <span className="metric-value">${Math.round(monthlyRevenue).toLocaleString()}</span>
          </div>
          <div className="metric-card">
            <span className="metric-label">Monthly Profit</span>
            <span className="metric-value">${Math.round(monthlyProfit).toLocaleString()}</span>
          </div>
          <div className="metric-card">
            <span className="metric-label">Profit Margin</span>
            <span className="metric-value">{profitMargin.toFixed(1)}%</span>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <div>
            <h4>Weekly Customer Pattern</h4>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={weekdayData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip formatter={(value) => Math.round(value)} />
                <Legend />
                <Bar dataKey="customers" fill="#8884d8" name="Customers" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div>
            <h4>Daily Revenue Flow</h4>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={hourlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="hour" />
                <YAxis />
                <Tooltip formatter={(value) => `$${Math.round(value)}`} />
                <Legend />
                <Line type="monotone" dataKey="revenue" stroke="#82ca9d" name="Revenue ($)" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </motion.div>

      <motion.div 
        className="card"
        style={{ marginTop: '20px' }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h3>Monthly Financial Breakdown</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <div>
            <h4>Revenue</h4>
            <div style={{ padding: '10px 0' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #eee' }}>
                <span>Daily Average</span>
                <strong>${Math.round(dailyRevenue).toLocaleString()}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #eee' }}>
                <span>Weekly Total</span>
                <strong>${Math.round(weeklyRevenue).toLocaleString()}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #eee' }}>
                <span>Monthly Total</span>
                <strong>${Math.round(monthlyRevenue).toLocaleString()}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0' }}>
                <span>Annual Projection</span>
                <strong>${Math.round(annualRevenue).toLocaleString()}</strong>
              </div>
            </div>
          </div>
          <div>
            <h4>Expenses</h4>
            <div style={{ padding: '10px 0' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #eee' }}>
                <span>Labor</span>
                <strong>${Math.round(monthlyLaborCost).toLocaleString()}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #eee' }}>
                <span>Cost of Goods Sold</span>
                <strong>${Math.round(monthlyCOGS).toLocaleString()}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #eee' }}>
                <span>Rent</span>
                <strong>${Math.round(monthlyRent).toLocaleString()}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #eee' }}>
                <span>Utilities & Other</span>
                <strong>${Math.round(monthlyUtilities + monthlyOther).toLocaleString()}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', background: 'rgba(0,0,0,0.05)' }}>
                <strong>Total Expenses</strong>
                <strong>${Math.round(totalMonthlyCosts).toLocaleString()}</strong>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div 
        className="card"
        style={{ marginTop: '20px', background: 'rgba(0, 123, 255, 0.05)' }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h3 style={{ color: '#0062cc' }}>AI Operational Insights</h3>
        <p>Based on your inputs and industry benchmarks:</p>
        <ul>
          <li>Your staff to customer ratio is {(operations.staffCount / dailyCustomers) < 0.05 ? 'efficient' : 'potentially high'} (industry avg: 1 staff per 25-30 customers)</li>
          <li>Your food cost percentage is {operations.foodCost > 30 ? 'above average' : 'competitive'} (specialty café benchmark: 25-30%)</li>
          <li>Labor costs represent {((monthlyLaborCost / monthlyRevenue) * 100).toFixed(1)}% of revenue (target: 30-35%)</li>
        </ul>
        <p style={{ fontWeight: 500, marginTop: '10px' }}>Optimization opportunity: {profitMargin < 15 ? 'Consider increasing average ticket price by 10-15% to improve margins' : 'Your operational model shows strong profit potential - focus on maintaining quality and customer satisfaction to ensure repeat business'}</p>
      </motion.div>
    </div>
  );
};

export default OperationsModule;
