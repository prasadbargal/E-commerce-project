import React from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';

const Welcome = () => {
  return (
    <div className="profile-welcome">
      <strong>Welcome</strong>
      <p>To access account and manage orders</p>
      <Link to="/login" className="login-signup-button">
        LOGIN / SIGNUP
      </Link>
    </div>
  );
};

export default Welcome;
