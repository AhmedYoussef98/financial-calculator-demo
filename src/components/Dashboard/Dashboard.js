import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Dashboard as DashboardIcon,
  Settings as SettingsIcon,
  MonetizationOn as MonetizationOnIcon,
  StorefrontOutlined as StorefrontIcon,
  BarChart as BarChartIcon,
  PieChart as PieChartIcon
} from '@mui/icons-material';
import Overview from './Overview';
import SetupModule from '../Setup/SetupModule';
import InvestmentModule from '../Investment/InvestmentModule';
import OperationsModule from '../Operations/OperationsModule';
import FinancialsModule from '../Financials/FinancialsModule';

const Dashboard = (props) => {
  const [activeModule, setActiveModule] = useState('overview');
  const [cafeData, setCafeData] = useState({
    name: 'My Dream Café',
    type: 'specialty',
    investment: {
      equipment: 25000,
      renovation: 30000,
      permits: 5000,
      initialInventory: 8000,
      workingCapital: 20000
    },
    operations: {
      seatingCapacity: 30,
      avgTicket: 12.5,
      turnoverRate: 4,
      hoursOpen: 12,
      daysOpen: 7,
      staffCount: 4,
      avgStaffWage: 15,
      foodCost: 28,
      beverageCost: 22,
      rent: 3500
    },
    financials: {
      breakEvenMonths: 14,
      projectedROI: 32,
      NPV: 180000,
      IRR: 28
    }
  });

  const updateCafeData = (section, data) => {
    setCafeData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        ...data
      }
    }));
  };

  const renderModule = () => {
    switch (activeModule) {
      case 'overview':
        return <Overview data={cafeData} />;
      case 'setup':
        return <SetupModule data={cafeData} updateData={(data) => updateCafeData('type', data)} />;
      case 'investment':
        return <InvestmentModule data={cafeData.investment} updateData={(data) => updateCafeData('investment', data)} />;
      case 'operations':
        return <OperationsModule data={cafeData.operations} updateData={(data) => updateCafeData('operations', data)} />;
      case 'financials':
        return <FinancialsModule data={cafeData} />;
      default:
        return <Overview data={cafeData} />;
    }
  };

  const navItems = [
    { id: 'overview', label: 'Dashboard', icon: <DashboardIcon /> },
    { id: 'setup', label: 'Café Setup', icon: <SettingsIcon /> },
    { id: 'investment', label: 'Investment', icon: <MonetizationOnIcon /> },
    { id: 'operations', label: 'Operations', icon: <StorefrontIcon /> },
    { id: 'financials', label: 'Financials', icon: <BarChartIcon /> }
  ];

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
  <motion.div 
    className="header-left"
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
  >
    <button 
      className="back-button" 
      onClick={props.onBackClick}
    >
      ← Back to Home
    </button>
    <h1>CaféCalc Pro: {cafeData.name}</h1>
  </motion.div>
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
  >
    <button className="btn btn-primary">Generate Report</button>
  </motion.div>
</div>
      
      <div className="dashboard-content">
        <motion.div 
          className="sidebar"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <nav>
            {navItems.map((item) => (
              <motion.div
                key={item.id}
                className={`nav-item ${activeModule === item.id ? 'active' : ''}`}
                onClick={() => setActiveModule(item.id)}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: 'rgba(0, 123, 255, 0.1)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                {item.icon}
                {item.label}
              </motion.div>
            ))}
          </nav>
          
          <motion.div 
            className="card"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <h3>Project Health</h3>
            <div style={{ 
              height: '20px', 
              background: 'linear-gradient(to right, #ff7675, #fdcb6e, #00b894)', 
              borderRadius: '10px',
              position: 'relative'
            }}>
              <div style={{ 
                position: 'absolute',
                top: '-15px',
                left: `${cafeData.financials.projectedROI}%`,
                transform: 'translateX(-50%)'
              }}>
                <PieChartIcon />
              </div>
            </div>
            <p>ROI: {cafeData.financials.projectedROI}%</p>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="main-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {renderModule()}
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
