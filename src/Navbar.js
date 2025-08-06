import React, { useContext, useState } from 'react';
import { CartContext } from './CartContext';
import { FaBagShopping } from 'react-icons/fa6'; // removed FaUser import
import { NavLink, useNavigate } from 'react-router-dom';
import Profile from './profile/Profile'; // import Profile component
import { FaBars, FaTimes } from 'react-icons/fa'; // icons for toggle
import './Navbar(css).css'

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

  // Placeholder userId, replace with actual user ID or context as needed
  const userId = null;

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
          <li><NavLink to="/" onClick={toggleSidebar}>Home</NavLink></li>
          <li><NavLink to="/men" onClick={toggleSidebar}>Men</NavLink></li>
          <li><NavLink to="/women" onClick={toggleSidebar}>Women</NavLink></li>
          <li><NavLink to="/kids" onClick={toggleSidebar}>Kids</NavLink></li>
          <li><NavLink to="/about" onClick={toggleSidebar}>About</NavLink></li>
          <li><NavLink to="/service" onClick={toggleSidebar}>Service</NavLink></li>
          <li><NavLink to="/contact" onClick={toggleSidebar}>Contact</NavLink></li>
        </ul>
      </div>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ position: 'relative' }}>
        <div className="container-fluid">
          {/* Three-dot button */}
          <button className="btn btn-sm btn-outline-light me-3 d-lg-none" onClick={toggleSidebar}>
            <FaBars />
          </button>

          <NavLink className="navbar-brand d-flex align-items-center" to="/">
            <img src="/bbrandlogo2.png" alt="BBRAND Logo" className="navbar-logo" />
          </NavLink>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-none d-lg-flex">
              <li className="nav-item"><NavLink className="nav-link" to="/">Home</NavLink></li>
              <li className="nav-item dropdown">
                <NavLink className="nav-link dropdown-toggle" to="/men" role="button" tabIndex={0}>
                  Men
                </NavLink>
                <div className="dropdown-menu">
                  <div className="dropdown-grid-vertical">
                    <div className="dropdown-submenu">
                      <span className="dropdown-submenu-title">Summer</span>
                      <ul className="dropdown-submenu-list">
                        <li><NavLink className="dropdown-item" to="/men/casual-shirt">Casual Shirt</NavLink></li>
                        <li><NavLink className="dropdown-item" to="/men/active-wears">Active Wears</NavLink></li>
                        <li><NavLink className="dropdown-item" to="/men/full-sleeves">Full Sleeves</NavLink></li>
                        <li><NavLink className="dropdown-item" to="/men/jeans">Jeans</NavLink></li>
                        <li><NavLink className="dropdown-item" to="/men/polo-shirts">Polo Shirts</NavLink></li>
                        <li><NavLink className="dropdown-item" to="/men/tee-shirts">Tee Shirts</NavLink></li>
                        <li><NavLink className="dropdown-item" to="/men/track-suits">Track Suits</NavLink></li>
                        <li><NavLink className="dropdown-item" to="/men/trousers-shorts">Trousers and Shorts</NavLink></li>
                      </ul>
                    </div>
                    <div className="dropdown-submenu">
                      <span className="dropdown-submenu-title">Winter</span>
                      <ul className="dropdown-submenu-list">
                        <li><NavLink className="dropdown-item" to="/men/full-sleeves">Full Sleeves</NavLink></li>
                        <li><NavLink className="dropdown-item" to="/men/jeans">Jeans</NavLink></li>
                        <li><NavLink className="dropdown-item" to="/men/scarf">Scarf</NavLink></li>
                        <li><NavLink className="dropdown-item" to="/men/sweat-shirts">Sweat Shirts</NavLink></li>
                        <li><NavLink className="dropdown-item" to="/men/track-suits">Track Suits</NavLink></li>
                        <li><NavLink className="dropdown-item" to="/men/trousers">Trousers</NavLink></li>
                        <li><NavLink className="dropdown-item" to="/men/upper-hoodies">Upper and Hoodies</NavLink></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown">
                <NavLink className="nav-link dropdown-toggle" to="/women" role="button" tabIndex={0}>
                  Women
                </NavLink>
                <div className="dropdown-menu">
                  <ul className="dropdown-grid-vertical">
                    <li className="dropdown-submenu">
                      <span className="dropdown-submenu-title">Ethnic Wear</span>
                      <ul className="dropdown-submenu-list">
                        <li><NavLink className="dropdown-item" to="/women/suit-sets">Suit Sets</NavLink></li>
                        <li><NavLink className="dropdown-item" to="/women/kurta-sets">Kurta Sets</NavLink></li>
                        <li><NavLink className="dropdown-item" to="/women/co-ord-set">Co Ord Set</NavLink></li>
                        <li><NavLink className="dropdown-item" to="/women/sharara-sets">Sharara Sets</NavLink></li>
                        <li><NavLink className="dropdown-item" to="/women/anarkali-suit">Anarkali Suit</NavLink></li>
                        <li><NavLink className="dropdown-item" to="/women/lehenga-sets">Lehenga Sets</NavLink></li>
                        <li><NavLink className="dropdown-item" to="/women/sarees">Sarees</NavLink></li>
                        <li><NavLink className="dropdown-item" to="/women/blouse">Blouse</NavLink></li>
                      </ul>
                    </li>
                    <li className="dropdown-submenu">
                      <span className="dropdown-submenu-title">Western Wear</span>
                      <ul className="dropdown-submenu-list">
                        <li><NavLink className="dropdown-item" to="/women/dresses">Dresses</NavLink></li>
                        <li><NavLink className="dropdown-item" to="/women/co-ord-set-western">Co Ord Set</NavLink></li>
                      </ul>
                    </li>
                    <li className="dropdown-submenu">
                      <span className="dropdown-submenu-title">Loungewear</span>
                      <ul className="dropdown-submenu-list">
                        {/* Add loungewear items here if needed */}
                      </ul>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item dropdown">
                <NavLink className="nav-link dropdown-toggle" to="/kids" role="button" tabIndex={0}>
                  Kids
                </NavLink>
                <div className="dropdown-menu">
                  <ul>
                    <li className="dropdown-submenu">
                      <span className="dropdown-submenu-title">Boys</span>
                      <ul className="dropdown-submenu-list">
                        <li><NavLink className="dropdown-item" to="/kids/hoodies">Hoodies</NavLink></li>
                        <li><NavLink className="dropdown-item" to="/kids/pants-boys">Pants Boys</NavLink></li>
                        <li><NavLink className="dropdown-item" to="/kids/trousers">Trousers</NavLink></li>
                        <li><NavLink className="dropdown-item" to="/kids/sweat-shirts">Sweat Shirts</NavLink></li>
                        <li><NavLink className="dropdown-item" to="/kids/t-shirts">T-Shirts</NavLink></li>
                      </ul>
                    </li>
                    <li className="dropdown-submenu">
                      <span className="dropdown-submenu-title">Girls</span>
                      <ul className="dropdown-submenu-list">
                        <li><NavLink className="dropdown-item" to="/kids/hoodies">Hoodies</NavLink></li>
                        <li><NavLink className="dropdown-item" to="/kids/trousers">Trousers</NavLink></li>
                      </ul>
                    </li>
                    <li className="dropdown-submenu">
                      <span className="dropdown-submenu-title">Track Suits</span>
                      <ul className="dropdown-submenu-list">
                        <li><NavLink className="dropdown-item" to="/kids/boys-summer-track-suit">Boys Summer Track Suit</NavLink></li>
                        <li><NavLink className="dropdown-item" to="/kids/boys-winter-track-suit">Boys Winter Track Suit</NavLink></li>
                        <li><NavLink className="dropdown-item" to="/kids/girls-summer-tracksuit">Girls Summer Tracksuit</NavLink></li>
                        <li><NavLink className="dropdown-item" to="/kids/girls-winter-tracksuit">Girls Winter Tracksuit</NavLink></li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item"><NavLink className="nav-link" to="/categories">Categories</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/about">About</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/service">Service</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/contact">Contact</NavLink></li>
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

            <NavLink to="/cart" className="cart-icon" style={{ marginLeft: '15px', position: 'relative' }}>
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
            </NavLink>

            <div className="profile-icon ms-3 relative text-white cursor-pointer">
              <Profile userId={userId} />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
