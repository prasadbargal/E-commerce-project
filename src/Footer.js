import React from 'react';
import { Link } from 'react-router-dom';
import { FaExchangeAlt, FaHandHoldingHeart, FaCheckCircle, FaFacebook, FaTwitter, FaPinterest } from 'react-icons/fa';
import { AiOutlineHeart, AiOutlineArrowUp } from 'react-icons/ai';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-container">
      {/* Top icon section */}
      <div className="footer-top-icons">
        <div className="footer-icon-item">
          <FaExchangeAlt size={40} />
          <p>EASY EXCHANGE</p>
        </div>
        <div className="footer-icon-item">
          <FaHandHoldingHeart size={40} />
          <p>100% HANDPICKED</p>
        </div>
        <div className="footer-icon-item">
          <FaCheckCircle size={40} />
          <p>ASSURED QUALITY</p>
        </div>
      </div>

      {/* Middle links section */}
      <div className="footer-links-section">
        <div className="footer-column">
          <h4>Ajio</h4>
          <ul>
            <li>Who We Are</li>
            <li>Join Our Team</li>
            <li>Terms & Conditions</li>
            <li>We Respect Your Privacy</li>
            <li>Fees & Payments</li>
            <li>Returns & Refunds Policy</li>
            <li>Promotions Terms & Conditions</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Help</h4>
          <ul>
            <li><a href="#">Track Your Order</a></li>
            <li>Frequently Asked Questions</li>
            <li>Returns</li>
            <li>Cancellations</li>
            <li>Payments</li>
            <li>Customer Care</li>
            <li>How Do I Redeem My Coupon</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Shop by</h4>
          <ul>
            <li><Link to="/categories">All</Link></li>
            <li><Link to="/men">Men</Link></li>
            <li><Link to="/women">Women</Link></li>
            <li><Link to="/kids">Kids</Link></li>
            <li>Indie</li>
            <li>Stores</li>
            <li>New Arrivals</li>
            <li>Brand Directory</li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/categories">Collections</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Follow us</h4>
          <ul>
            <li>Facebook</li>
            <li>Instagram- BBRANDLife</li>
            <li>Instagram- BBRAND LUXE</li>
            <li>Twitter</li>
            <li>Pinterest</li>
          </ul>
        </div>
      </div>

      {/* Bottom payment and security section */}
      <div className="footer-bottom-section">
        <div className="payment-methods">
          <p>Payment methods</p>
          <div className="payment-icons">
            <img src="/netbanking.png" alt="Net Banking" />
            <img src="/VerifiedbyVisa.png" alt="Verified by Visa" />
            <img src="/MasterCard.png" alt="MasterCard" />
            <img src="/cashondelivery.png" alt="cashondelivery" />
            <img src="/jiomoney.png" alt="jio money" />
          </div>
        </div>
        <div className="secure-systems">
          <p>Secure systems</p>
          <div className="security-icons">
            <img src="/256bitencription.png" alt="SSL" />
          </div>
        </div>
      </div>

      {/* Back to top button */}
      <button className="back-to-top" onClick={scrollToTop} aria-label="Back to top">
        <AiOutlineArrowUp size={24} />
      </button>
    </footer>
  );
};

export default Footer;
