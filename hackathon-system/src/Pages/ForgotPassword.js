import React from 'react';
import './ForgotPassword.css';

function ForgotPassword() {
  return (
    <div className="forgot-password-container">
      <form className="forgot-password-form">
        <h1>Forgot your password?</h1>
        <p>Please add email address to get a link to create new password</p>
        <input type="email" id="email" name="email" placeholder='Your email address' />
        <button type="submit" name="forgot-submit" id="forgot-submit">Submit</button>
      </form>
    </div>
  );
}

export default ForgotPassword;