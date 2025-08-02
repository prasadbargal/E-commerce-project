import React, { useState } from 'react';
import './Home.css';
import Producthome from './Producthome';
import CustomCarousel from './CustomCarousel';
import banner from './homeimages1/homebanner.jpg';
import banner1 from './homeimages1/banner1.jpg';
import banner2 from './homeimages1/banner4.jpg';
import home1 from './homeimages1/men-1.webp';
import home2 from './homeimages1/trend9.jpg';
import home3 from './homeimages1/trend9.jpg';
import home4 from './homeimages1/trend8.jpg';
import home5 from './homeimages1/trend7.avif';
import home6 from './homeimages1/trend4.jpeg';
import home7 from './homeimages1/trend5.jpg';
import home8 from './homeimages1/trend6.jpg';
import home9 from './homeimages1/trend7.avif';
import home10 from './homeimages1/trend7.jpeg';
import home11 from './homeimages1/trend7.jpg';
import home12 from './homeimages1/trend8.jpg';
import home13 from './homeimages1/trend9.jpg';

import men_fashion from './homeimages1/men fashion.jpg'
import women_fashion from './homeimages1/women fashion.webp'
import kids_fashion from './homeimages1/kids fashion.webp'

const images = [home1, home2, home3, home4, home5, home6, home7, home8, home9, home10, home11, home12, home13];

const ImageGallery = () => {
  const [centerIndex, setCenterIndex] = useState(0);

  const totalImages = images.length;

  // Helper to get index with wrap-around
  const getIndex = (index) => {
    return (index + totalImages) % totalImages;
  };

  const handleNext = () => {
    setCenterIndex(getIndex(centerIndex + 1));
  };

  const handlePrev = () => {
    setCenterIndex(getIndex(centerIndex - 1));
  };

  // Number of images to show in the carousel (including center image)
  const visibleCount = 5;
  const half = Math.floor(visibleCount / 2);

  // Get indices of visible images with wrap-around
  const visibleIndices = [];
  for (let i = centerIndex - half; i <= centerIndex + half; i++) {
    visibleIndices.push(getIndex(i));
  }

  return (
    <div className="image-gallery-container">
      <button className="arrow-button left-arrow" onClick={handlePrev} aria-label="Previous Image">
        &#9664;
      </button>
      <div className="images-row">
        {visibleIndices.map((idx) => {
          const isCenter = idx === centerIndex;
          return (
            <img
              key={idx}
              src={images[idx]}
              alt={`Fashion look ${idx + 1}`}
              className={isCenter ? 'center-image' : 'side-image'}
              style={{ cursor: 'pointer' }}
            />
          );
        })}
      </div>
      <button className="arrow-button right-arrow" onClick={handleNext} aria-label="Next Image">
        &#9654;
      </button>
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <CustomCarousel />
      <div className="bannerimg">
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={banner1} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={banner2} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={banner} className="d-block w-100" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

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
              <a href="#women" className="btn btn-primary">Shop Now</a>
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

      {/* Trending Images Section */}
      <div className="trendingimages">
        <h1>Trending 2025</h1>
        <ImageGallery />
      </div>

      {/* Product Section */}
      <Producthome />
    </div>
  );
};

export default Home;
