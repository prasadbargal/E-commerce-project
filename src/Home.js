
import React from 'react'
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


const Home = () => {
    return (
        <div>
            <div className="bannerimg">
                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={banner1} class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={banner2} class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={banner} class="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div className="trendindimages">
                <h1>Trending 2025</h1>
                <div className='imagess'>
                    <img src={home1} alt="" />
                    <img src={home2} alt="" />
                    <img src={home3} alt="" />
                    <img src={home4} alt="" />
                    <img src={home5} alt="" />
                    <img src={home6} alt="" />
                    <img src={home7} alt="" />
                    <img src={home8} alt="" />
                    <img src={home9} alt="" />
                    <img src={home10} alt="" />
                    <img src={home11} alt="" />
                    <img src={home12} alt="" />
                    <img src={home13} alt="" />
                </div>
            </div>
            <Producthome />
            
        </div>

    )
}

export default Home
