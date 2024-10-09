import React from 'react'

import { RiArrowRightSLine } from "react-icons/ri";
import './Shop.scss'

const Shop = () => {
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

                        <header class="products-header"></header>

                        <div className="row content-wrapper">
                            <div id='sidebar' className="col-12 col-md-3 col-lg-3 content-secondary site-sidebar">
                                left
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