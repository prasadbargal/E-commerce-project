import React from 'react';
import './Home.css';
import Producthome from './Producthome';

import men_fashion from './homeimages1/men fashion.jpg'
import women_fashion from './homeimages1/women fashion.webp'
import kids_fashion from './homeimages1/kids fashion.webp'

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <h1 className="fade-in">Elevate Your Style</h1>
          <p className="fade-in delay-1">
            Discover our exclusive collection of premium fashion for men, women and kids.
          </p>
          <div className="fade-in delay-2">
            <a href="#shop" className="btn btn-primary">Shop Now</a>
            <a href="#categories" className="btn btn-outline">Browse Collections</a>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories" id="categories">
        <div className="section-title">
          <h2>Our Collections</h2>
          <p>Shop by category</p>
        </div>

        <div className="category-grid">
          {/* Men's Fashion */}
          <div className="category-card fade-in">
            <img 
              src={men_fashion} 
              alt="Stylish men's fashion collection" 
              className="category-img" 
            />
            <div className="category-content">
              <h3>Men's Fashion</h3>
              <a href="#men" className="btn btn-primary">Shop Now</a>
            </div>
          </div>

          {/* Women's Fashion */}
          <div className="category-card fade-in delay-1">
            <img 
              src={women_fashion}
              alt="Elegant women's fashion collection" 
              className="category-img" 
            />
            <div className="category-content">
              <h3>Women's Fashion</h3>
              <a href="Women.js" className="btn btn-primary">Shop Now</a>
            </div>
          </div>

          {/* Kids Fashion */}
          <div className="category-card fade-in delay-2">
            <img 
              src={kids_fashion} 
              alt="Adorable kids fashion collection" 
              className="category-img" 
            />
            <div className="category-content">
              <h3>Kids Fashion</h3>
              <a href="#kids" className="btn btn-primary">Shop Now</a>
            </div>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <Producthome />
    </div>
  );
};

export default Home;
