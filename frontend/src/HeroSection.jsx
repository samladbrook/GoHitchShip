import React from 'react';
// Assume your mesh image is located in the same directory for simplicity
import MeshImage from './assets/mesh-background.png'; 
import './styles/HeroSection.css';

function HeroSection() {
  return (
    <div className="hero-container">
      {/* 1. The Background Layer (Mesh PNG) */}
      <div className="mesh-background">
        <img 
          src={MeshImage} 
          alt="Abstract network mesh background" 
        />
      </div>

      {/* 2. The Main Content Layer - Positioned absolutely via CSS */}
      <div className="hero-content">
        <p className="greeting">Welcome!</p>
        <h1 className="headline">Browse the latest jobs or add your own!</h1>
        <button className="browse-btn">Browse Jobs</button>
      </div>
    </div>
  );
}

export default HeroSection;