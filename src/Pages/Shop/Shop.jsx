import React, { useState } from 'react'

import { RiArrowRightSLine } from "react-icons/ri";
import categories from '../../Constants/Data'
import './Shop.scss'
import { FaPlus } from 'react-icons/fa6';

const Shop = () => {
    const [activeIndex, setActiveIndex] = useState(null);
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