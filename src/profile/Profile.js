import React, { useState, useRef, useEffect } from 'react';
import './Profile.css';
import { FaUser } from 'react-icons/fa';
import SavedCards from './SavedCards';
import { Link, useNavigate } from 'react-router-dom';

const Profile = ({ userId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate(); // ✅ Import navigate hook

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="profile-container" ref={dropdownRef}>
      <button className="profile-icon-button" onClick={toggleDropdown} aria-label="Profile">
        <FaUser size={32} />
      </button>

      {isOpen && !isLoggedIn && (
        <div className="profile-dropdown">
          <p className="welcome-message">Welcome</p>
          <p className="welcome-submessage">To access account and manage orders</p>
          {/* ✅ Updated button to use navigate */}
          <button className="login-signup-button" onClick={() => navigate('/LogSign')}>
            LOGIN / SIGNUP
          </button>

          <ul className="profile-dropdown-list">
            <li><Link to="/orders" className="dropdown-link">Orders</Link></li>
            <li><Link to="/wishlist" className="dropdown-link">Wishlist</Link></li>
            {/* <li><Link to="/giftcards" className="dropdown-link">Gift Cards</Link></li> */}
            {/* <li><Link to="/ContactUs" className="dropdown-link">Contact Us</Link></li> */}
            <li><Link to="/bbrand-insider" className="dropdown-link">Bbrand Insider <span className="new-badge">New</span></Link></li>
            {/* <li><Link to="/myntracredit" className="dropdown-link">Myntra Credit</Link></li> */}
            <li><Link to="/coupons" className="dropdown-link">Coupons</Link></li>
            <li><Link to="/savedvpa" className="dropdown-link">Saved VPA</Link></li>
            <li><Link to="/savedaddresses" className="dropdown-link">Saved Addresses</Link></li>
            <li><Link to="/giftcart" className="dropdown-link">Gift Cart</Link></li>
            <li><Link to="/brandcredit" className="dropdown-link">Bbrand Credit</Link></li>
            <li><Link to="/admin" className="dropdown-link">Admin Dashboard</Link></li>
          </ul>
        </div>
      )}

      {isLoggedIn && (
        <div>
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
          <h1>User Profile</h1>
          <SavedCards userId={userId} />
        </div>
      )}
    </div>
  );
};

export default Profile;