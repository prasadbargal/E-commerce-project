import React, { useState } from 'react';
import './Home.css';
import Producthome from './Producthome';
import banner from './homeimages1/homebanner.jpg';
import banner1 from './homeimages1/banner1.jpg';
import banner2 from './homeimages1/banner4.jpg';
import banner3 from './homeimages1/banner5.jpg'; // Note: banner3 is imported but not used, consider removing if unnecessary
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
      <div className="trendindimages">
        <h1>Trending 2025</h1>
        <ImageGallery />
      </div>
      <Producthome />
    </div>
  );
};

export default Home;
