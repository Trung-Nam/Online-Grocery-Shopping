import React from 'react'
import Carousel from '../../Components/Header/Carousel/Carousel'
import './Home.scss'
import Slider from 'react-slick'
import { FaArrowRightLong } from 'react-icons/fa6'
const Home = () => {

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
    };
    return (
        <>
            <Carousel />

            <section className="container d-flex gap-4">
                <div className="col-3">
                    <div class="widget-container">
                        <div class="widget widget_text">
                            <div class="widget-body">
                                <div class="module-banner image align-left align-top full-text">
                                    <div class="module-body"><div class="banner-wrapper">
                                        <div class="banner-content"><div class="content-header">
                                            <div class="sub-text color-white">Bacola Natural Foods</div>
                                        </div>
                                            <div class="content-main">
                                                <h4 class="entry-subtitle color-text small xlight">Special Organic</h4>
                                                <h3 class="entry-title color-text">Roats Burger</h3>
                                            </div>
                                            <div class="content-footer d-flex flex-column">
                                                <span class="price-text color-text">only-from</span>
                                                <span class="price color-price">$14.99</span>
                                            </div>
                                        </div>
                                        <div class="banner-thumbnail">
                                            <img decoding="async" src={require('../../assets/images/widget-1.jpg')} alt="banner" class="w-100 rounded-3" />
                                        </div>
                                        <a href="/" class="overlay-link">
                                        </a>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="widget-container">
                        <div class="widget widget_text">
                            <div class="widget-body">
                                <div class="module-banner image align-left align-top full-text">
                                    <div class="module-body">
                                        <div class="banner-wrapper">
                                            <div class="banner-content">
                                                <div class="content-header">
                                                    <div class="sub-text color-white">Best Bakery Products</div>
                                                </div>
                                                <div class="content-main">
                                                    <h4 class="entry-subtitle color-text small xlight">Freshest Products</h4>
                                                    <h3 class="entry-title color-text">every hour.</h3>
                                                </div>
                                                <div class="content-footer d-flex flex-column">
                                                    <span class="price-text color-text">only-from</span>
                                                    <span class="price color-price">$24.99</span>
                                                </div>
                                            </div>
                                            <div class="banner-thumbnail">
                                                <img decoding="async" src={require('../../assets/images/widget-2.jpg')} alt="banner" class="w-100 rounded-3" />
                                            </div>
                                            <a href="/" class="overlay-link">
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-9">
                    <div class="module-header d-flex justify-content-center">
                        <div class="col-10">
                            <h4 class="entry-title">Best Sellers</h4>
                            <div class="entry-description">Do not miss the current offers until the end of March.</div>
                        </div>
                        <div class="col-2">
                            <a class="view-all-button" href="/">View All <FaArrowRightLong /></a>
                        </div>
                    </div>
                    <Slider {...settings}>
                        <div className="product__item">
                            <div className="product__item-image">
                                <img
                                    src={require("../../assets/images/product-image.jpg")}
                                    alt="product-image"
                                    className='w-100'
                                />
                            </div>
                        </div>
                    </Slider>
                </div>
            </section>
        </>
    )
}

export default Home