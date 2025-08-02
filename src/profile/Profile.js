import React, { useState, useRef, useEffect } from 'react';
<<<<<<< HEAD
import ReactDOM from 'react-dom';
=======
>>>>>>> c4298b9e49e93a06fbbc09dac8a39cc6656a1a51
import './Profile.css';
import { FaUser } from 'react-icons/fa';
import SavedCards from './SavedCards';
import { Link, useNavigate } from 'react-router-dom';

const Profile = ({ userId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const dropdownRef = useRef(null);
<<<<<<< HEAD
  const portalDropdownRef = useRef(null);
=======
>>>>>>> c4298b9e49e93a06fbbc09dac8a39cc6656a1a51
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
<<<<<<< HEAD
        !dropdownRef.current.contains(event.target) &&
        portalDropdownRef.current &&
        !portalDropdownRef.current.contains(event.target)
=======
        !dropdownRef.current.contains(event.target)
>>>>>>> c4298b9e49e93a06fbbc09dac8a39cc6656a1a51
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

<<<<<<< HEAD
      {isOpen && !isLoggedIn && ReactDOM.createPortal(
        <div ref={portalDropdownRef} className="profile-dropdown" style={{ position: 'absolute', top: '40px', right: '0', width: '280px', background: 'white', border: '1px solid #ddd', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', borderRadius: '8px', zIndex: 9999, fontFamily: 'Arial, sans-serif', color: '#333', padding: '16px' }}>
=======
      {isOpen && !isLoggedIn && (
        <div className="profile-dropdown">
>>>>>>> c4298b9e49e93a06fbbc09dac8a39cc6656a1a51
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
<<<<<<< HEAD
            {/* <li><Link to="/ContactUs" className="dropdown-link">Contact Us</Link></li> */}
=======
            <li><Link to="/ContactUs" className="dropdown-link">Contact Us</Link></li>
>>>>>>> c4298b9e49e93a06fbbc09dac8a39cc6656a1a51
            <li><Link to="/bbrand-insider" className="dropdown-link">Bbrand Insider <span className="new-badge">New</span></Link></li>
            {/* <li><Link to="/myntracredit" className="dropdown-link">Myntra Credit</Link></li> */}
            <li><Link to="/coupons" className="dropdown-link">Coupons</Link></li>
            <li><Link to="/savedvpa" className="dropdown-link">Saved VPA</Link></li>
            <li><Link to="/savedaddresses" className="dropdown-link">Saved Addresses</Link></li>
            <li><Link to="/giftcart" className="dropdown-link">Gift Cart</Link></li>
            <li><Link to="/brandcredit" className="dropdown-link">Bbrand Credit</Link></li>
            <li><Link to="/admin" className="dropdown-link">Admin Dashboard</Link></li>
          </ul>
<<<<<<< HEAD
        </div>,
        document.body
=======
        </div>
>>>>>>> c4298b9e49e93a06fbbc09dac8a39cc6656a1a51
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

<<<<<<< HEAD
export default Profile;
=======
export default Profile;
>>>>>>> c4298b9e49e93a06fbbc09dac8a39cc6656a1a51
