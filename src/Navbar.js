import React, { useContext, useState } from 'react';
import { CartContext } from './CartContext';
<<<<<<< HEAD
import { FaBagShopping } from "react-icons/fa6"; // removed FaUser import
import { Link, useNavigate } from 'react-router-dom';
import Profile from './profile/Profile'; // import Profile component

=======
import { FaBagShopping } from 'react-icons/fa6';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // icons for toggle
import './Navbar(css).css'
>>>>>>> d2c2be8163608ae4f5b9380539f45ff0c38e5d0d
const Navbar = () => {
  const { cartItems } = useContext(CartContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== '') {
      navigate(`/search/${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm('');
    }
  };

<<<<<<< HEAD
  // Placeholder userId, replace with actual user ID or context as needed
  const userId = null;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ position: 'relative' }}>
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <span style={{ fontWeight: 'bold', fontSize: '1.5rem', color: 'white' }}>BBRAND</span>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
          aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/men">Men</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/women">Women</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/kids">Kids</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/categories">Categories</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/service">Service</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
          </ul>
          <form className="d-flex" onSubmit={handleSearchSubmit}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <button className="btn btn-outline-light" type="submit">Search</button>
          </form>
          <Link to="/cart" className="cart-icon" style={{ marginLeft: '15px', position: 'relative' }}>
            <FaBagShopping size={24} />
            <span className="count-items" style={{
              position: 'absolute',
              top: '-5px',
              right: '-10px',
              backgroundColor: 'red',
              color: 'white',
              borderRadius: '50%',
              padding: '2px 6px',
              fontSize: '12px'
            }}>{cartItems.length}</span>
          </Link>
          <div className="profile-icon ms-3 relative text-white cursor-pointer">
            <Profile userId={userId} />
          </div>
        </div>
=======
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={toggleSidebar}>
          <FaTimes size={20} />
        </button>
        <ul>
          <li><Link to="/" onClick={toggleSidebar}>Home</Link></li>
          <li><Link to="/men" onClick={toggleSidebar}>Men</Link></li>
          <li><Link to="/women" onClick={toggleSidebar}>Women</Link></li>
          <li><Link to="/kids" onClick={toggleSidebar}>Kids</Link></li>
          <li><Link to="/about" onClick={toggleSidebar}>About</Link></li>
          <li><Link to="/service" onClick={toggleSidebar}>Service</Link></li>
          <li><Link to="/contact" onClick={toggleSidebar}>Contact</Link></li>
        </ul>
>>>>>>> d2c2be8163608ae4f5b9380539f45ff0c38e5d0d
      </div>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          {/* Three-dot button */}
          <button className="btn btn-sm btn-outline-light me-3 d-lg-none" onClick={toggleSidebar}>
            <FaBars />
          </button>

          <Link className="navbar-brand d-flex align-items-center" to="/">
            <span style={{ fontWeight: 'bold', fontSize: '1.5rem', color: 'white' }}>BBRAND</span>
          </Link>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-none d-lg-flex">
              <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/men">Men</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/women">Women</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/kids">Kids</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/service">Service</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
            </ul>

            <form className="d-flex" onSubmit={handleSearchSubmit}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <button className="btn btn-outline-light" type="submit">Search</button>
            </form>

            <Link to="/cart" className="cart-icon" style={{ marginLeft: '15px', position: 'relative' }}>
              <FaBagShopping size={24} />
              <span className="count-items" style={{
                position: 'absolute',
                top: '-5px',
                right: '-10px',
                backgroundColor: 'red',
                color: 'white',
                borderRadius: '50%',
                padding: '2px 6px',
                fontSize: '12px'
              }}>{cartItems.length}</span>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
