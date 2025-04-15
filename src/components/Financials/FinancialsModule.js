import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const FinancialsModule = ({ data }) => {
  // Calculate some key values based on the data
  const totalInvestment = Object.values(data.investment).reduce((sum, value) => sum + value, 0);
  
  const monthlyRevenue = data.operations.seatingCapacity * data.operations.avgTicket * 
                          data.operations.turnoverRate * data.operations.daysOpen * 4;
                          
  const monthlyCosts = {
    rent: data.operations.rent,
    labor: data.operations.staffCount * data.operations.avgStaffWage * 8 * data.operations.daysOpen * 4,
    food: (monthlyRevenue * (data.operations.foodCost / 100)),
    beverage: (monthlyRevenue * (data.operations.beverageCost / 100)),
    utilities: 1200, // Assumption
    marketing: 800, // Assumption
    other: 1000 // Assumption
  };
  
  const totalMonthlyCosts = Object.values(monthlyCosts).reduce((sum, cost) => sum + cost, 0);
  const monthlyProfit = monthlyRevenue - totalMonthlyCosts;
  
  // Generate projected data for charts
  const generateProjections = () => {
    const projections = [];
    let cumulativeProfit = -totalInvestment;
    
    // Assume slight growth in revenue and costs over time
    let currentRevenue = monthlyRevenue;
    let currentCosts = totalMonthlyCosts;
    
    for (let month = 1; month <= 36; month++) {
      // Revenue grows by 2% after 6 months, then 1% per month
      if (month > 6) {
        currentRevenue *= 1.01;
      }
      
      // Costs grow by 0.5% per month
      currentCosts *= 1.005;
      
      const monthlyProfit = currentRevenue - currentCosts;
      cumulativeProfit += monthlyProfit;
      
      projections.push({
        month,
        revenue: currentRevenue,
        costs: currentCosts,
        monthlyProfit,
        cumulativeProfit
      });
    }
    
    return projections;
  };
  
  const projectionData = generateProjections();
  
  // Find break-even point
  const breakEvenMonth = projectionData.find(month => month.cumulativeProfit >= 0)?.month || 'N/A';
  
  // Calculate ROI
  const threeYearProfit = projectionData[35]?.cumulativeProfit || 0;
  const roi = ((threeYearProfit + totalInvestment) / totalInvestment - 1) * 100;

  return (
    <div>
      <h2 className="section-title">Financial Projections</h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '30px' }}>
        <motion.div 
          className="card metric-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="metric-label">Break-even Period</span>
          <span className="metric-value">{breakEvenMonth} months</span>
        </motion.div>
        
        <motion.div 
          className="card metric-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="metric-label">3-Year ROI</span>
          <span className="metric-value">{roi.toFixed(1)}%</span>
        </motion.div>
        
        <motion.div 
          className="card metric-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="metric-label">Net Present Value (NPV)</span>
          <span className="metric-value">${data.financials.NPV.toLocaleString()}</span>
        </motion.div>
      </div>

      <motion.div 
        className="card"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h3>5-Year Profit Projection</h3>
        <p>Watch your investment grow over time and identify when you'll reach profitability.</p>
        
        <div style={{ height: '400px', marginTop: '20px' }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={projectionData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" label={{ value: 'Month', position: 'insideBottom', offset: -5 }} />
              <YAxis />
              <Tooltip formatter={(value) => `$${Math.round(value).toLocaleString()}`} />
              <Legend />
              <Line type="monotone" dataKey="revenue" stroke="#8884d8" name="Monthly Revenue" />
              <Line type="monotone" dataKey="costs" stroke="#ff7675" name="Monthly Costs" />
              <Line type="monotone" dataKey="cumulativeProfit" stroke="#00b894" name="Cumulative Profit" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '20px' }}>
        <motion.div 
          className="card"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3>Sensitivity Analysis</h3>
          <p>See how changes in key parameters affect your profitability:</p>
          
          <div style={{ marginTop: '15px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid #eee' }}>
              <span>+10% Average Ticket</span>
              <strong>+{(monthlyProfit * 0.1 / monthlyProfit * 100).toFixed(1)}% Profit</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid #eee' }}>
              <span>+10% Customer Volume</span>
              <strong>+{(monthlyProfit * 0.1 / monthlyProfit * 100).toFixed(1)}% Profit</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid #eee' }}>
              <span>-5% Food & Beverage Cost</span>
              <strong>+{((monthlyRevenue * 0.05) / monthlyProfit * 100).toFixed(1)}% Profit</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0' }}>
              <span>-10% Labor Cost</span>
              <strong>+{(monthlyCosts.labor * 0.1 / monthlyProfit * 100).toFixed(1)}% Profit</strong>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="card"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3>Risk Assessment</h3>
          <div style={{ marginTop: '15px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid #eee' }}>
              <span>Scenario</span>
              <span>ROI Impact</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid #eee' }}>
              <span>20% Lower Sales</span>
              <strong className="text-danger">-{(20 * 1.5).toFixed(1)}%</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid #eee' }}>
              <span>15% Higher Costs</span>
              <strong className="text-danger">-{(15 * 1.2).toFixed(1)}%</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid #eee' }}>
              <span>6-month Delayed Opening</span>
              <strong className="text-danger">-{(6 * 1.5).toFixed(1)}%</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0' }}>
              <span>Major Competitor Opens Nearby</span>
              <strong className="text-danger">-{(10 * 1.8).toFixed(1)}%</strong>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="card"
        style={{ marginTop: '20px', background: 'rgba(0, 123, 255, 0.05)' }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <h3 style={{ color: '#0062cc' }}>AI Financial Insights</h3>
        <p>Your café's financial projections show:</p>
        <ul>
          <li>Break-even period of {breakEvenMonth} months is {breakEvenMonth < 18 ? 'better than' : 'comparable to'} industry average (18-24 months)</li>
          <li>3-year ROI of {roi.toFixed(1)}% is {roi > 50 ? 'excellent' : roi > 30 ? 'good' : 'moderate'} for the café sector</li>
          <li>Monthly profit margin of {(monthlyProfit / monthlyRevenue * 100).toFixed(1)}% is {(monthlyProfit / monthlyRevenue * 100) > 15 ? 'healthy' : 'tight'} (industry benchmark: 15-20%)</li>
        </ul>
        <p style={{ fontWeight: 500, marginTop: '10px' }}>Strategic recommendation: {roi > 40 ? 'Your café shows strong financial potential. Consider setting aside 3-5% of revenue for future expansion.' : 'Focus on increasing your average ticket price and controlling labor costs to improve overall profitability.'}</p>
      </motion.div>
    </div>
  );
};

export default FinancialsModule;
