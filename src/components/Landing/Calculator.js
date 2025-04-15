import React, { useState, useEffect } from 'react';
import { PieChart, Pie, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell, ResponsiveContainer } from 'recharts';

const Calculator = () => {
  const [businessType, setBusinessType] = useState('cafe');
  const [investment, setInvestment] = useState(100000);
  const [monthlyRevenue, setMonthlyRevenue] = useState(30000);
  const [operatingCosts, setOperatingCosts] = useState(18000);
  const [results, setResults] = useState(null);
  
  const businessTypes = [
    { id: 'cafe', name: 'Café / Restaurant' },
    { id: 'retail', name: 'Retail Store' },
    { id: 'service', name: 'Service Business' },
    { id: 'manufacturing', name: 'Small Manufacturing' },
  ];

  // Define calculateResults outside useEffect so we can use it in dependency array
  const calculateResults = () => {
    // Monthly profit
    const monthlyProfit = monthlyRevenue - operatingCosts;
    
    // Annual profit
    const annualProfit = monthlyProfit * 12;
    
    // ROI (Return on Investment)
    const roi = (annualProfit / investment) * 100;
    
    // Payback period (in months)
    const paybackPeriod = investment / monthlyProfit;
    
    // Business type specific multipliers
    let riskFactor = 1.0;
    let growthPotential = 5;
    
    switch (businessType) {
      case 'cafe':
        riskFactor = 1.2;
        growthPotential = 4;
        break;
      case 'retail':
        riskFactor = 1.1;
        growthPotential = 6;
        break;
      case 'service':
        riskFactor = 0.9;
        growthPotential = 8;
        break;
      case 'manufacturing':
        riskFactor = 1.3;
        growthPotential = 7;
        break;
      default:
        break;
    }
    
    // Adjusted ROI based on risk
    const adjustedRoi = roi / riskFactor;
    
    // 5-year projection with growth
    const fiveYearProjection = [];
    let yearlyRevenue = monthlyRevenue * 12;
    let yearlyCosts = operatingCosts * 12;
    
    for (let year = 1; year <= 5; year++) {
      yearlyRevenue *= (1 + growthPotential / 100);
      yearlyCosts *= (1 + (growthPotential / 2) / 100);
      
      fiveYearProjection.push({
        year,
        revenue: yearlyRevenue,
        costs: yearlyCosts,
        profit: yearlyRevenue - yearlyCosts
      });
    }
    
    setResults({
      monthlyProfit,
      annualProfit,
      roi,
      adjustedRoi,
      paybackPeriod,
      fiveYearProjection
    });
  };

  useEffect(() => {
    calculateResults();
  }, [investment, monthlyRevenue, operatingCosts, businessType]); // Now we're including all dependencies

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

  return (
    <div className="calculator-container">
      <div className="calculator-inputs">
        <div className="input-section">
          <h3>Business Information</h3>
          
          <div className="input-field">
            <label>Business Type</label>
            <div className="business-type-selector">
              {businessTypes.map(type => (
                <button 
                  key={type.id}
                  className={`type-button ${businessType === type.id ? 'active' : ''}`}
                  onClick={() => setBusinessType(type.id)}
                >
                  {type.name}
                </button>
              ))}
            </div>
          </div>

          <div className="input-field">
            <label>Initial Investment</label>
            <div className="slider-container">
              <input 
                type="range" 
                min="10000" 
                max="1000000" 
                step="10000" 
                value={investment}
                onChange={(e) => setInvestment(Number(e.target.value))}
              />
              <span className="slider-value">{formatCurrency(investment)}</span>
            </div>
          </div>
          
          <div className="input-field">
            <label>Monthly Revenue</label>
            <div className="slider-container">
              <input 
                type="range" 
                min="5000" 
                max="200000" 
                step="1000" 
                value={monthlyRevenue}
                onChange={(e) => setMonthlyRevenue(Number(e.target.value))}
              />
              <span className="slider-value">{formatCurrency(monthlyRevenue)}</span>
            </div>
          </div>
          
          <div className="input-field">
            <label>Monthly Operating Costs</label>
            <div className="slider-container">
              <input 
                type="range" 
                min="1000" 
                max="150000" 
                step="1000" 
                value={operatingCosts}
                onChange={(e) => setOperatingCosts(Number(e.target.value))}
              />
              <span className="slider-value">{formatCurrency(operatingCosts)}</span>
            </div>
          </div>
        </div>
      </div>
      
      {results && (
        <div className="calculator-results">
          <div className="results-header">
            <h3>Financial Projections</h3>
            <p>Based on your inputs, here's how your business could perform:</p>
          </div>
          
          <div className="key-metrics">
            <div className="metric-card">
              <h4>Monthly Profit</h4>
              <p className="metric-value">{formatCurrency(results.monthlyProfit)}</p>
            </div>
            <div className="metric-card">
              <h4>Annual Return</h4>
              <p className="metric-value">{formatCurrency(results.annualProfit)}</p>
            </div>
            <div className="metric-card">
              <h4>ROI</h4>
              <p className="metric-value">{results.roi.toFixed(1)}%</p>
            </div>
            <div className="metric-card">
              <h4>Payback Period</h4>
              <p className="metric-value">{results.paybackPeriod.toFixed(1)} months</p>
            </div>
          </div>
          
          <div className="visualization-row">
            <div className="chart-container">
              <h4>5-Year Profit Projection</h4>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={results.fiveYearProjection}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" label={{ value: 'Year', position: 'insideBottom', offset: -5 }} />
                  <YAxis tickFormatter={(value) => formatCurrency(value).replace('$', '')} />
                  <Tooltip formatter={(value) => formatCurrency(value)} />
                  <Bar dataKey="profit" fill="#0088FE" name="Annual Profit" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            
            <div className="chart-container">
              <h4>Monthly Breakdown</h4>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={[
                      { name: 'Profit', value: results.monthlyProfit },
                      { name: 'Operating Costs', value: operatingCosts }
                    ]}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  >
                    {[
                      { name: 'Profit', value: results.monthlyProfit },
                      { name: 'Operating Costs', value: operatingCosts }
                    ].map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => formatCurrency(value)} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          <div className="insight-box">
            <h4>AI Insights</h4>
            <p>
              {results.roi > 25 
                ? `This ${businessTypes.find(t => t.id === businessType).name.toLowerCase()} shows excellent potential with a ${results.roi.toFixed(1)}% ROI. Consider scaling operations after the initial ${results.paybackPeriod.toFixed(1)} month payback period.` 
                : results.roi > 15
                  ? `This ${businessTypes.find(t => t.id === businessType).name.toLowerCase()} shows good potential with a ${results.roi.toFixed(1)}% ROI. Focus on operational efficiencies to increase margins.`
                  : `This ${businessTypes.find(t => t.id === businessType).name.toLowerCase()} shows moderate potential with a ${results.roi.toFixed(1)}% ROI. Consider ways to increase revenue or reduce costs to improve profitability.`
              }
            </p>
            <p>
              Want a more detailed analysis? <a href="#contact">Contact us</a> for a custom feasibility study.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Calculator;
