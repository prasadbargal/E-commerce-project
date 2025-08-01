import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Payment.css';

const CardForm = () => {
  const navigate = useNavigate();
  const [cardNumber, setCardNumber] = useState('');
  const [name, setName] = useState('');
  const [cvv, setCvv] = useState('');
  const [expiry, setExpiry] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!cardNumber) newErrors.cardNumber = 'Card number is required';
    else if (!/^\d{16}$/.test(cardNumber)) newErrors.cardNumber = 'Card number must be 16 digits';
    if (!name) newErrors.name = 'Name is required';
    if (!cvv) newErrors.cvv = 'CVV is required';
    else if (!/^\d{3,4}$/.test(cvv)) newErrors.cvv = 'CVV must be 3 or 4 digits';
    if (!expiry) newErrors.expiry = 'Expiry date is required';
    else if (!/^(0[1-9]|1[0-2])\/?([0-9]{2})$/.test(expiry)) newErrors.expiry = 'Expiry date must be in MM/YY format';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleConfirm = () => {
    if (validate()) {
      navigate('/payment/app', { state: { paymentMethod: 'card', cardNumber } });
    }
  };

  return (
    <div className="payment-container">
      <h2>Card Payment</h2>
      <label>
        Card Number:
        <input
          type="text"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          className={errors.cardNumber ? 'error' : ''}
          maxLength={16}
        />
        {errors.cardNumber && <div className="error-message">{errors.cardNumber}</div>}
      </label>

      <label>
        Name on Card:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={errors.name ? 'error' : ''}
        />
        {errors.name && <div className="error-message">{errors.name}</div>}
      </label>

      <label>
        CVV:
        <input
          type="password"
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
          className={errors.cvv ? 'error' : ''}
          maxLength={4}
        />
        {errors.cvv && <div className="error-message">{errors.cvv}</div>}
      </label>

      <label>
        Expiry Date (MM/YY):
        <input
          type="text"
          value={expiry}
          onChange={(e) => setExpiry(e.target.value)}
          className={errors.expiry ? 'error' : ''}
          maxLength={5}
          placeholder="MM/YY"
        />
        {errors.expiry && <div className="error-message">{errors.expiry}</div>}
      </label>

      <button className="continue-btn" onClick={handleConfirm}>
        Confirm
      </button>
    </div>
  );
};

export default CardForm;
