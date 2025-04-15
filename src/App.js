import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import EnhancedLandingPage from './components/Landing/EnhancedLandingPage';
import IntroAnimation from './components/Animations/IntroAnimation';

function App() {
  const [loading, setLoading] = useState(true);
  const [showDashboard, setShowDashboard] = useState(false);

  useEffect(() => {
    // Simulate loading time for the intro animation
    const timer = setTimeout(() => setLoading(false), 3500); // Extended for the owl animation
    return () => clearTimeout(timer);
  }, []);

  const handleDemoClick = () => {
    setShowDashboard(true);
  };

  return (
    <div className="app">
      {loading ? (
        <IntroAnimation />
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {showDashboard ? (
            <Dashboard />
          ) : (
            <EnhancedLandingPage onDemoClick={handleDemoClick} />
          )}
        </motion.div>
      )}
    </div>
  );
}

export default App;
