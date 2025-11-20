import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Login.css';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent default GET request

    try {
      const res = await fetch("http://localhost:8080/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        // save JWT to localStorage (or cookies)
        localStorage.setItem("token", data.token);       // JWT for API authentication
        localStorage.setItem("userInfo", JSON.stringify(data.user)); // store all info except password
        window.location.href = "/";            // redirect
      } else {
        alert("Error: " + data.error);
      }
    } catch (err) {
      console.error(err);
      alert("Network error");
    }
  };

  return (
    <div className="login-page-container">
      <div className="login-content-area">
        <div className="login-strip">
          <h2 className="login-title">Sign in.</h2>
          
          <div className="login-card">
            <form onSubmit={handleSubmit}>
              <label htmlFor="email">E-mail</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
              />

              <label htmlFor="password">Password</label>
              <input 
                type="password" 
                id="password" 
                name="password" 
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
              />
              <a href="/forgot-password" className="forgot-password-link">forgot?</a>

              <button type="submit" className="sign-in-button">Sign in</button>
            </form>
          </div>
          
          <Link to="/register" className="create-account-link">Create an account</Link>        
        </div>
      </div>
    </div>
  );
}

export default Login;
