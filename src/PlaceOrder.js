import React, { useContext, useState } from 'react';
import { CartContext } from './CartContext';
import { AddressContext } from './AddressContext';
import { useNavigate } from 'react-router-dom';
import './PlaceOrder.css';

const PlaceOrder = () => {
  const { cartItems } = useContext(CartContext);
  const { addAddress } = useContext(AddressContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    addressLine1: '',
    addressLine2: '',
    pinCode: '',
    city: '',
    state: '',
    addressType: 'Home',
    paymentMethod: 'Cash on Delivery',
  });

  const [formErrors, setFormErrors] = useState({});

  const totalPrice = cartItems.reduce((acc, item) => {
    const price = parseFloat(
      typeof item.newPrice === "string"
        ? item.newPrice.replace(/[^0-9.]/g, "")
        : item.newPrice
    ) || 0;

    const quantity = item.quantity || 1;
    return acc + price * quantity;
  }, 0);

  const validateForm = () => {
    const errors = {};
    if (!formData.fullName.trim()) errors.fullName = 'Full Name is required';
    if (!formData.mobileNumber.trim()) errors.mobileNumber = 'Mobile Number is required';
    if (!formData.addressLine1.trim()) errors.addressLine1 = 'Address is required';
    if (!formData.pinCode.trim()) errors.pinCode = 'Pin Code is required';
    if (!formData.city.trim()) errors.city = 'City is required';
    if (!formData.state.trim()) errors.state = 'State is required';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleAddressTypeChange = (type) => {
    setFormData(prev => ({ ...prev, addressType: type }));
  };

  const handlePaymentMethodChange = (e) => {
    setFormData(prev => ({ ...prev, paymentMethod: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      addAddress({
        name: formData.fullName,
        address: formData.addressLine1 + (formData.addressLine2 ? ', ' + formData.addressLine2 : ''),
        city: formData.city,
        state: formData.state,
        zipCode: formData.pinCode,
        phoneNumber: formData.mobileNumber,
        addressType: formData.addressType,
      });
      // Navigate to payment details page with formData and cartItems
      navigate('/paymentdetails', { state: { formData, cartItems, totalPrice } });
    }
  };

  return (
    <div className="placeorder-container">
      <h2>Place Your Order</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <form className="order-form" onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label>Full Name*</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              className={formErrors.fullName ? 'error' : ''}
            />
            {formErrors.fullName && <span className="error-message">{formErrors.fullName}</span>}
          </div>

          <div className="form-group">
            <label>Mobile Number*</label>
            <input
              type="tel"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleInputChange}
              className={formErrors.mobileNumber ? 'error' : ''}
            />
            {formErrors.mobileNumber && <span className="error-message">{formErrors.mobileNumber}</span>}
          </div>

          <div className="form-group">
            <label>Flat, House, Ward Number / Building Name*</label>
            <input
              type="text"
              name="addressLine1"
              value={formData.addressLine1}
              onChange={handleInputChange}
              className={formErrors.addressLine1 ? 'error' : ''}
              placeholder="Eg: 3, Anita Vilas"
            />
            {formErrors.addressLine1 && <span className="error-message">{formErrors.addressLine1}</span>}
          </div>

          <div className="form-group">
            <label>Road / Colony / Landmark*</label>
            <input
              type="text"
              name="addressLine2"
              value={formData.addressLine2}
              onChange={handleInputChange}
              placeholder="Eg: Near India Post Office"
            />
          </div>

          <div className="form-group">
            <label>Pin Code*</label>
            <input
              type="text"
              name="pinCode"
              value={formData.pinCode}
              onChange={handleInputChange}
              className={formErrors.pinCode ? 'error' : ''}
            />
            {formErrors.pinCode && <span className="error-message">{formErrors.pinCode}</span>}
          </div>

          <div className="form-group">
            <label>City*</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              className={formErrors.city ? 'error' : ''}
            />
            {formErrors.city && <span className="error-message">{formErrors.city}</span>}
          </div>

          <div className="form-group">
            <label>State*</label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleInputChange}
              className={formErrors.state ? 'error' : ''}
            />
            {formErrors.state && <span className="error-message">{formErrors.state}</span>}
          </div>

          <div className="address-type-group">
            <label>Add Address Type</label>
            <div className="address-type-buttons">
              {['Home', 'Office', 'Other'].map(type => (
                <button
                  type="button"
                  key={type}
                  className={formData.addressType === type ? 'active' : ''}
                  onClick={() => handleAddressTypeChange(type)}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div className="payment-method-group">
            <label>Payment Options</label>
            <select value={formData.paymentMethod} onChange={handlePaymentMethodChange}>
              <option value="Cash on Delivery">Cash on Delivery</option>
              <option value="Credit Card">Credit Card</option>
              <option value="Debit Card">Debit Card</option>
              <option value="UPI">UPI</option>
              <option value="Net Banking">Net Banking</option>
            </select>
          </div>

          <button type="submit" className="save-proceed-btn">Save and Proceed</button>
        </form>
      )}
    </div>
  );
};

export default PlaceOrder;
