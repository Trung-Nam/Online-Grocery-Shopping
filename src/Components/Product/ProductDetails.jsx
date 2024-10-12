import React, { useState } from 'react'
import './ProductDetails.scss';
import { Rating } from '@mui/material';
import Slider from 'react-slick/lib/slider';
import { FaCheck, FaRegHeart } from 'react-icons/fa6';
import { CgArrowsExchangeV } from 'react-icons/cg';
import { RiArrowRightSLine } from 'react-icons/ri';
import { TbTruckDelivery } from "react-icons/tb";
import { IoFastFoodOutline } from "react-icons/io5";
import { AiOutlineDollarCircle } from "react-icons/ai";


const ProductDetails = () => {
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const [quantity, setQuantity] = useState(1);

    const images = [
        'https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62.jpg',
        'https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image2-47.jpg',
        'https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image3-35.jpg',
    ];

    const mainSliderSettings = {
        arrows: false,
        asNavFor: nav2, // Link with the thumbnails slider
        ref: (slider) => setNav1(slider),
    };

    const thumbnailSliderSettings = {
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: nav1, // Link with the main slider
        focusOnSelect: true,
        centerMode: true,
        arrows: false,
        dots: false,
        centerPadding: '0px',
    };


    const handleIncrease = () => {
        setQuantity(quantity + 1);
    };


    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className="product__details-wrapper">
            <div className="container">
                <nav className="breadcrumb">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <RiArrowRightSLine />
                        <li>Product Details</li>
                        <RiArrowRightSLine />
                        <li>Product Details 1</li>
                    </ul>
                </nav>
                <div className="product__details">
                    <article className="product">
                        <div className="product-header">
                            <h1 className="product_title entry-title">All Natural Italian-Style Chicken Meatballs</h1>
                            <div className="product-meta">
                                <div className="product-brand">
                                    <table className="product-attributes shop_attributes" aria-label="Product Details">
                                        <tbody>
                                            <tr className="product-attributes-item">
                                                <th className="product-attributes-item__label" scope="row">Brands:</th>
                                                <td className="product-attributes-item__value">
                                                    <p>Welch's</p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="product-rating">
                                    <div className="product-rating">
                                        <Rating name="read-only" value={4} readOnly className='star-rating' />
                                        <div className="count-rating">
                                            <a href="#reviews" className="review-link" rel="nofollow">
                                                <span className="count">1</span> review
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="sku-wrapper">
                                    <span>SKU: </span>
                                    <span className="sku">ZU49VOR</span>
                                </div>
                            </div>
                        </div>

                        <div className="product-details-wrapper d-flex">
                            <div className="product-thumbnails col-5">
                                <div className="product-badges">
                                    <span className="badge onsale">23%</span>
                                    <span className="badge">recommended</span>
                                </div>

                                {/* Main Slider */}
                                <Slider {...mainSliderSettings} className="main-slider">
                                    {images.map((image, index) => (
                                        <div key={index} >
                                            <img src={image} alt={`Product ${index}`} className="product-image w-100" />
                                        </div>
                                    ))}
                                </Slider>

                                {/* Thumbnails Slider */}
                                <Slider {...thumbnailSliderSettings} className="thumbnail-slider">
                                    {images.map((image, index) => (
                                        <div key={index} className="thumbnail-wrapper">
                                            <img src={image} alt={`Thumbnail ${index}`} className="thumbnail-image w-100" />
                                        </div>
                                    ))}
                                </Slider>
                            </div>

                            <div className="product-detail col-7 d-flex">

                                <div className="product__details-info col-7">
                                    <p className="price">
                                        <del>
                                            <span className="price-amount amount">
                                                <span className="price-currency">$</span>9.35
                                            </span>
                                        </del>

                                        <ins>
                                            <span className="price-amount amount">
                                                <span className="price-currency">$</span>7.25
                                            </span>
                                        </ins>

                                    </p>

                                    <div className="product-meta">
                                        <div className="stock product-available out-of-stock">
                                            <span className="stock out-of-stock">Out of stock</span>
                                        </div>
                                    </div>

                                    <div className="product-short-description">
                                        <p>
                                            Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent.
                                        </p>
                                    </div>

                                    <div className="add-to-cart-container">
                                        <button className="quantity-button" onClick={handleDecrease}>-</button>
                                        <span className="quantity-display">{quantity}</span>
                                        <button className="quantity-button" onClick={handleIncrease}>+</button>
                                        <button className="add-to-cart-button" onClick={() => alert(`Added ${quantity} item(s) to the cart`)}>
                                            Add to cart
                                        </button>
                                    </div>

                                    <div className="product-actions">
                                        <div
                                            className="btn-wrapper"
                                        >
                                            <a
                                                role="button"
                                                aria-label="Add to Wishlist"
                                                className="add_to_wishlist_button"
                                                href='/'
                                            >
                                                <FaRegHeart />
                                                <span>Add to Wishlist</span>
                                            </a>
                                        </div>

                                        <a
                                            href='/'
                                            className="compare-btn"
                                        >
                                            <CgArrowsExchangeV size={20} />
                                            Compare
                                        </a>
                                    </div>

                                    <div className="product-checklist">
                                        <ul>
                                            <li><FaCheck /> Type: Organic</li>
                                            <li><FaCheck /> MFG: Jun 4, 2021</li>
                                            <li><FaCheck /> LIFE: 30 days</li>
                                        </ul>
                                    </div>

                                    <div className="product_meta product-meta-bottom">
                                        <span className="sku_wrapper">
                                            SKU: <span className="sku">ZU49VOR</span>
                                        </span>

                                        <span className="posted_in">
                                            Category: <a href="/" rel="tag">Meats & Seafood</a>
                                        </span>

                                        <span className="tagged_as">
                                            Tags: <a href="/" rel="tag">chicken</a>,
                                            <a href="/" rel="tag">natural</a>,
                                            <a href="/" rel="tag">organic</a>
                                        </span>
                                    </div>
                                </div>

                                <div className="product-icons col-5">
                                    <div className="alert-message">Covid-19 Info: We keep delivering.</div>
                                    <div className="icon-messages">
                                        <ul>
                                            <li>
                                                <div className="icon">
                                                    <TbTruckDelivery />
                                                </div>
                                                <div className="message">Free Shipping applies to all orders over $100</div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <IoFastFoodOutline />
                                                </div>
                                                <div className="message">Guaranteed 100% Organic from natural farms</div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <AiOutlineDollarCircle />
                                                </div>
                                                <div className="message">1 Day Returns if you change your mind</div>
                                            </li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails