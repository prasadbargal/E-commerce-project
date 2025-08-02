import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Payment.css';

const PaymentApp = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { paymentMethod, upiId, cardNumber } = location.state || {};

  const handleBack = () => {
    navigate('/payment');
  };

  return (
    <div className="payment-container">
      <header className="payment-header">
        <button className="back-button" onClick={handleBack}>&larr; Back</button>
        <h2>Payment App</h2>
      </header>

      <div className="payment-details">
        {paymentMethod === 'upi' && (
          <>
            <p>Paying with UPI ID:</p>
            <h3>{upiId}</h3>
          </>
        )}
        {paymentMethod === 'card' && (
          <>
            <p>Paying with Card Number:</p>
            <h3>**** **** **** {cardNumber ? cardNumber.slice(-4) : ''}</h3>
          </>
        )}
      </div>

      <button className="continue-btn" onClick={() => alert('Payment Processed!')}>
        Pay Now
      </button>
    </div>
  );
};

export default PaymentApp;
