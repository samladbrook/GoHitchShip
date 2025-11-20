import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Register.css';

const Register = () => {
  // Store form values
  const [name, setName] = useState("");
  const [business, setBusiness] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const body = {
      name,
      business,
      email,
      password
    };

    try {
      const res = await fetch("http://localhost:8080/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const data = await res.json();
      console.log("Response:", data);

      if (res.ok) {
        alert("Account created successfully!");
      } else {
        alert("Error: " + data.error);
      }

    } catch (err) {
      console.error(err);
      alert("Network error");
    }
  };

  return (
    <div className="register-page-container">
      <div className="register-content-area">

        <div className="register-card">
          <h2 className="card-header">Create Your Account</h2>

          <form onSubmit={handleSubmit}>

            <label htmlFor="name">Name</label>
            <input 
              type="text"
              id="name"
              placeholder="Enter your full name (Optional)"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <label htmlFor="business">Business Name</label>
            <input 
              type="text"
              id="business"
              placeholder="Enter your business name (Optional)"
              value={business}
              onChange={(e) => setBusiness(e.target.value)}
            />

            <label htmlFor="email">Email Address *</label>
            <input 
              type="email"
              id="email"
              placeholder="Enter your email address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="password">Password *</label>
            <input 
              type="password"
              id="password"
              placeholder="Create a password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="required-note">* Required fields</div>

            <button type="submit" className="sign-up-button">
              Sign Up
            </button>
          </form>
        </div>

        <div className="register-strip">
          <h1 className="register-title">Sign up.</h1>
          <Link to="/login">
            <button className="login-account-link">
              Already have an account? Sign in.
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Register;
