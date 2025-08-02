import React, { useContext } from 'react';
import { useWishlist } from '../WishlistContext';
import { CartContext } from '../CartContext';
import './Profile.css';

const Wishlist = () => {
  const { wishlistItems, removeFromWishlist } = useWishlist();
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (item) => {
    addToCart(item);
    alert(`Item from ${item.brand} added to cart!`);
  };

  const handleQuantityChange = (itemId, quantity) => {
    // Logic to update quantity (if applicable)
    // This can be implemented if needed
  };

  if (wishlistItems.length === 0) {
    return (
      <div className="empty-wishlist">
        <h2>Your Wishlist is Empty</h2>
        <p>Start adding products to your wishlist from product pages!</p>
      </div>
    );
  }

  return (
    <div className="wishlist-container">
      <h1>Your Wishlist</h1>
      <ul className="wishlist-items">
        {wishlistItems.map(item => (
          <li key={item.id} className="wishlist-item">
            <img src={item.imgSrc} alt={item.brand} className="wishlist-item-image" />
            <div className="wishlist-item-details">
              <h2>{item.brand}</h2>
              <p>{item.tag}</p>
              <p>Price: ₹{item.newPrice}</p>
              <div className="wishlist-item-actions">
                <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
                <button onClick={() => removeFromWishlist(item.id)}>Remove</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Wishlist;
