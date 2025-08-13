import React, { useState } from 'react';
import './ContactUs.css';

const ContactUs = ({ userId }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    message: '',
    captcha: '',
  });

  const [captcha] = useState(Math.random().toString(36).substring(2, 7));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="contact-us-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="firstName"
          placeholder="First Name *"
          required
          value={formData.firstName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email ID *"
          required
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="tel"
          name="mobile"
          placeholder="Mobile No *"
          required
          value={formData.mobile}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
        />
        <input
          type="text"
          name="captcha"
          placeholder="Please type the characters *"
          required
          value={formData.captcha}
          onChange={handleChange}
        />
        <span className="captcha-display">{captcha}</span>
        <p>This helps us prevent spam, thank you.</p>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;
