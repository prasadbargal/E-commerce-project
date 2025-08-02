import React from 'react';
import './BbrandInsider.css'; // Import the CSS for styling

const BrandInsider = () => {
  return (
    <div className="brand-insider">
      <header className="hero" style={{ backgroundImage: `url('/hero-background.jpg')` }}>
        <h1>Brand Insider</h1>
      </header>

      <section className="about">
        <h2>About StyleWear</h2>
        <p>
          At StyleWear, we believe in providing the latest trends in fashion for everyone. Our collections are designed to inspire confidence and express individuality. Discover our wide range of clothing that caters to men, women, and children, along with stylish accessories.
        </p>
      </section>

      <section className="clothing-types">
        <h2>Types of Clothing Available</h2>
        <div className="clothing-type">
          <h3>Men’s Wear</h3>
          <p>Explore our collection of stylish and comfortable men's clothing.</p>
        </div>
        <div className="clothing-type">
          <h3>Women’s Wear</h3>
          <p>Discover the latest trends in women's fashion with our diverse range.</p>
        </div>
        <div className="clothing-type">
          <h3>Kids</h3>
          <p>Find fun and fashionable clothing for your little ones.</p>
        </div>
        <div className="clothing-type">
          <h3>Accessories</h3>
          <p>Complete your look with our stylish accessories.</p>
        </div>
      </section>

      <section className="featured-collections">
        <h2>Featured Collections</h2>
        <div className="collection">
          <img src="collection1.jpg" alt="Collection 1" />
          <h3>Summer Collection</h3>
          <p>Bright colors and light fabrics for the perfect summer vibe.</p>
        </div>
        <div className="collection">
          <img src="collection2.jpg" alt="Collection 2" />
          <h3>Winter Collection</h3>
          <p>Stay warm and stylish with our cozy winter wear.</p>
        </div>
        <div className="collection">
          <img src="collection3.jpg" alt="Collection 3" />
          <h3>Casual Wear</h3>
          <p>Comfort meets style in our casual wear collection.</p>
        </div>
      </section>

      <footer>
        <div className="footer-content">
          <h2>Contact Us</h2>
          <p>Email: support@stylewear.com</p>
          <p>Phone: +1 234 567 890</p>
          <div className="social-media">
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">Twitter</a>
          </div>
          <form className="newsletter">
            <label htmlFor="email">Subscribe to our newsletter:</label>
            <input type="email" id="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </footer>
    </div>
  );
};

export default BrandInsider;
