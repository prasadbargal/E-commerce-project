import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './GiftCart.css';

const GiftCards = ({ userId }) => {
  const path = userId ? `/users/${userId}/gift-cards` : '/gift-cards';
  return (
    <Link to={path} className="profile-item">
      Gift Cards
    </Link>
  );
};

const GiftCardPage = () => {
  const [recipientName, setRecipientName] = useState('');
  const [recipientEmail, setRecipientEmail] = useState('');
  const [customMessage, setCustomMessage] = useState('');
  const [giftCardValue, setGiftCardValue] = useState(25); // Default value
  const [deliveryMethod, setDeliveryMethod] = useState('email');

  const handlePurchase = () => {
    // Logic to handle the purchase of the gift card
    alert('Gift card purchased!');
  };

  return (
    <div className="gift-card-page">
      <header className="hero-banner">
        <h1>The Gift of Choice</h1>
        <p>Give the perfect present every time with our customizable gift cards!</p>
      </header>

      <section className="gift-card-design">
        <h2>Choose Your Gift Card Design</h2>
        <div className="design-options">
          {/* Thumbnail previews of gift card designs */}
          <div className="design-option">Design 1</div>
          <div className="design-option">Design 2</div>
          <div className="design-option">Design 3</div>
        </div>
      </section>

      <section className="gift-card-value">
        <h2>Select Gift Card Value</h2>
        <div className="value-options">
          <button onClick={() => setGiftCardValue(25)}>$25</button>
          <button onClick={() => setGiftCardValue(50)}>$50</button>
          <button onClick={() => setGiftCardValue(100)}>$100</button>
          <input
            type="number"
            value={giftCardValue}
            onChange={(e) => setGiftCardValue(e.target.value)}
            placeholder="Custom Amount"
          />
        </div>
      </section>

      <section className="recipient-details">
        <h2>Recipient Details</h2>
        <input
          type="text"
          placeholder="Recipient's Name"
          value={recipientName}
          onChange={(e) => setRecipientName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Recipient's Email"
          value={recipientEmail}
          onChange={(e) => setRecipientEmail(e.target.value)}
        />
        <textarea
          placeholder="Personalized Message"
          value={customMessage}
          onChange={(e) => setCustomMessage(e.target.value)}
        />
      </section>

      <section className="delivery-options">
        <h2>Delivery Options</h2>
        <select onChange={(e) => setDeliveryMethod(e.target.value)} value={deliveryMethod}>
          <option value="email">Send via Email</option>
          <option value="pdf">Send as Printable PDF</option>
          <option value="physical">Deliver Physical Card</option>
        </select>
      </section>

      <button className="cta-button" onClick={handlePurchase}>
        Buy Now
      </button>

      <section className="additional-elements">
        <h2>Check Gift Card Balance</h2>
        <p>Check your gift card balance easily on our website.</p>
        <h2>FAQs</h2>
        <p>Find answers to common questions about gift cards.</p>
      </section>
    </div>
  );
};

export { GiftCards, GiftCardPage };
