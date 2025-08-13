import React, { useState } from 'react';
import './SaveCart.css';

const SaveCart = ({ userId }) => {
  const [message, setMessage] = useState('');

  const saveCartToCookie = () => {
    const cartData = {
      items: [
        { productId: 123, quantity: 2 },
        { productId: 456, quantity: 1 },
      ],
    };
    const cartJson = JSON.stringify(cartData);
    document.cookie = `savedCart=${cartJson}; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/`;
    setMessage("Cart saved to cookie!");
  };

  const saveCartToAccount = () => {
    // Simulate saving to user account (you would replace this with an API call)
    const cartData = {
      items: [
        { productId: 123, quantity: 2 },
        { productId: 456, quantity: 1 },
      ],
    };
    // Here you would typically send cartData to your backend
    console.log("Saved cart to account:", cartData);
    setMessage("Cart saved to your account!");
  };

  const handleSaveCart = () => {
    if (userId) {
      saveCartToAccount();
    } else {
      saveCartToCookie();
    }
  };

  return (
    <div className="save-cart">
      <button onClick={handleSaveCart} className="save-cart-button">
        Save Cart
      </button>
      {message && <p className="save-cart-message">{message}</p>}
    </div>
  );
};

export default SaveCart;
