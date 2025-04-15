import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import './animations.css';

const IntroAnimation = () => {
  const owlRef = useRef(null);
  const eyesRef = useRef(null);
  const numbersRef = useRef(null);
  const logoRef = useRef(null);
  const taglineRef = useRef(null);

  useEffect(() => {
    // Animation timeline
    const tl = gsap.timeline();
    
    // Calculator to owl morphing animation
    tl.to(owlRef.current, { 
      duration: 1, 
      opacity: 1,
      scale: 1,
      ease: "power2.out"
    })
    
    // Eyes brightening and transforming
    .to(eyesRef.current, { 
      duration: 0.5, 
      opacity: 1,
      scale: 1.2,
      backgroundColor: '#FFD700',
      borderRadius: '50%',
      ease: "power2.out"
    })
    
    // Numbers flowing
    .to(numbersRef.current, { 
      duration: 0.8, 
      opacity: 1,
      y: 0,
      stagger: 0.05,
      ease: "back.out(1.7)"
    })
    
    // Logo formation
    .to(logoRef.current, { 
      duration: 0.7, 
      opacity: 1,
      scale: 1,
      ease: "elastic.out(1, 0.8)"
    })
    
    // Tagline appearance
    .to(taglineRef.current, { 
      duration: 0.5, 
      opacity: 1,
      y: 0,
      ease: "power2.out"
    });
    
  }, []);

  return (
    <div className="intro-animation-container">
      <div className="animation-content">
        <div className="owl-calculator" ref={owlRef}>
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="calculator-body" d="M30 20H90C95.5228 20 100 24.4772 100 30V90C100 95.5228 95.5228 100 90 100H30C24.4772 100 20 95.5228 20 90V30C20 24.4772 24.4772 20 30 20Z" stroke="#FFFFFF" strokeWidth="3"/>
            <circle className="owl-eye left" ref={eyesRef} cx="45" cy="45" r="10" fill="#3057B9"/>
            <circle className="owl-eye right" ref={eyesRef} cx="75" cy="45" r="10" fill="#3057B9"/>
            <path className="owl-beak" d="M55 60H65L60 70Z" fill="#FFD700"/>
            <path className="owl-wing left" d="M25 50C25 50 15 65 25 80" stroke="#FFFFFF" strokeWidth="2"/>
            <path className="owl-wing right" d="M95 50C95 50 105 65 95 80" stroke="#FFFFFF" strokeWidth="2"/>
          </svg>
        </div>
        
        <div className="flowing-numbers" ref={numbersRef}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num, index) => (
            <span key={index} className="number" style={{left: `${index * 10}%`}}>
              {num}
            </span>
          ))}
        </div>
        
        <div className="logo-container" ref={logoRef}>
          <h1>Wise<span>Calculator</span></h1>
        </div>
        
        <div className="tagline-container" ref={taglineRef}>
          <p>Calculate Wisely, Succeed Greatly</p>
        </div>
      </div>
    </div>
  );
};

export default IntroAnimation;
