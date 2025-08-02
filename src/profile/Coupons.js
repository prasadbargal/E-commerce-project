import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './coupons.css';

const CouponsPage = () => {
  const [couponCode, setCouponCode] = useState('');
  const navigate = useNavigate();

  const handleApply = () => {
    alert("Coupon code \"" + couponCode + "\" applied!");
    setCouponCode('');
  };

  return (
    <div className="coupons-container">
      <header className="coupons-header">
        <button className="back-button" onClick={() => navigate(-1)}>&larr;</button>
        <h1>COUPONS</h1>
      </header>

      <div className="apply-coupon">
        <input
          type="text"
          placeholder="Enter Coupon Code"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
          className="coupon-input"
        />
        <button className="apply-button" onClick={handleApply}>APPLY</button>
      </div>

      <div className="shop-more-text">
        SHOP MORE TO MAKE THIS COUPON YOURS
      </div>

      <div className="coupon-list">
        <div className="coupon-item">
          <div className="coupon-code-box">PREPAID20</div>
          <div className="coupon-discount">20% OFF</div>
          <div className="coupon-condition">on order above ₹999</div>
          <div className="know-more">+ KNOW MORE</div>
          <div className="shop-more-link">SHOP MORE</div>
        </div>

        <div className="coupon-item">
          <div className="coupon-code-box">PREPAID10</div>
          <div className="coupon-discount">10% OFF</div>
          <div className="coupon-condition">on order above ₹699</div>
          <div className="know-more">+ KNOW MORE</div>
          <div className="shop-more-link">SHOP MORE</div>
        </div>
      </div>
    </div>
  );
};

export default CouponsPage;
