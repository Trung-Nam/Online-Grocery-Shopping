import React from 'react'
import './Footer.scss'
import { MdOutlineEmail } from 'react-icons/md'
import { IoFastFoodOutline } from 'react-icons/io5'
import { TbTruckDelivery } from 'react-icons/tb'
import { RiDiscountPercentLine } from 'react-icons/ri'
import { AiOutlineDollar } from 'react-icons/ai'

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="footer-subscribe">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-5">
                            <div className="subscribe-content">
                                <h6 className="entry-subtitle">$20 discount for your first order</h6>
                                <h3 className="entry-title">Join our newsletter and get...</h3>
                                <div className="entry-teaser">
                                    <p>Join our email subscription now to get updates on promotions and coupons.</p>
                                </div>

                                <div className="form-wrapper">
                                    <form className="d-flex justify-content-center align-items-center">
                                        <div className="input-group">
                                            <span className="input-group-text bg-white">
                                                <MdOutlineEmail size={24} />
                                            </span>
                                            <input
                                                type="email"
                                                className="subscribe-input"
                                                placeholder="Your email address"
                                                aria-label="Email"
                                                required
                                            />
                                            <button className="btn" type="submit">
                                                Subscribe
                                            </button>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-lg-7">
                            <div className="subscribe-image">
                                <img
                                    src={require('../../assets/images/coupon.png')}
                                    alt="subscribe"
                                    className="img-fluid"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="footer-icon-boxes border-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-3 border-end">
                            <div className="icon-box">
                                <div className="icon-box-icon">
                                    <IoFastFoodOutline />
                                </div>
                                <div className="icon-box-detail">
                                    <span>Everyday fresh products</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-3 border-end">
                            <div className="icon-box">
                                <div className="icon-box-icon">
                                    <TbTruckDelivery />
                                </div>
                                <div className="icon-box-detail">
                                    <span>Free delivery for order over $70</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-3 border-end">
                            <div className="icon-box">
                                <div className="icon-box-icon">
                                    <RiDiscountPercentLine />
                                </div>
                                <div className="icon-box-detail">
                                    <span>Daily Mega Discounts</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="icon-box">
                                <div className="icon-box-icon">
                                    <AiOutlineDollar />
                                </div>
                                <div className="icon-box-detail">
                                    <span>Best price on the market</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer