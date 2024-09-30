import React from 'react'
import { IoIosMenu } from 'react-icons/io';
import { FaAngleDown } from 'react-icons/fa6';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
const Navigation = () => {
    return (
        <div className="header-nav d-flex align-items-center">
            <div className="container">
                <div className="row">
                    <div className="col-sm-3 all-categories">
                        <Button className='all-categories-btn align-items-center'>
                            <span className='menu-icon me-2'>
                                <IoIosMenu />
                            </span>
                            <span>All Categories</span>
                            <span className='angle-down-icon ms-2'>
                                <FaAngleDown />
                            </span>
                        </Button>
                        <div className='all-categories-description'>
                            TOTAL 63 PRODUCTS
                        </div>
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