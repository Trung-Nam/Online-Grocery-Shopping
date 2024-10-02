import React, { useState } from 'react'
import { IoIosMenu } from 'react-icons/io';
import { FaAngleDown, FaAngleRight } from 'react-icons/fa6';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
const Navigation = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <div className="header-nav d-flex align-items-center border-bottom">
            <div className="container">
                <div className="row">
                    <div className="col-sm-3 all-categories">
                        <div className="dropdown">
                            <Button
                                className="all-categories-btn align-items-center"
                                type="button"
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                aria-expanded="false"
                            >
                                <span className="menu-icon me-2">
                                    <IoIosMenu />
                                </span>
                                <span>All Categories</span>
                                <span className="angle-down-icon ms-2">
                                    <FaAngleDown />
                                </span>
                            </Button>
                            {isDropdownOpen && (
                                <ul className="dropdown-menu custom-dropdown-menu">
                                    <li>
                                        <a className="dropdown-item d-flex align-items-center" href="/">
                                            <img src={require('../../assets/images/vegetable.png')} alt="vegetable-icon" />
                                            Fruits & Vegetables
                                            <FaAngleRight />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item d-flex align-items-center" href="/">
                                            <img src={require('../../assets/images/barbecue.png')} alt="meat-icon" />
                                            Meats & Seafood
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item d-flex align-items-center" href="/">
                                            <img src={require('../../assets/images/english-breakfast.png')} alt="breakfast-icon" />
                                            Breakfast & Dairy
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item d-flex align-items-center" href="/">
                                            <img src={require('../../assets/images/healthy-drink.png')} alt="healthy-drink-icon" />
                                            Beverages
                                            <FaAngleRight />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item d-flex align-items-center" href="/">
                                            <img src={require('../../assets/images/bread.png')} alt="bread-icon" />
                                            Breads & Bakery
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item d-flex align-items-center" href="/">
                                            <img src={require('../../assets/images/frozen-food.png')} alt="frozen-food-icon" />
                                            Frozen Foods
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/">
                                            <img src={require('../../assets/images/bar.png')} alt="bar-icon" />
                                            Biscuits & Snacks
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/">
                                            <img src={require('../../assets/images/basket.png')} alt="basket-icon" />
                                            Grocery & Staples
                                        </a>
                                    </li>
                                </ul>
                            )}
                        </div>
                        <div className="all-categories-description">TOTAL 63 PRODUCTS</div>
                    </div>


                    <div className="col-sm-9 primary-menu d-flex align-items-center">
                        <ul className='list-group list-group-horizontal ms-auto'>
                            <li className='list-group-item'>
                                <Link to='/'>Home</Link>
                            </li>
                            <li className='list-group-item'>
                                <Link to='/'>Shop</Link>
                            </li>
                            <li className='list-group-item'>
                                <Link to='/'>Meats & Seafood</Link>
                            </li>
                            <li className='list-group-item'>
                                <Link to='/'>Bakery</Link>
                            </li>
                            <li className='list-group-item'>
                                <Link to='/'>Beverages</Link>
                            </li>
                            <li className='list-group-item'>
                                <Link to='/'>Blog</Link>
                            </li>
                            <li className='list-group-item'>
                                <Link to='/'>Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navigation