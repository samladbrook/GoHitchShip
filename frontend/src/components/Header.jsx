import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import useAuth from '../hooks/useAuth';
import '../styles/Header.css';

const Header = () => {
  const { user, setUser } = useAuth(); // make sure setUser exists
  const navigate = useNavigate();

  const handleLogout = () => {
    try {
      // Clear frontend auth (stateless JWT)
      console.log("trying to log out");
      localStorage.removeItem("token");
      localStorage.removeItem("userInfo");
      setUser(null);             // update hook state
      navigate("/");        // redirect
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

  return (
    <header className="main-header">
      <Link to="/" className="header-logo">HitchShip</Link>

      <div className="nav-group">
        <Link to="/jobs" className="nav-link">Jobs</Link>
        <Link to="/about" className="nav-link">About</Link>

        {user ? (
          <button className="sign-in-btn" onClick={handleLogout}>
            Sign Out
          </button>
        ) : (
          <Link to="/login">
            <button className="sign-in-btn">Sign In</button>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
