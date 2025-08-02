import React from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';

const BBRAND = ({ userId }) => {
  const path = userId ? `/users/${userId}/bbrand` : '/bbrand';
  return (
    <Link to={path} className="profile-item">
      BBRAND
    </Link>
  );
};

export default BBRAND;
