import React, { useState } from 'react'
import './Home.css';
import Producthome from './Producthome';
import banner from './homeimages1/homebanner.jpg';
import banner1 from './homeimages1/banner1.jpg';
import banner2 from './homeimages1/banner4.jpg';
import banner3 from './homeimages1/banner5.jpg';
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

const VISIBLE_SLIDES = 7; // 3 left + center + 3 right

const Home = () => {
    const trendingImages = [
        home1, home2, home3, home4, home5, home6, home7, home8, home9, home10, home11, home12, home13
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            (prevIndex - 1 + trendingImages.length) % trendingImages.length
        );
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            (prevIndex + 1) % trendingImages.length
        );
    };

    // Calculate the indices of visible slides centered around currentIndex
    const getVisibleIndices = () => {
        const indices = [];
        const half = Math.floor(VISIBLE_SLIDES / 2);
        for (let i = -half; i <= half; i++) {
            indices.push((currentIndex + i + trendingImages.length) % trendingImages.length);
        }
        return indices;
    };

    const visibleIndices = getVisibleIndices();

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
                <div className="carousel-container">
                    <button className="carousel-arrow left-arrow" onClick={prevSlide} aria-label="Previous Slide">&#10094;</button>
                    <div className="imagess">
                        {visibleIndices.map((index) => {
                            let className = "carousel-image inactive";
                            if (index === currentIndex) {
                                className = "carousel-image active";
                            } else if (
                                (index + trendingImages.length) % trendingImages.length === (currentIndex - 1 + trendingImages.length) % trendingImages.length ||
                                (index + trendingImages.length) % trendingImages.length === (currentIndex + 1) % trendingImages.length ||
                                (index + trendingImages.length) % trendingImages.length === (currentIndex - 2 + trendingImages.length) % trendingImages.length ||
                                (index + trendingImages.length) % trendingImages.length === (currentIndex + 2) % trendingImages.length ||
                                (index + trendingImages.length) % trendingImages.length === (currentIndex - 3 + trendingImages.length) % trendingImages.length ||
                                (index + trendingImages.length) % trendingImages.length === (currentIndex + 3) % trendingImages.length
                            ) {
                                className = "carousel-image side";
                            }
                            return (
                                <img
                                    key={index}
                                    src={trendingImages[index]}
                                    alt={`Trending ${index + 1}`}
                                    className={className}
                                />
                            );
                        })}
                    </div>
                    <button className="carousel-arrow right-arrow" onClick={nextSlide} aria-label="Next Slide">&#10095;</button>
                </div>
            </div>
            <Producthome />
        </div>
    )
}

export default Home
