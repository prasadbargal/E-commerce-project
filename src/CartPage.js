
import React, { useContext } from 'react';
import './CartPage.css';
import { CartContext } from './CartContext';
import { useWishlist } from './WishlistContext';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const { cartItems, removeFromCart, clearCart, increaseQty, decreaseQty } = useContext(CartContext);
  const { addToWishlist, wishlistItems } = useWishlist();
  const navigate = useNavigate();

  const handleOrder = () => {
    navigate('/placeorder');
  };

  // ✅ Fix NaN issue in total price calculation
  const totalPrice = cartItems.reduce((acc, item) => {
    const price = parseFloat(
      typeof item.newPrice === "string"
        ? item.newPrice.replace(/[^0-9.]/g, "")
        : item.newPrice
    ) || 0;

    const quantity = item.quantity || 1;
    return acc + price * quantity;
  }, 0);

  const isInWishlist = (itemId) => {
    return wishlistItems.some(item => item.id === itemId);
  };

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>your items has been orderd..</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item" style={{ position: 'relative' }}>
              <img src={item.imgSrc} alt={item.brand} />
              <div
                onClick={() => addToWishlist(item)}
                style={{
                  position: 'absolute',
                  bottom: '8px',
                  right: '8px',
                  cursor: 'pointer',
                  fontSize: '24px',
                  color: isInWishlist(item.id) ? 'red' : 'gray',
                  userSelect: 'none',
                }}
                title={isInWishlist(item.id) ? 'Added to Wishlist' : 'Add to Wishlist'}
              >
                ♥
              </div>
              <div>
                <h4>{item.brand}</h4>
                <p>{item.tag}</p>
                <p>Price: ₹{item.newPrice}</p>

                <div className="qty-control">
                  <button onClick={() => decreaseQty(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQty(item.id)}>+</button>
                </div>

                <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="cart-summary">
            <h3>Total: ₹{totalPrice.toFixed(2)}</h3>
            <button onClick={handleOrder}>Place Order</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
