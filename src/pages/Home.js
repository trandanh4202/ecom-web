import { faCreditCard } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faGift, faHandHoldingDollar, faHeadset, faTruckFast, faUsers } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';
import Blog from '../components/Blog';
import ProductCard from '../components/ProductCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import ProductSale from '../components/ProductSale';
import moment from 'moment/moment';
import CountUpComp from '../components/CountUpComp';

//
var settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 6,
  lazyLoad: true,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ],
};

const Home = () => {
  const [countdown, setCountdown] = useState(null);

  // Set the target date and time
  const targetDate = moment('2023-12-31T23:59:59');

  useEffect(() => {
    // Calculate the remaining time on component mount
    const interval = setInterval(() => {
      const now = moment();
      const distance = targetDate.diff(now);

      // Calculate days, hours, minutes, and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Update the countdown state
      setCountdown({ days, hours, minutes, seconds });

      // Clear the interval when the target date is reached
      if (distance < 0) {
        clearInterval(interval);
      }
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container-xl">
          <div className="row d-flex align-items-center justify-content-center">
            <div className="col-lg-6 col-12 mb-2">
              <div className="banner-slider ">
                <img src="images/main-banner.jpg" alt="main banner" className="img-fluid rounded-3" />
                <div className="banner-slider__content ">
                  <h4 className="fs-4 text-uppercase fw-semibold lh-base">SUPERCHARED FOR PROPS</h4>
                  <h5 className="fs-1 text-uppercase fw-bold lh-lg">iPad S13+ Pro</h5>
                  <p className="fs-5 text-uppercase fw-semibold lh-base">Form $999.00 or $41.62/mo</p>
                  <Link className="fs-1 text-uppercase fw-semibold lh-base  button-buy">Buy now</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="d-flex gap-3 align-items-center justify-content-between flex-wrap">
                <div className="banner-static  ">
                  <img src="images/catbanner-01.jpg" alt="banner static" className="img-fluid rounded-3" />
                  <div className="banner-static__content w-50">
                    <h4 className="fs-5   lh-base ">SUPERCHARED FOR PROPS</h4>
                    <h5 className="fs-5 text-uppercase fw-bold lh-lg">iPad S13+ Pro</h5>
                    <p className="fs-5   lh-base">Form $999.00 or $41.62/mo</p>
                    <Link className="fs-5   lh-base  button-buy">Buy now</Link>
                  </div>
                </div>
                <div className="banner-static  ">
                  <img src="images/catbanner-01.jpg" alt="banner static" className="img-fluid rounded-3" />
                  <div className="banner-static__content w-50">
                    <h4 className="fs-5   lh-base ">SUPERCHARED FOR PROPS</h4>
                    <h5 className="fs-5 text-uppercase fw-bold lh-lg">iPad S13+ Pro</h5>
                    <p className="fs-5   lh-base">Form $999.00 or $41.62/mo</p>
                    <Link className="fs-5   lh-base  button-buy">Buy now</Link>
                  </div>
                </div>
                <div className="banner-static  ">
                  <img src="images/catbanner-01.jpg" alt="banner static" className="img-fluid rounded-3" />
                  <div className="banner-static__content w-50">
                    <h4 className="fs-5   lh-base ">SUPERCHARED FOR PROPS</h4>
                    <h5 className="fs-5 text-uppercase fw-bold lh-lg">iPad S13+ Pro</h5>
                    <p className="fs-5   lh-base">Form $999.00 or $41.62/mo</p>
                    <Link className="fs-5   lh-base  button-buy">Buy now</Link>
                  </div>
                </div>
                <div className="banner-static  ">
                  <img src="images/catbanner-01.jpg" alt="banner static" className="img-fluid rounded-3" />
                  <div className="banner-static__content w-50">
                    <h4 className="fs-5   lh-base ">SUPERCHARED FOR PROPS</h4>
                    <h5 className="fs-5 text-uppercase fw-bold lh-lg">iPad S13+ Pro</h5>
                    <p className="fs-5   lh-base">Form $999.00 or $41.62/mo</p>
                    <Link className="fs-5   lh-base  button-buy">Buy now</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-sales py-5 ">
        <div className="container-xl ">
          <div className="row flashsale py-5">
            <img src="image/lastweek.webp" alt="" />
            {countdown && (
              <div className="d-flex justify-content-center align-items-center ">
                <p className="fs-2 fw-semibold ">Thời gian kết thúc sau:</p>
                <ul className="d-flex">
                  <li className="d-flex align-items-center justify-content-center text-danger fs-3 fw-medium ">
                    <p className="border border-1 rounded-3 p-1 m-1 bg-body ">{countdown.days}</p>
                    <p className="m-0 fs-2">:</p>
                  </li>
                  <li className="d-flex align-items-center justify-content-center text-danger fs-3 fw-medium ">
                    <p className="border border-1 rounded-3 p-1 m-1 bg-body ">{countdown.hours}</p>
                    <p className="m-0 fs-2">:</p>
                  </li>
                  <li className="d-flex align-items-center justify-content-center text-danger fs-3 fw-medium ">
                    <p className="border border-1 rounded-3 p-1 m-1 bg-body ">{countdown.minutes}</p>
                    <p className="m-0 fs-2">:</p>
                  </li>
                  <li className="d-flex align-items-center justify-content-center text-danger fs-3 fw-medium ">
                    <p className="border border-1 rounded-3 p-1 m-1 bg-body ">{countdown.seconds}</p>
                  </li>
                </ul>
              </div>
            )}

            <Slider {...settings}>
              <ProductSale />
              <ProductSale />
              <ProductSale />
              <ProductSale />
              <ProductSale />
              <ProductSale />
              <ProductSale />
            </Slider>
          </div>
        </div>
      </section>
      <section className="home-wrapper-3 py-5">
        <div className="container-xl ">
          <div className="row bg-body rounded-3 py-5">
            <div className="col-12 ">
              <h1 className="text-center text-uppercase">Menu highlight</h1>
              <div className="menu-highlight d-flex justify-content-between align-items-center flex-wrap ">
                <div className="col-lg-2 col-3 text-center ">
                  <img src="image/dien-thoai-doc-quyen-128x128.webp" alt="" className="img-fluid" />
                  <h3>Smartphone</h3>
                </div>
                <div className="col-lg-2 col-3 text-center">
                  <img src="image/Donghothoitrang-128x129.webp" alt="" className="img-fluid" />
                  <h3>Laptop</h3>
                </div>
                <div className="col-lg-2 col-3 text-center">
                  <img src="image/Donghothoitrang-128x129.webp" alt="" className="img-fluid" />
                  <h3>Fashion Watches</h3>
                </div>
                <div className="col-lg-2 col-3 text-center">
                  <img src="image/ban-phim-128x129.webp" alt="" className="img-fluid" />
                  <h3>Keyboard</h3>
                </div>
                <div className="col-lg-2 col-3 text-center ">
                  <img src="image/chuot-128x129.webp" alt="" className="img-fluid" />
                  <h3>Mouse</h3>
                </div>
                <div className="col-lg-2 col-3 text-center ">
                  <img src="image/Manhinhmaytinh-128x129.webp" alt="" className="img-fluid" />
                  <h3>Screen Desktop</h3>
                </div>
                <div className="col-lg-2 col-3 text-center ">
                  <img src="image/Maytinhbo-128x129.webp" alt="" className="img-fluid" />
                  <h3>PC case</h3>
                </div>
                <div className="col-lg-2 col-3 text-center ">
                  <img src="image/Phukiengaming-128x129.webp" alt="" className="img-fluid" />
                  <h3>Gaming Gear</h3>
                </div>
                <div className="col-lg-2 col-3 text-center ">
                  <img src="image/Sacduphong-128x129.webp" alt="" className="img-fluid" />
                  <h3>Backup Charger</h3>
                </div>
                <div className="col-lg-2 col-3 text-center ">
                  <img src="image/Tablet-128x129.webp" alt="" className="img-fluid" />
                  <h3>Table</h3>
                </div>
                <div className="col-lg-2 col-3 text-center ">
                  <img src="image/Tainghe-128x129.webp" alt="" className="img-fluid" />
                  <h3>Headphone</h3>
                </div>
                <div className="col-lg-2 col-3 text-center ">
                  <img src="image/Donghothongminh-128x129.webp" alt="" className="img-fluid" />
                  <h3>Smart Watch</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-products py-5">
        <div className="container-xl ">
          <div className="row  bg-body py-5 rounded-3">
            <div className="col-12">
              <h1 className="home-products__title text-center text-uppercase">Products</h1>
            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <Link to="products" className="border border-1 rounded-3 text-center bg-danger">
              View All !
            </Link>
          </div>
        </div>
      </section>
      <CountUpComp />
      <section className="home-wrapper-2 py-5 ">
        <div className="container-xl">
          <div className="row">
            <div className="col-12 d-flex align-items-center justify-content-between flex-wrap gap-5">
              <div className="d-flex align-items-center  gap-5 w-110">
                <FontAwesomeIcon icon={faTruckFast} className="icon-size" />
                <div>
                  <h6>Freshipping</h6>
                  <p className="mb-0 ">From all orders over $100</p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-5 w-110">
                <FontAwesomeIcon icon={faGift} className="icon-size" />
                <div>
                  <h6>Daily Suprise Offers</h6>
                  <p className="mb-0">Save up to 25% off</p>
                </div>
              </div>

              <div className="d-flex align-items-center gap-5 w-110">
                <FontAwesomeIcon icon={faHandHoldingDollar} className="icon-size" />
                <div>
                  <h6>Support 24/7</h6>
                  <p className="mb-0">Shop with an expert</p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-5 w-110">
                <FontAwesomeIcon icon={faHeadset} className="icon-size" />
                <div>
                  <h6>Affordable Prices</h6>
                  <p className="mb-0">Get factory direct price</p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-5">
                <FontAwesomeIcon icon={faCreditCard} className="icon-size" />
                <div>
                  <h6>Secure Payments</h6>
                  <p className="mb-0">100% protected payments</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-marquee ">
        <div className="container-xl">
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrap marquee-wrap">
                <Marquee gradient={true}>
                  <div className="w-25 mx-4">
                    <img src="image/Brand/Asus.png" alt="Asus logo" />
                  </div>
                  <div className="w-25 mx-4">
                    <img src="image/Brand/Dell.png" alt="" />
                  </div>
                  <div className="w-25 mx-4">
                    <img src="image/Brand/Hp.png" alt="" />
                  </div>
                  <div className="w-25 mx-4">
                    <img src="image/Brand/Lenovo.png" alt="" />
                  </div>
                  <div className="w-25 mx-4">
                    <img src="image/Brand/Samsung.png" alt="" />
                  </div>
                  <div className="w-25 mx-4">
                    <img src="image/Brand/Apple.png" alt="" />
                  </div>
                  <div className="w-25 mx-4">
                    <img src="image/Brand/MSI.png" alt="" />
                  </div>
                  <div className="w-25 mx-4">
                    <img src="image/Brand/Xiaomi.png" alt="" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-news py-5">
        <div className="container-xl">
          <div className="row">
            <div className="col-12">
              <h1 className="home-news__title text-center text-uppercase">News about Technology</h1>
            </div>
            <Blog />
            <Blog />
            <Blog />
            <Blog />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
