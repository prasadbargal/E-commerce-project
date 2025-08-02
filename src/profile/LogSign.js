import React, { useState } from 'react';
import './LogSign.css'; // Use this file for additional styling

const LogSign = () => {
  const [isLogin, setIsLogin] = useState(true); // State to toggle between login and signup

  const handleToggle = () => {
    setIsLogin(!isLogin); // Toggle the login/signup state
  };

  return (
    <div className={`container ${isLogin ? 'login' : 'signup'}`}>
      <div className="form-container">
        <h1>{isLogin ? 'Welcome' : 'Create Account'}</h1>
        <form>
          {!isLogin && <input type="text" placeholder="FULL NAME" required />}
          <input type="email" placeholder="EMAIL" required />
          <input type="password" placeholder="PASSWORD" required />
          {isLogin && <a href="/forgot-password">Forgot password?</a>}
          <button type="submit" className="submit">{isLogin ? 'SIGN IN' : 'SIGN UP'}</button>
        </form>
        <p>
          {isLogin ? (
            <>
              Don't have an account? <span className="toggle" onClick={handleToggle}>Please Sign up!</span>
            </>
          ) : (
            <>
              Already have an account? <span className="toggle" onClick={handleToggle}>Sign In</span>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default LogSign;
