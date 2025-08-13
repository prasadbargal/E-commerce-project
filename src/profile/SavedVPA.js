import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SavedVPA.css';

const SavedVPA = () => {
  const navigate = useNavigate();

  const [preferredMethods, setPreferredMethods] = useState([
    { id: 1, name: '9876543210@upi', icon: 'googlepay', selected: true },
    { id: 2, name: 'UPI - 9876543210', icon: 'phonepe', selected: false },
  ]);

  const allPaymentMethods = [
    { id: 'upi', label: 'UPI', description: 'Pay with installed app, or use Other', icons: ['googlepay', 'phonepe', 'paytm', 'other'] },
    { id: 'card', label: 'Pay using card', description: 'All Card Supported', icon: 'card' },
    { id: 'netbanking', label: 'Net banking', description: 'All Indian banks', icon: 'netbanking' },
    { id: 'sodexo', label: 'Sodexo', description: 'Card & Meal Pass', icon: 'sodexo' },
  ];

  const handleContinue = () => {
    // Navigate to payment details or next step
    navigate('/paymentdetails');
  };

  return (
    <div className="savedvpa-container">
      <header className="savedvpa-header">
        <button className="back-button" onClick={() => navigate(-1)}>&larr;</button>
        <div className="business-info">
          <div className="business-logo">A</div>
          <div className="business-name">Acme</div>
          <div className="trusted-badge">Razorpay Trusted Business</div>
        </div>
        <button className="close-button" onClick={() => navigate('/')}>×</button>
      </header>

      <section className="preferred-methods">
        <h3>Preferred methods</h3>
        <ul>
          {preferredMethods.map(method => (
            <li key={method.id} className={method.selected ? 'selected' : ''}>
              <span className={`icon ${method.icon}`}></span>
              <span className="method-name">{method.name}</span>
              {method.selected && <span className="checkmark">✔</span>}
            </li>
          ))}
        </ul>
      </section>

      <section className="all-payment-methods">
        <h3>All payment methods</h3>
        {allPaymentMethods.map(method => (
          <div key={method.id} className="payment-method">
            <div className="method-header">
              <span className={`icon ${method.icon}`}></span>
              <div>
                <div className="method-label">{method.label}</div>
                <div className="method-description">{method.description}</div>
              </div>
            </div>
            {method.icons && (
              <div className="method-icons">
                {method.icons.map(icon => (
                  <span key={icon} className={`icon ${icon}`}></span>
                ))}
              </div>
            )}
          </div>
        ))}
      </section>

      <footer className="savedvpa-footer">
        <div className="total-amount">₹ 500 <button className="view-details">View Details</button></div>
        <button className="continue-btn" onClick={handleContinue}>Continue</button>
      </footer>
    </div>
  );
};

export default SavedVPA;
