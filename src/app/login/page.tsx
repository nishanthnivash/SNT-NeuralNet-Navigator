import React from 'react';
import './LoginPage.css';

const LoginPage: React.FC = () => {
  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login</h2>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              required
            />
          </div>
          <button  className="login-btn">
            Login
          </button>

      </div>
    </div>
  );
};

export default LoginPage;