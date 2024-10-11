import React, { useState } from 'react'

import { RiArrowRightSLine } from "react-icons/ri";
import categories from '../../Constants/Data'
import './Shop.scss'
import { FaPlus } from 'react-icons/fa6';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';

const Shop = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [value, setValue] = useState([0, 100]);
    return (
        <main id="main" className="site-primary">
            <div className="site-content">
                <div className="homepage-content">
                    <div className="container">
                        <nav className="breadcrumb">
                            <ul>
                                <li><a href="/">Home</a></li>
                                <RiArrowRightSLine />
                                <li>Shop</li>
                            </ul>
                        </nav>

                        <header className="products-header"></header>

                        <div className="row content-wrapper">
                            <div id='sidebar' className="col-12 col-md-3 col-lg-3 content-secondary site-sidebar">
                                <div className="site-scroll">
                                    <div className="sidebar-inner">
                                        {/* <div className="sidebar-mobile-header"></div>  */}
                                        <div className="product__categories">
                                            <h4 className="product__categories-title">Product Categories</h4>

                                            <div className="site-checkbox-lists">
                                                <div className="site-scroll ps">
                                                    <ul className="category__lists">
                                                        {categories?.map((item, index) => (
                                                            <li className="category__lists-item" key={index}>
                                                                <a className="d-flex align-items-center" href="/">
                                                                    <input
                                                                        name="product_cat[]"
                                                                        value={item.value}
                                                                        id={`checkbox-${index}`}
                                                                        type="checkbox"
                                                                    />
                                                                    <span
                                                                        onClick={() => {
                                                                            const checkbox = document.getElementById(`checkbox-${index}`);
                                                                            checkbox.checked = !checkbox.checked;
                                                                        }}
                                                                    >
                                                                        {item.title}
                                                                    </span>
                                                                </a>
                                                                {item.submenu.length !== 0 && (
                                                                    <FaPlus onClick={() => setActiveIndex(activeIndex === index ? null : index)} /> // Toggle submenu for clicked item
                                                                )}
                                                                {activeIndex === index && (
                                                                    <ul className="submenu">
                                                                        {item.submenu.map((subItem, subIndex) => (
                                                                            <li key={subIndex} className='submenu-item'>
                                                                                <a className="dropdown-item d-flex align-items-center" href={subItem.link}>
                                                                                    <input
                                                                                        name={`sub_product_cat[]`}
                                                                                        value={subItem.value}
                                                                                        id={`sub-checkbox-${index}-${subIndex}`}
                                                                                        type="checkbox"
                                                                                    />
                                                                                    <span
                                                                                        onClick={() => {
                                                                                            const checkbox = document.getElementById(`sub-checkbox-${index}-${subIndex}`);
                                                                                            checkbox.checked = !checkbox.checked;
                                                                                        }}
                                                                                    >
                                                                                        {subItem.title}
                                                                                    </span>
                                                                                </a>
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                )}
                                                            </li>
                                                        ))}
                                                    </ul>


                                                </div>
                                            </div>
                                        </div>

                                        <div className="product__price-filter">
                                            <h4 className="product__price-filter-title">Filter by price</h4>
                                            <RangeSlider
                                                value={value}
                                                onInput={setValue}
                                            />
                                            <div className="price_slider-amount">
                                                <div className="price_label">
                                                    Price: <span className="from">$0</span> — <span className="to">$70</span>
                                                </div>
                                                <button type='submit' className="btn custom-btn">Filter</button>
                                            </div>
                                        </div>

                                        <div className="product__status">
                                            <h4 className="product__status-title">Product Status</h4>
                                            <div className="site-checkbox-lists">
                                                <div className="site-scroll ps">
                                                    <ul>
                                                        <li>
                                                            <a href="/">
                                                                <input name="stockonsale" value="instock" id="instock" type="checkbox" />
                                                                <label>
                                                                    <span>In Stock</span>
                                                                </label>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/">
                                                                <input name="stockonsale" value="onsale" id="onsale" type="checkbox" />
                                                                <label>
                                                                    <span>On Sale</span>
                                                                </label>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="product__brands">
                                            <h4 class="product__brands-title">Brands</h4>
                                            <ul className="layered-nav-list">
                                                <li className="layered-nav-list__item">
                                                    <input type="checkbox" />
                                                    <a rel="nofollow" href="/">
                                                        Frito Lay
                                                    </a>
                                                    <span className="count">(10)</span>
                                                </li>
                                                <li className="layered-nav-list__item">

                                                    <input type="checkbox" />
                                                    <a rel="nofollow" href="/">
                                                        Nespresso
                                                    </a>
                                                    <span className="count">(11)</span>
                                                </li>
                                                <li className="layered-nav-list__item">

                                                    <input type="checkbox" />
                                                    <a rel="nofollow" href="/">
                                                        Oreo
                                                    </a>
                                                    <span className="count">(9)</span>
                                                </li>
                                                <li className="layered-nav-list__item">
                                                    <input type="checkbox" />
                                                    <a rel="nofollow" href="/">
                                                        Quaker
                                                    </a>
                                                    <span className="count">(10)</span>
                                                </li>
                                                <li className="layered-nav-list__item">
                                                    <input type="checkbox" />
                                                    <a rel="nofollow" href="/">
                                                        Welch's
                                                    </a>
                                                    <span className="count">(10)</span>
                                                </li>
                                            </ul>

                                        </div>

                                        <div className="media__image">
                                            <img
                                                width="1280"
                                                height="1750"
                                                src={require("../../assets/images/sidebar-banner.gif")}
                                                className="image wp-image-1184 attachment-full size-full"
                                                alt=""
                                                style={{ maxWidth: '100%', height: 'auto' }}
                                                decoding="async"
                                            />
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-12 col-lg-9 content-primary">
                                right
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Shop