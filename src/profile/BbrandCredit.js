import React from 'react';
import './BbrandCredit.css';

const BbrandCredit = () => {
  return (
    <div className="bbrandcredit-container">
      <div className="left-section">
        <div className="header">
          <img src="https://img.icons8.com/ios-filled/50/2980b9/wallet.png" alt="Wallet Icon" className="header-icon" />
          <h1>MYNTRA CREDIT</h1>
        </div>
        <p className="description">A QUICK AND CONVENIENT WAY TO PAY AND REFUND</p>
        <div className="features">
          <div className="feature-item">
            <img src="https://img.icons8.com/ios-filled/40/16a085/flash-on.png" alt="Instant Checkout" />
            <h3>INSTANT CHECKOUT</h3>
            <p>One-click, easy and fast checkout</p>
          </div>
          <div className="feature-item">
            <img src="https://img.icons8.com/ios-filled/40/16a085/refund.png" alt="Faster Refunds" />
            <h3>FASTER REFUNDS</h3>
            <p>Get instant refunds as Myntra Credit</p>
          </div>
          <div className="feature-item">
            <img src="https://img.icons8.com/ios-filled/40/16a085/money.png" alt="Consolidated Money" />
            <h3>CONSOLIDATED MONEY</h3>
            <p>Gift cards, refunds and cashbacks in one place</p>
          </div>
          <div className="feature-item">
            <img src="https://img.icons8.com/ios-filled/40/16a085/discount.png" alt="Many More Benefits" />
            <h3>MANY MORE BENEFITS</h3>
            <p>Benefits and offers on using Myntra Credit</p>
          </div>
        </div>
      </div>
      <div className="right-section">
        <h2>TOP-UP YOUR MYNTRA CREDIT NOW!</h2>
        <p className="balance">₹0.00</p>
        <div className="buttons">
          <button className="topup-button">TOP UP</button>
          <button className="addgift-button">ADD GIFT CARD</button>
        </div>
        <div className="notes">
          <h3>PLEASE NOTE</h3>
          <ul>
            <li>Myntra Credit can't be cancelled or transferred to another account.</li>
            <li>It can't be withdrawn in the form of cash or transferred to any bank account.</li>
            <li>It can't be used to purchase Gift Cards.</li>
            <li>Net-banking and credit/debit cards issued in India can be used for Myntra Credit top up.</li>
            <li>Credits have an expiry. Check FAQs for more details.</li>
          </ul>
        </div>
        <div className="links">
          <a href="#terms" className="link">MYNTRA CREDIT T&C {'>'}</a>
          <a href="#giftcard" className="link">GIFT CARD T&C {'>'}</a>
          <a href="#faqs" className="link">FAQS {'>'}</a>
        </div>
      </div>
    </div>
  );
};

export default BbrandCredit;
