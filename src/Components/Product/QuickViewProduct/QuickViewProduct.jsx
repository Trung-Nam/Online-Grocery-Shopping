import React, { useState } from 'react';
import './QuickViewProduct.scss';
import { Rating } from '@mui/material';
import Slider from 'react-slick/lib/slider';
import { FaCheck, FaRegHeart } from 'react-icons/fa6';
import { CgArrowsExchangeV } from "react-icons/cg";
const QuickViewProduct = () => {
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);

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
    return (
        <div
            className="modal fade"
            id="quick-view-product"
            tabIndex="-1"
            aria-labelledby="productModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-dialog-centered modal-xl">
                <div className="modal-content quick-modal-content">
                    {/* Close Button */}
                    <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    />
                    <div className="quick-product-wrapper">
                        <article className="product">
                            <div className="product-header">
                                <h1 className="product_title entry-title">All Natural Italian-Style Chicken Meatballs</h1>
                                <div className="product-meta">
                                    <div className="product-brand">
                                        <table className="product-attributes shop_attributes" aria-label="Product Details">
                                            <tbody>
                                                <tr className="product-attributes-item">
                                                    <th className="product-attributes-item__label" scope="row">Brands</th>
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

                            <div className="quick-product-wrapper d-flex">
                                <div className="product-thumbnails col-6">
                                    <div className="product-badges">
                                        <span className="badge onsale">23%</span>
                                        <span className="badge">recommended</span>
                                    </div>

                                    {/* Main Slider */}
                                    <Slider {...mainSliderSettings} className="main-slider">
                                        {images.map((image, index) => (
                                            <div key={index}>
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

                                <div className="product-detail col-6">

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
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuickViewProduct