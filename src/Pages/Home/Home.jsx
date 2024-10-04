import React from 'react'
import Carousel from '../../Components/Header/Carousel/Carousel'
import './Home.scss'
import Slider from 'react-slick'
import { FaArrowRightLong, FaRegHeart } from 'react-icons/fa6'
import { Rating } from '@mui/material'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
const Home = () => {

    const CustomPrevArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{
                    ...style,
                    width: '40px',
                    height: '40px',
                    backgroundColor: 'white',
                    borderRadius: '50%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    boxShadow: '0 0px 5px rgba(0, 0, 0, .2)',
                    cursor: 'pointer',
                    zIndex: '1',
                }}
                onClick={onClick}
            >
                <IoIosArrowBack style={{ fontSize: '24px', color: 'black', marginRight: '4px' }} />
            </div>
        );
    }

    const CustomNextArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{
                    ...style,
                    width: '40px',
                    height: '40px',
                    backgroundColor: 'white',
                    borderRadius: '50%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    boxShadow: '0 0px 5px rgba(0, 0, 0, .2)',
                    cursor: 'pointer',
                }}
                onClick={onClick}
            >
                <IoIosArrowForward style={{ fontSize: '24px', color: 'black', marginLeft: '4px' }} />
            </div>
        );
    }

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />
    };




    return (
        <>
            <Carousel />
            <section className="container d-flex">
                <div className="col-3">
                    <div className="widget-container">
                        <div className="widget widget_text">
                            <div className="widget-body">
                                <div className="module-banner image align-left align-top full-text">
                                    <div className="module-body"><div className="banner-wrapper">
                                        <div className="banner-content"><div className="content-header">
                                            <div className="sub-text color-white">Bacola Natural Foods</div>
                                        </div>
                                            <div className="content-main">
                                                <h4 className="entry-subtitle color-text small xlight">Special Organic</h4>
                                                <h3 className="entry-title color-text">Roats Burger</h3>
                                            </div>
                                            <div className="content-footer d-flex flex-column">
                                                <span className="price-text color-text">only-from</span>
                                                <span className="price color-price">$14.99</span>
                                            </div>
                                        </div>
                                        <div className="banner-thumbnail">
                                            <img decoding="async" src={require('../../assets/images/widget-1.jpg')} alt="banner" className="rounded-3" />
                                        </div>
                                        <a href="/" className="overlay-link">
                                        </a>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="widget-container">
                        <div className="widget widget_text">
                            <div className="widget-body">
                                <div className="module-banner image align-left align-top full-text">
                                    <div className="module-body">
                                        <div className="banner-wrapper">
                                            <div className="banner-content">
                                                <div className="content-header">
                                                    <div className="sub-text color-white">Best Bakery Products</div>
                                                </div>
                                                <div className="content-main">
                                                    <h4 className="entry-subtitle color-text small xlight">Freshest Products</h4>
                                                    <h3 className="entry-title color-text">every hour.</h3>
                                                </div>
                                                <div className="content-footer d-flex flex-column">
                                                    <span className="price-text color-text">only-from</span>
                                                    <span className="price color-price">$24.99</span>
                                                </div>
                                            </div>
                                            <div className="banner-thumbnail">
                                                <img decoding="async" src={require('../../assets/images/widget-2.jpg')} alt="banner" className="rounded-3" />
                                            </div>
                                            <a href="/" className="overlay-link">
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-9">
                    <div className="module-header d-flex justify-content-center">
                        <div className="col-10">
                            <h4 className="entry-title">Best Sellers</h4>
                            <div className="entry-description">Do not miss the current offers until the end of March.</div>
                        </div>
                        <div className="col-2">
                            <a className="view-all-button" href="/">View All <FaArrowRightLong size={14} style={{ marginLeft: '4px', marginBottom: '2px' }} /></a>
                        </div>
                    </div>

                    <div className="best-sellers-products border rounded">
                        <Slider {...settings}>
                            <div className="product-wrapper border-end">
                                <div className="thumbnail-wrapper">
                                    <div className="product-badges">
                                        <span className="badge on-sale">26%</span>
                                        <span className="badge recommended">recommended</span>
                                    </div>
                                    <a href="/">
                                        <img
                                            decoding="async"
                                            src={require('../../assets/images/product-image.jpg')}
                                            alt="Weather's Original Caramel Hard Candies"
                                            className='w-100'
                                        />
                                    </a>
                                    <div className="product-buttons">
                                        <a href="/" className="detail-btn quick-view-button shadow">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                <path d="M128 32V0H16C7.163 0 0 7.163 0 16v112h32V54.56L180.64 203.2l22.56-22.56L54.56 32H128zM496 0H384v32h73.44L308.8 180.64l22.56 22.56L480 54.56V128h32V16c0-8.837-7.163-16-16-16zM480 457.44L331.36 308.8l-22.56 22.56L457.44 480H384v32h112c8.837 0 16-7.163 16-16V384h-32v73.44zM180.64 308.64L32 457.44V384H0v112c0 8.837 7.163 16 16 16h112v-32H54.56L203.2 331.36l-22.56-22.72z" />
                                            </svg>
                                        </a>

                                        <a href='/' className='like-btn shadow'>
                                            <FaRegHeart />
                                        </a>

                                    </div>
                                </div>

                                <div className="content-wrapper">
                                    <h3 className="product-title">
                                        <a href="/" title="Werther’s Original Caramel Hard Candies">Werther’s Original Caramel Hard Candies</a>
                                    </h3>
                                    <div className="product-meta">
                                        <div className="product-available in-stock">In Stock</div>
                                    </div>

                                    <div className="product-rating">
                                        <Rating name="read-only" value={5} readOnly className='star-rating' />
                                        <span className="count-rating">10</span>
                                    </div>

                                    <span className="price">
                                        <del>
                                            <span className="price-amount">
                                                <bdi>
                                                    <span className="price-amount-number">$</span>20.00
                                                </bdi>
                                            </span>
                                        </del>
                                        <ins>
                                            <span className="price-amount">
                                                <bdi>
                                                    <span className="price-amount-number">$</span>14.97
                                                </bdi>
                                            </span>
                                        </ins>
                                    </span>

                                    <div className="product-button-group w-100">
                                        <a href="/">Add to cart</a>
                                    </div>
                                </div>
                            </div>
                            <div className="product-wrapper border-end">
                                <div className="thumbnail-wrapper">
                                    <div className="product-badges">
                                        <span className="badge on-sale">26%</span>
                                    </div>
                                    <a href="/">
                                        <img
                                            decoding="async"
                                            src={require('../../assets/images/product-image.jpg')}
                                            alt="Weather's Original Caramel Hard Candies"
                                            className='w-100'
                                        />
                                    </a>
                                    <div className="product-buttons">
                                        <a href="/" className="detail-btn quick-view-button shadow">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                <path d="M128 32V0H16C7.163 0 0 7.163 0 16v112h32V54.56L180.64 203.2l22.56-22.56L54.56 32H128zM496 0H384v32h73.44L308.8 180.64l22.56 22.56L480 54.56V128h32V16c0-8.837-7.163-16-16-16zM480 457.44L331.36 308.8l-22.56 22.56L457.44 480H384v32h112c8.837 0 16-7.163 16-16V384h-32v73.44zM180.64 308.64L32 457.44V384H0v112c0 8.837 7.163 16 16 16h112v-32H54.56L203.2 331.36l-22.56-22.72z" />
                                            </svg>
                                        </a>

                                        <a href='/' className='like-btn shadow'>
                                            <FaRegHeart />
                                        </a>

                                    </div>
                                </div>

                                <div className="content-wrapper">
                                    <h3 className="product-title">
                                        <a href="/" title="Werther’s Original Caramel Hard Candies">Werther’s Original Caramel Hard Candies</a>
                                    </h3>
                                    <div className="product-meta">
                                        <div className="product-available in-stock">In Stock</div>
                                    </div>

                                    <div className="product-rating">
                                        <Rating name="read-only" value={5} readOnly className='star-rating' />
                                        <span className="count-rating">10</span>
                                    </div>

                                    <span className="price">
                                        <del>
                                            <span className="price-amount">
                                                <bdi>
                                                    <span className="price-amount-number">$</span>20.00
                                                </bdi>
                                            </span>
                                        </del>
                                        <ins>
                                            <span className="price-amount">
                                                <bdi>
                                                    <span className="price-amount-number">$</span>14.97
                                                </bdi>
                                            </span>
                                        </ins>
                                    </span>

                                    <div className="product-button-group w-100">
                                        <a href="/">Add to cart</a>
                                    </div>
                                </div>
                            </div>
                            <div className="product-wrapper border-end">
                                <div className="thumbnail-wrapper">
                                    <div className="product-badges">
                                        <span className="badge on-sale">26%</span>
                                    </div>
                                    <a href="/">
                                        <img
                                            decoding="async"
                                            src={require('../../assets/images/product-image.jpg')}
                                            alt="Weather's Original Caramel Hard Candies"
                                            className='w-100'
                                        />
                                    </a>
                                    <div className="product-buttons">
                                        <a href="/" className="detail-btn quick-view-button shadow">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                <path d="M128 32V0H16C7.163 0 0 7.163 0 16v112h32V54.56L180.64 203.2l22.56-22.56L54.56 32H128zM496 0H384v32h73.44L308.8 180.64l22.56 22.56L480 54.56V128h32V16c0-8.837-7.163-16-16-16zM480 457.44L331.36 308.8l-22.56 22.56L457.44 480H384v32h112c8.837 0 16-7.163 16-16V384h-32v73.44zM180.64 308.64L32 457.44V384H0v112c0 8.837 7.163 16 16 16h112v-32H54.56L203.2 331.36l-22.56-22.72z" />
                                            </svg>
                                        </a>

                                        <a href='/' className='like-btn shadow'>
                                            <FaRegHeart />
                                        </a>

                                    </div>
                                </div>

                                <div className="content-wrapper">
                                    <h3 className="product-title">
                                        <a href="/" title="Werther’s Original Caramel Hard Candies">Werther’s Original Caramel Hard Candies</a>
                                    </h3>
                                    <div className="product-meta">
                                        <div className="product-available in-stock">In Stock</div>
                                    </div>

                                    <div className="product-rating">
                                        <Rating name="read-only" value={5} readOnly className='star-rating' />
                                        <span className="count-rating">10</span>
                                    </div>

                                    <span className="price">
                                        <del>
                                            <span className="price-amount">
                                                <bdi>
                                                    <span className="price-amount-number">$</span>20.00
                                                </bdi>
                                            </span>
                                        </del>
                                        <ins>
                                            <span className="price-amount">
                                                <bdi>
                                                    <span className="price-amount-number">$</span>14.97
                                                </bdi>
                                            </span>
                                        </ins>
                                    </span>

                                    <div className="product-button-group w-100">
                                        <a href="/">Add to cart</a>
                                    </div>
                                </div>
                            </div>
                            <div className="product-wrapper border-end">
                                <div className="thumbnail-wrapper">
                                    <div className="product-badges">
                                        <span className="badge on-sale">26%</span>
                                    </div>
                                    <a href="/">
                                        <img
                                            decoding="async"
                                            src={require('../../assets/images/product-image.jpg')}
                                            alt="Weather's Original Caramel Hard Candies"
                                            className='w-100'
                                        />
                                    </a>
                                    <div className="product-buttons">
                                        <a href="/" className="detail-btn quick-view-button shadow">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                <path d="M128 32V0H16C7.163 0 0 7.163 0 16v112h32V54.56L180.64 203.2l22.56-22.56L54.56 32H128zM496 0H384v32h73.44L308.8 180.64l22.56 22.56L480 54.56V128h32V16c0-8.837-7.163-16-16-16zM480 457.44L331.36 308.8l-22.56 22.56L457.44 480H384v32h112c8.837 0 16-7.163 16-16V384h-32v73.44zM180.64 308.64L32 457.44V384H0v112c0 8.837 7.163 16 16 16h112v-32H54.56L203.2 331.36l-22.56-22.72z" />
                                            </svg>
                                        </a>

                                        <a href='/' className='like-btn shadow'>
                                            <FaRegHeart />
                                        </a>

                                    </div>
                                </div>

                                <div className="content-wrapper">
                                    <h3 className="product-title">
                                        <a href="/" title="Werther’s Original Caramel Hard Candies">Werther’s Original Caramel Hard Candies</a>
                                    </h3>
                                    <div className="product-meta">
                                        <div className="product-available in-stock">In Stock</div>
                                    </div>

                                    <div className="product-rating">
                                        <Rating name="read-only" value={5} readOnly className='star-rating' />
                                        <span className="count-rating">10</span>
                                    </div>

                                    <span className="price">
                                        <del>
                                            <span className="price-amount">
                                                <bdi>
                                                    <span className="price-amount-number">$</span>20.00
                                                </bdi>
                                            </span>
                                        </del>
                                        <ins>
                                            <span className="price-amount">
                                                <bdi>
                                                    <span className="price-amount-number">$</span>14.97
                                                </bdi>
                                            </span>
                                        </ins>
                                    </span>

                                    <div className="product-button-group w-100">
                                        <a href="/">Add to cart</a>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>

                    <div className="module-body-banner w-100">
                        <div className="banner-wrapper rounded">
                            <div className="banner-content">
                                <h4 className="sub-text color-info-dark">Always Taking Care</h4>
                                <h3 className="entry-title mini color-text-lighter">In store or online your health &amp; safety is our top priority.</h3>
                            </div>
                            <div className="banner-thumbnail">
                                <img decoding="async" src={require('../../assets/images/banner-box1.jpg')} alt="banner" />
                            </div>
                            {/* <a href="/" className="overlay-link"></a> */}
                        </div>
                    </div>

                    <div className="module-header d-flex justify-content-center">
                        <div className="col-10">
                            <h4 className="entry-title">HOT PRODUCT FOR <span className="text-danger">THIS WEEK</span></h4>
                            <div className="entry-description">Dont miss this opportunity at a special discount just for this week.</div>
                        </div>
                        <div className="col-2">
                            <a className="view-all-button" href="/">View All <FaArrowRightLong size={14} style={{ marginLeft: '4px', marginBottom: '2px' }} /></a>
                        </div>
                    </div>

                    <div className="hot-product rounded">
                        <div className="product">
                            <div className="hot-sale">19%</div>

                            <div className="hot-product-content d-flex">
                                <div class="thumbnail-wrapper col-3">
                                    <a href="/" title="Chobani Complete Vanilla Greek Yogurt">
                                        <img decoding="async" className='w-100' src={require('../../assets/images/product-image-2.jpg')} alt="Chobani Complete Vanilla Greek Yogurt" />
                                    </a>
                                </div>

                                <div className="content-wrapper col-9">
                                    <div className="hot-product-header">
                                        <span className="price">
                                            <del aria-hidden="true">
                                                <span className="hot-product-amount">
                                                    <bdi>
                                                        <span className="">$</span>5.49
                                                    </bdi>
                                                </span>
                                            </del>
                                            <ins aria-hidden="true">
                                                <span className="hot-product-amount">
                                                    <bdi>
                                                        <span className="">$</span>4.49
                                                    </bdi>
                                                </span>
                                            </ins>
                                        </span>
                                    </div>
                                    <h3 className="product-title">
                                        <a href="/">Chobani Complete Vanilla Greek Yogurt</a>
                                    </h3>
                                    <div className="product-meta">
                                        <div className="product-unit">1 kg</div>
                                        <div className="product-available in-stock">In Stock</div>
                                    </div>
                                    <div className="product-progress">
                                        <span className="progress" style={{ width: "88%" }}></span>
                                    </div>
                                    <div className="product-expired">
                                        <div className="countdown" data-date="2024/12/13">
                                            <div className="count-item days">69</div>:<div className="count-item hours">03</div>:<div className="count-item minutes">14</div>:<div className="count-item second">59</div>
                                        </div>
                                        <div className="expired-text">Remains until the end of the offer</div>
                                    </div>
                                </div>

                            </div>

                            <a href="/" title="Chobani Complete Vanilla Greek Yogurt" class="overlay-link"></a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home