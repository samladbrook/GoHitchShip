import React from 'react';
import { Link } from "react-router-dom";   // ✅ Add this
import '../styles/Header.css';

const Header = () => {
    return (
        <header className="main-header">
            {/* 1. Logo/Home Button (Top Left) */}
            <Link to="/" className="header-logo">
                HitchShip
            </Link>
            
            {/* 2. Navigation Group (Top Right) */}
            <div className="nav-group">

                {/* Navigation Links */}
                <Link to="/jobs" className="nav-link">Jobs</Link>
                <Link to="/about" className="nav-link">About</Link>

                {/* Sign In Button → now uses React Router */}
                <Link to="/login">
                    <button className="sign-in-btn">
                        Sign In
                    </button>
                </Link>
            </div>
        </header>
    );
};

export default Header;
