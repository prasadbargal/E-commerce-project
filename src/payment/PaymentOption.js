import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Payment.css';

const PaymentOption = () => {
  const navigate = useNavigate();
  const [upiId, setUpiId] = useState('9876543210@upi');
  const [selectedMethod, setSelectedMethod] = useState('upi');
  const [cardSupported, setCardSupported] = useState(false);

  const handleContinue = () => {
    if (selectedMethod === 'upi') {
      navigate('/payment/upi', { state: { upiId } });
    } else if (selectedMethod === 'card') {
      navigate('/payment/card', { state: { cardSupported } });
    }
  };

  return (
    <div className="payment-container">
      <h2>Preferred Methods</h2>
      <input
        type="text"
        value={upiId}
        onChange={(e) => setUpiId(e.target.value)}
        className="upi-input"
        placeholder="Enter UPI ID"
      />

      <h2>All Payment Methods</h2>
      <div className="payment-methods">
        <label>
          <input
            type="radio"
            name="paymentMethod"
            value="upi"
            checked={selectedMethod === 'upi'}
            onChange={() => setSelectedMethod('upi')}
          />
          UPI
          <div className="method-description">Pay with installed app, or use Other</div>
        </label>

        <label>
          <input
            type="radio"
            name="paymentMethod"
            value="card"
            checked={selectedMethod === 'card'}
            onChange={() => setSelectedMethod('card')}
          />
          Pay using Card
          <div>
            <input
              type="checkbox"
              checked={cardSupported}
              onChange={() => setCardSupported(!cardSupported)}
              disabled={selectedMethod !== 'card'}
            />
            All Card Supported
          </div>
        </label>
      </div>

      <button className="continue-btn" onClick={handleContinue}>
        Continue
      </button>
    </div>
  );
};

export default PaymentOption;
