import React, { useState } from 'react';
import ResearchForgotPassword from './ResearchForgotPassword';
import './App.css';

function ResearchLogin({ onGoBack, onLoginSuccess }) {
  const [username, setUsername] = useState('vietnk');
  const [password, setPassword] = useState('******');
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [resetNotification, setResetNotification] = useState('');

  const handleLogin = () => {
    // In a real app, this would validate the credentials
    if (username.trim() !== '' && password.trim() !== '') {
      onLoginSuccess();
    }
  };

  const handleForgotPasswordClick = (e) => {
    e.preventDefault();
    setShowForgotPassword(true);
  };

  const handleBackFromForgot = () => {
    setShowForgotPassword(false);
  };

  const handleResetSuccess = () => {
    setShowForgotPassword(false);
    setResetNotification('Password reset link has been sent to your email.');
    
    // Clear notification after 5 seconds
    setTimeout(() => {
      setResetNotification('');
    }, 1000);
  };

  if (showForgotPassword) {
    return <ResearchForgotPassword onGoBack={handleBackFromForgot} onSendSuccess={handleResetSuccess} />;
  }

  return (
    <div className="platform-container">
      <div className="platform-header">
        <span>Fund management iPlatform</span>
        <button className="close-btn" onClick={onGoBack}>✕</button>
      </div>
      
      <div className="research-department-header">
        <span>Research and development department</span>
      </div>
      
      <div className="login-container">
        <div className="login-box">
          <h2>Login</h2>
          <p className="login-subtitle">Sign in to continue</p>
          
          {resetNotification && (
            <div className="notification">
              {resetNotification}
            </div>
          )}
          
          <div className="login-form">
            <div className="form-group">
              <label htmlFor="username">USERNAME</label>
              <input 
                type="text" 
                id="username" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="password">PASSWORD</label>
              <input 
                type="password" 
                id="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            
            <div className="forgot-password">
              <span>Forgot password? </span>
              <a href="#" className="forgot-link" onClick={handleForgotPasswordClick}>Click here</a>
            </div>
            
            <div className="login-buttons">
              <button className="login-btn" onClick={handleLogin}>Login</button>
              <button className="go-back-btn" onClick={onGoBack}>Go Back</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResearchLogin; 