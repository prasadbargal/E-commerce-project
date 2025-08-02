import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './PaymentDetails.css';

// Simple Toast component
const Toast = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="toast">
      {message}
    </div>
  );
};

// Simple Modal component
const Modal = ({ show, onClose, children }) => {
  if (!show) return null;
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        {children}
        <button className="modal-close-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

const PaymentDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { formData, cartItems, totalPrice } = location.state || {};

  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
    upiId: '',
    netBankingUser: '',
  });

  const [showToast, setShowToast] = useState(false);
  const [showModal, setShowModal] = useState(false);

  if (!formData || !cartItems) {
    return <p>No order data found. Please start your order again.</p>;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentInfo(prev => ({ ...prev, [name]: value }));
  };

  const handleConfirmPayment = () => {
    // Simulate backend save
    const orderData = {
      formData,
      cartItems,
      totalPrice,
      paymentInfo,
      confirmedAt: new Date().toISOString(),
    };
    localStorage.setItem('lastOrder', JSON.stringify(orderData));

    // Show toast and modal
    setShowToast(true);
    setShowModal(true);

    // Auto close modal after 4 seconds and navigate home
    setTimeout(() => {
      setShowModal(false);
      navigate('/');
    }, 4000);
  };

  return (
    <>
      <div className="payment-container">
        <h1><span role="img" aria-label="payment">💳</span> Payment Details</h1>
        <p className="payment-info"><strong>Order Total:</strong> <span className="order-total">₹{totalPrice.toFixed(2)}</span></p>
        <p className="payment-info"><strong>Payment Method:</strong> {formData.paymentMethod}</p>
        {formData.paymentMethod === 'Cash on Delivery' && (
          <p className="payment-info">You will pay at the time of delivery.</p>
        )}

        {(formData.paymentMethod === 'Credit Card' || formData.paymentMethod === 'Debit Card') && (
          <form className="payment-form" onSubmit={(e) => { e.preventDefault(); handleConfirmPayment(); }}>
            <div className="form-group">
              <label>Card Number</label>
              <input type="text" name="cardNumber" value={paymentInfo.cardNumber} onChange={handleChange} required maxLength="16" />
            </div>
            <div className="form-group">
              <label>Name on Card</label>
              <input type="text" name="cardName" value={paymentInfo.cardName} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Expiry Date</label>
              <input type="month" name="expiryDate" value={paymentInfo.expiryDate} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>CVV</label>
              <input type="password" name="cvv" value={paymentInfo.cvv} onChange={handleChange} required maxLength="4" />
            </div>
            <button type="submit" className="confirm-btn">Confirm Order</button>
          </form>
        )}

        {formData.paymentMethod === 'UPI' && (
          <form className="payment-form" onSubmit={(e) => { e.preventDefault(); handleConfirmPayment(); }}>
            <div className="form-group">
              <label>UPI ID</label>
              <input type="text" name="upiId" value={paymentInfo.upiId} onChange={handleChange} required />
            </div>
            <button type="submit" className="confirm-btn">Confirm Order</button>
          </form>
        )}

        {formData.paymentMethod === 'Net Banking' && (
          <form className="payment-form" onSubmit={(e) => { e.preventDefault(); handleConfirmPayment(); }}>
            <div className="form-group">
              <label>Net Banking User ID</label>
              <input type="text" name="netBankingUser" value={paymentInfo.netBankingUser} onChange={handleChange} required />
            </div>
            <button type="submit" className="confirm-btn">Confirm Order</button>
          </form>
        )}

        {formData.paymentMethod === 'Cash on Delivery' && (
          <button onClick={handleConfirmPayment} className="confirm-btn">Confirm Order</button>
        )}
      </div>

      {showToast && <Toast message="Order Confirmed!" onClose={() => setShowToast(false)} />}
      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <h2>Thank you for your order!</h2>
        <p>Your order has been confirmed.</p>
        <p>Estimated delivery: 3-5 business days.</p>
      </Modal>
    </>
  );
};

export default PaymentDetails;
