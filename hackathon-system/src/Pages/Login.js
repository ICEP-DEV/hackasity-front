import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Mock login validation (replace this with actual validation or API call)
    if (email === "admin@example.com" && password === "password" && role) {
      if (role === "Admin") {
        navigate('/dashboard');  // Navigate to Admin dashboard
      } else if (role === "Judge") {
        navigate('/judge');  // Navigate to Judge page
      }
    } else {
      alert("Invalid credentials or role selection. Please try again.");
    }
  };

  return (
    <div className="header-container">
      <form className="form" onSubmit={handleLogin}>
        <h1 className="title">Login</h1>

        <div className="radiobtn">
          <label>
            <input 
              type="radio" 
              name="role" 
              value="Admin" 
              onChange={(e) => setRole(e.target.value)} 
              required
            />
            Admin
          </label>
          <label>
            <input 
              type="radio" 
              name="role" 
              value="Judge" 
              onChange={(e) => setRole(e.target.value)} 
              required
            />
            Judge
          </label>
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input 
            type="text" 
            id="email" 
            name="email" 
            placeholder="Email address" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="form-footer">
          <NavLink to="/forgotpassword" className="forgot-password-link">Forgot Password?</NavLink>
        </div>

        <button type="submit" id="submit" name="submit">Login</button>
      </form>

      <footer className="footer">
        <p>TVH website @2024 Hackathon</p>
      </footer>
    </div>
  );
}

export default Login;
