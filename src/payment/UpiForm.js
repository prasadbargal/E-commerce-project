import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Payment.css';

const UpiForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [upiId, setUpiId] = useState(location.state?.upiId || '');
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!upiId) newErrors.upiId = 'UPI ID is required';
    if (!name) newErrors.name = 'Name is required';
    if (!mobile) newErrors.mobile = 'Mobile number is required';
    else if (!/^\d{10}$/.test(mobile)) newErrors.mobile = 'Mobile number must be 10 digits';
    if (!email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Email is invalid';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleConfirm = () => {
    if (validate()) {
      navigate('/payment/app', { state: { paymentMethod: 'upi', upiId } });
    }
  };

  return (
    <div className="payment-container">
      <h2>UPI Payment</h2>
      <label>
        UPI ID:
        <input
          type="text"
          value={upiId}
          onChange={(e) => setUpiId(e.target.value)}
          className={errors.upiId ? 'error' : ''}
        />
        {errors.upiId && <div className="error-message">{errors.upiId}</div>}
      </label>

      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={errors.name ? 'error' : ''}
        />
        {errors.name && <div className="error-message">{errors.name}</div>}
      </label>

      <label>
        Mobile Number:
        <input
          type="text"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          className={errors.mobile ? 'error' : ''}
        />
        {errors.mobile && <div className="error-message">{errors.mobile}</div>}
      </label>

      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={errors.email ? 'error' : ''}
        />
        {errors.email && <div className="error-message">{errors.email}</div>}
      </label>

      <button className="continue-btn" onClick={handleConfirm}>
        Confirm
      </button>
    </div>
  );
};

export default UpiForm;
