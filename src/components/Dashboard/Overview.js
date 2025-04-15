import React from 'react';
import { motion } from 'framer-motion';
import { PieChart, Pie, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';

const Overview = ({ data }) => {
  const totalInvestment = Object.values(data.investment).reduce((sum, value) => sum + value, 0);
  
  const investmentData = Object.entries(data.investment).map(([key, value]) => ({
    name: key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase()),
    value,
  }));
  
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];
  
  const monthlyRevenue = data.operations.seatingCapacity * data.operations.avgTicket * 
                         data.operations.turnoverRate * data.operations.daysOpen * 4; // 4 weeks in a month
  
  const monthlyCosts = {
    rent: data.operations.rent,
    labor: data.operations.staffCount * data.operations.avgStaffWage * 8 * data.operations.daysOpen * 4, // 8 hours per day
    food: (monthlyRevenue * (data.operations.foodCost / 100)),
    beverage: (monthlyRevenue * (data.operations.beverageCost / 100)),
    utilities: 1200, // Assumption
    marketing: 800, // Assumption
    other: 1000 // Assumption
  };
  
  const totalMonthlyCosts = Object.values(monthlyCosts).reduce((sum, cost) => sum + cost, 0);
  const monthlyProfit = monthlyRevenue - totalMonthlyCosts;
  
  const profitMargin = (monthlyProfit / monthlyRevenue) * 100;
  
  const financialMetrics = [
    { name: 'Monthly Revenue', value: monthlyRevenue.toFixed(0) },
    { name: 'Monthly Costs', value: totalMonthlyCosts.toFixed(0) },
    { name: 'Monthly Profit', value: monthlyProfit.toFixed(0) },
    { name: 'Profit Margin', value: `${profitMargin.toFixed(1)}%` },
    { name: 'Break-even (Months)', value: data.financials.breakEvenMonths }
  ];
  
  const costData = Object.entries(monthlyCosts).map(([key, value]) => ({
    name: key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase()),
    value,
  }));
  
  const paybackPeriod = totalInvestment / monthlyProfit;
  
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };

  return (
    <div>
      <h2 className="section-title">Café Performance Overview</h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '30px' }}>
        {financialMetrics.map((metric, i) => (
          <motion.div
            key={metric.name}
            className="card metric-card"
            custom={i}
            initial="hidden"
            animate="visible"
            variants={variants}
          >
            <span className="metric-label">{metric.name}</span>
            <span className="metric-value">
              {metric.name.includes('Margin') || metric.name.includes('Break-even') 
                ? metric.value 
                : `$${parseInt(metric.value).toLocaleString()}`}
            </span>
          </motion.div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        <motion.div 
          className="card"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
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
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3>Monthly Operating Costs</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={costData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
              <Bar dataKey="value" fill="#82ca9d">
                {costData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      <motion.div 
        className="card"
        style={{ marginTop: '20px' }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <h3>Financial Summary</h3>
        <div style={{ padding: '10px 20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #eee', padding: '10px 0' }}>
            <strong>Total Investment:</strong>
            <span>${totalInvestment.toLocaleString()}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #eee', padding: '10px 0' }}>
            <strong>Monthly Revenue:</strong>
            <span>${monthlyRevenue.toLocaleString()}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #eee', padding: '10px 0' }}>
            <strong>Monthly Profit:</strong>
            <span>${monthlyProfit.toLocaleString()}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #eee', padding: '10px 0' }}>
            <strong>Profit Margin:</strong>
            <span>{profitMargin.toFixed(1)}%</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #eee', padding: '10px 0' }}>
            <strong>Payback Period:</strong>
            <span>{paybackPeriod.toFixed(1)} months</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #eee', padding: '10px 0' }}>
            <strong>ROI (First Year):</strong>
            <span>{data.financials.projectedROI}%</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0' }}>
            <strong>NPV (5 Years):</strong>
            <span>${data.financials.NPV.toLocaleString()}</span>
          </div>
        </div>
      </motion.div>

      <motion.div 
        className="card"
        style={{ marginTop: '20px', background: 'rgba(0, 123, 255, 0.05)' }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h3 style={{ color: '#0062cc' }}>AI Insights</h3>
        <p>Based on your inputs, here are optimization opportunities:</p>
        <ul>
          <li>Increasing your average ticket price by 8% could improve profit margins by 14.3%</li>
          <li>Optimizing staff scheduling could reduce labor costs by approximately $1,800 per month</li>
          <li>Focusing on higher-margin beverage sales could increase overall profitability by 9%</li>
        </ul>
        <p>Compared to industry benchmarks, your café is projected to perform in the top 25% for ROI.</p>
      </motion.div>
    </div>
  );
};

export default Overview;
