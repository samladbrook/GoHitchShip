// Login.jsx
import React from 'react';
import './Login.css'; // Import the CSS file for styling

function Login() {
  return (
    <div className="login-page-container">
      {/* The main content area where your forms and header will live */}
      <div className="login-content-area">
        {/* This div will create the green strip on the right */}
        <div className="login-strip">
          <h2 className="login-title">Sign in.</h2>
          
          {/* The white card containing the login form */}
          <div className="login-card">
            <form>
              <label htmlFor="email">E-mail</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="you@example.com" // Example placeholder
                required 
              />

              <label htmlFor="password">Password</label>
              <input 
                type="password" 
                id="password" 
                name="password" 
                placeholder="••••••••" // Example placeholder
                required 
              />
              <a href="/forgot-password" className="forgot-password-link">forgot?</a>

              <button type="submit" className="sign-in-button">Sign in</button>
            </form>
          </div>
          
          <a href="/create-account" className="create-account-link">Create an account</a>
        </div>
      </div>
    </div>
  );
}

export default Login;