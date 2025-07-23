
import React, { useContext } from 'react';
import './CartPage.css';
import { CartContext } from './CartContext';

const CartPage = () => {
  const { cartItems, removeFromCart, clearCart, increaseQty, decreaseQty } = useContext(CartContext);

  const handleOrder = () => {
    alert('Order placed successfully!');
    clearCart();
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

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>your items has been orderd..</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.imgSrc} alt={item.brand} />
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
