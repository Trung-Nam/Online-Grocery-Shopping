import React, { useState } from 'react'

import { RiArrowRightSLine } from "react-icons/ri";
import categories from '../../Constants/Data'
import './Shop.scss'
import { FaPlus } from 'react-icons/fa6';

const Shop = () => {
    const [activeSubmenu, setActiveSubmenu] = useState(null);
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
                                                            <li
                                                                className="category__lists-item"
                                                                key={index}
                                                            >
                                                                <a className="d-flex align-items-center" href={item.link}>
                                                                    <input name="product_cat[]" value="" id="" type="checkbox" />
                                                                    <span>
                                                                        {item.title}
                                                                    </span>
                                                                    {item.submenu.length !== 0 && <FaPlus
                                                                        onClick={() => setActiveSubmenu(item.submenu)}
                                                                    />}
                                                                </a>
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