import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios
import './Register.css';

function Register() {
  const [name, setName] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setcPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [numberError, setNumberError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [submissionError, setSubmissionError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return emailPattern.test(email) && email.endsWith('.com');
  };

  const validatePhoneNumber = (number) => {
    return /^\d{10}$/.test(number);
  };

  const validatePassword = (password) => {
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordPattern.test(password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address ending with .com");
      return;
    }
    setEmailError("");

    if (!validatePhoneNumber(number)) {
      setNumberError("Phone number must be exactly 10 digits");
      return;
    }
    setNumberError("");

    if (!validatePassword(password)) {
      setPasswordError("Password must start with a capital letter, include at least one number, and one special character");
      return;
    }
    setPasswordError("");

    if (password !== cpassword) {
      setPasswordError("Passwords do not match");
      return;
    }
    setPasswordError("");

    setIsSubmitting(true);
    setSubmissionError("");

    try {
      const response = await axios.post('http://localhost:5000/register', {
        name: name,
        lname: lname,
        email: email,
        number: number,
        password: password,
        cpassword: cpassword,
      });

      if (response.status === 201) {
        console.log('User registered:', response.data);
        navigate('/login');
      } else {
        setSubmissionError('Registration failed. Please try again.');
      }
    } catch (error) {
      setSubmissionError('There was an error connecting to the server.');
    }

    setIsSubmitting(false);
  };

  return (
    <div className="header-container">
      <form className="form" onSubmit={handleSubmit}>
        <h1 className="title">Register</h1>
        <div className="form-group">
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="First Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            id="lname"
            name="lname"
            placeholder="Last Name"
            value={lname}
            onChange={(e) => setLname(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {emailError && <p className="error-message">{emailError}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="number">Phone Number</label>
          <input
            type="tel"
            id="number"
            name="number"
            placeholder="Phone Number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            required
          />
          {numberError && <p className="error-message">{numberError}</p>}
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
        <div className="form-group">
          <label htmlFor="cpassword">Confirm Password</label>
          <input
            type="password"
            id="cpassword"
            name="cpassword"
            placeholder="Confirm Password"
            value={cpassword}
            onChange={(e) => setcPassword(e.target.value)}
            required
          />
        </div>
        {passwordError && <p className="error-message">{passwordError}</p>}

        {submissionError && <p className="error-message">{submissionError}</p>}

        <button type="submit" name="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
      <footer className="footer">
        <p>TVH website @2024 Hackathon</p>
      </footer>
    </div>
  );
}

export default Register;
