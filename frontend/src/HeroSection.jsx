import React, { useEffect, useState } from 'react';
import MeshImage from './assets/mesh-background.png';
import './styles/HeroSection.css';
import useAuth from "./hooks/useAuth";

function HeroSection() {
    const { user } = useAuth();

  return (
    <div className="hero-container">
      <div className="mesh-background">
        <img src={MeshImage} alt="Abstract network mesh background" />
      </div>
      <div className="hero-content">
        <p className="greeting">Welcome {user?.name || ""}!</p>
        <h1 className="headline">Browse the latest jobs or add your own!</h1>
        <button className="browse-btn">Browse Jobs</button>
      </div>
    </div>
  );
}

export default HeroSection;
