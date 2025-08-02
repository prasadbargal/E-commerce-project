import React, { useState } from 'react';
import './GiftCart.css';
const cupcakeImage = "https://images.unsplash.com/photo-1505253210343-1a1a1a1a1a1a?auto=format&fit=crop&w=400&q=80";

const GiftCart = () => {
  const [amount, setAmount] = useState(25);
  const [customAmount, setCustomAmount] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('');
  const [recipientName, setRecipientName] = useState('');
  const [recipientEmail, setRecipientEmail] = useState('');
  const [senderName, setSenderName] = useState('');
  const [message, setMessage] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handleAmountChange = (value) => {
    setAmount(value);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e) => {
    const val = e.target.value;
    setCustomAmount(val);
    setAmount(val ? parseFloat(val) : 0);
  };

  const handleAddToCart = () => {
    alert(`Added ${quantity} gift card(s) of $${amount} to cart for ${recipientName}`);
    // Additional functionality can be added here
  };

  return (
    <div className="giftcart-container">
      <div className="giftcard-preview">
        <img src={cupcakeImage} alt="Birthday Cupcake" className="giftcard-image" />
        <h2>Virtual Gift Card</h2>
        <p className="giftcard-price">${amount ? amount.toFixed(2) : '0.00'}</p>
        <p><strong>From:</strong> You</p>
        <p><strong>To:</strong> {recipientName || 'Recipient'}</p>
      </div>

      <div className="giftcard-form">
        <h1>Virtual Gift Card</h1>
        <h3>Choose your design</h3>
        <div className="design-options">
          {/* Placeholder design images */}
          <img src="https://via.placeholder.com/80x50?text=Gift+Card" alt="Design 1" />
          <img src="https://via.placeholder.com/80x50?text=Birthday" alt="Design 2" />
          <img src="https://via.placeholder.com/80x50?text=Cupcake" alt="Design 3" />
          <img src="https://via.placeholder.com/80x50?text=Party" alt="Design 4" />
          <img src="https://via.placeholder.com/80x50?text=View+All" alt="View All" />
        </div>

        <h3>Set an amount</h3>
        <div className="amount-options">
          <button
            className={amount === 10 ? 'selected' : ''}
            onClick={() => handleAmountChange(10)}
          >
            $10.00
          </button>
          <button
            className={amount === 25 ? 'selected' : ''}
            onClick={() => handleAmountChange(25)}
          >
            $25.00
          </button>
          <button
            className={amount === 50 ? 'selected' : ''}
            onClick={() => handleAmountChange(50)}
          >
            $50.00
          </button>
          <input
            type="number"
            placeholder="Enter amount"
            value={customAmount}
            onChange={handleCustomAmountChange}
            min="1"
          />
        </div>

        <h3>Delivery info</h3>
        <label>
          Delivery date:
          <input
            type="date"
            value={deliveryDate}
            onChange={(e) => setDeliveryDate(e.target.value)}
          />
        </label>

        <h3>Recipient info</h3>
        <label>
          Name:
          <input
            type="text"
            value={recipientName}
            onChange={(e) => setRecipientName(e.target.value)}
            placeholder="Recipient's name"
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={recipientEmail}
            onChange={(e) => setRecipientEmail(e.target.value)}
            placeholder="Recipient's email"
          />
        </label>

        <h3>Your info</h3>
        <label>
          Name:
          <input
            type="text"
            value={senderName}
            onChange={(e) => setSenderName(e.target.value)}
            placeholder="Your name"
          />
        </label>
        <label>
          Message:
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter a message for the recipient"
          />
        </label>

        <div className="quantity-addtocart">
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
          />
          <button onClick={handleAddToCart} className="add-to-cart-button">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default GiftCart;
