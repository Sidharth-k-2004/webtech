import React from 'react';
import { Link } from 'react-router-dom';
import './Loginpage.css';

function LoginPage() {
  return (
    <div className="container">
      <h2>Login</h2>
      <form action="login_process.php" method="POST">
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <div className="form-group">
          <button id="open_profile_page" type="submit">
            Login
          </button>
        </div>
      </form>
      <div className="signup">
        <p>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage  
