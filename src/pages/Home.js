import { faCreditCard } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faGift, faHandHoldingDollar, faHeadset, faTruckFast } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';
import Blog from '../components/Blog';

const Home = () => {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container-xl">
          <div className="row d-flex align-items-center justify-content-center">
            <div className="col-6">
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
            <div className="col-6">
              <div className="d-flex gap-3 align-items-center justify-content-between flex-wrap">
                <div className="banner-static ">
                  <img src="images/catbanner-01.jpg" alt="banner static" className="img-fluid rounded-3" />
                  <div className="banner-static__content w-50">
                    <h4 className="fs-6   lh-base w-50">SUPERCHARED FOR PROPS</h4>
                    <h5 className="fs-6 text-uppercase fw-bold lh-lg">iPad S13+ Pro</h5>
                    <p className="fs-6   lh-base">Form $999.00 or $41.62/mo</p>
                    <Link className="fs-6   lh-base  button-buy">Buy now</Link>
                  </div>
                </div>
                <div className="banner-static ">
                  <img src="images/catbanner-01.jpg" alt="banner static" className="img-fluid rounded-3" />
                  <div className="banner-static__content w-50">
                    <h4 className="fs-6   lh-base w-50">SUPERCHARED FOR PROPS</h4>
                    <h5 className="fs-6 text-uppercase fw-bold lh-lg">iPad S13+ Pro</h5>
                    <p className="fs-6   lh-base">Form $999.00 or $41.62/mo</p>
                    <Link className="fs-6   lh-base  button-buy">Buy now</Link>
                  </div>
                </div>
                <div className="banner-static ">
                  <img src="images/catbanner-01.jpg" alt="banner static" className="img-fluid rounded-3" />
                  <div className="banner-static__content w-50">
                    <h4 className="fs-6   lh-base w-50">SUPERCHARED FOR PROPS</h4>
                    <h5 className="fs-6 text-uppercase fw-bold lh-lg">iPad S13+ Pro</h5>
                    <p className="fs-6   lh-base">Form $999.00 or $41.62/mo</p>
                    <Link className="fs-6   lh-base  button-buy">Buy now</Link>
                  </div>
                </div>
                <div className="banner-static ">
                  <img src="images/catbanner-01.jpg" alt="banner static" className="img-fluid rounded-3" />
                  <div className="banner-static__content w-50">
                    <h4 className="fs-6   lh-base w-50">SUPERCHARED FOR PROPS</h4>
                    <h5 className="fs-6 text-uppercase fw-bold lh-lg">iPad S13+ Pro</h5>
                    <p className="fs-6   lh-base">Form $999.00 or $41.62/mo</p>
                    <Link className="fs-6   lh-base  button-buy">Buy now</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xl">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-5">
                  <FontAwesomeIcon icon={faTruckFast} className="icon-size" />
                  <div>
                    <h6>Freshipping</h6>
                    <p className="mb-0">From all orders over $100</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-5">
                  <FontAwesomeIcon icon={faGift} className="icon-size" />
                  <div>
                    <h6>Daily Suprise Offers</h6>
                    <p className="mb-0">Save up to 25% off</p>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-5">
                  <FontAwesomeIcon icon={faHandHoldingDollar} className="icon-size" />
                  <div>
                    <h6>Support 24/7</h6>
                    <p className="mb-0">Shop with an expert</p>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-5">
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
        </div>
      </section>
      <section className="home-wrapper-3 py-5">
        <div className="container-xl bg-body  p-5">
          <div className="row">
            <div className="col-12 ">
              <h1 className="d-flex align-items-center justify-content-center text-uppercase">Menu highlight</h1>
              <div className="menu-highlight d-flex align-items-center justify-content-between flex-wrap gap-3">
                <div className="w-15 d-flex justify-content-center align-items-center flex-column">
                  <img src="image/dien-thoai-doc-quyen-128x128.webp" alt="" />
                  <h3>Smartphone</h3>
                </div>
                <div className="w-15 d-flex justify-content-center align-items-center flex-column">
                  <img src="image/Laptop-129x129.webp" alt="" />
                  <h3>Laptop</h3>
                </div>
                <div className="w-15 d-flex justify-content-center align-items-center flex-column">
                  <img src="image/Donghothoitrang-128x129.webp" alt="" />
                  <h3>Fashion Watches</h3>
                </div>
                <div className="w-15 d-flex justify-content-center align-items-center flex-column">
                  <img src="image/ban-phim-128x129.webp" alt="" />
                  <h3>Keyboard</h3>
                </div>
                <div className="w-15 d-flex justify-content-center align-items-center flex-column">
                  <img src="image/chuot-128x129.webp" alt="" />
                  <h3>Mouse</h3>
                </div>
                <div className="w-15 d-flex justify-content-center align-items-center flex-column">
                  <img src="image/Manhinhmaytinh-128x129.webp" alt="" />
                  <h3>Screen Desktop</h3>
                </div>
                <div className="w-15 d-flex justify-content-center align-items-center flex-column">
                  <img src="image/Maytinhbo-128x129.webp" alt="" />
                  <h3>PC case</h3>
                </div>
                <div className="w-15 d-flex justify-content-center align-items-center flex-column">
                  <img src="image/Phukiengaming-128x129.webp" alt="" />
                  <h3>Gaming Gear</h3>
                </div>
                <div className="w-15 d-flex justify-content-center align-items-center flex-column">
                  <img src="image/Sacduphong-128x129.webp" alt="" />
                  <h3>Backup Charger</h3>
                </div>
                <div className="w-15 d-flex justify-content-center align-items-center flex-column">
                  <img src="image/Tablet-128x129.webp" alt="" />
                  <h3>Table</h3>
                </div>
                <div className="w-15 d-flex justify-content-center align-items-center flex-column">
                  <img src="image/Tainghe-128x129.webp" alt="" />
                  <h3>Headphone</h3>
                </div>
                <div className="w-15 d-flex justify-content-center align-items-center flex-column">
                  <img src="image/Donghothongminh-128x129.webp" alt="" />
                  <h3>Smart Watch</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-marquee py-5">
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
              <h1 className="home-news__title d-flex align-items-center justify-content-center text-uppercase">
                News about Technology
              </h1>
              <div className="d-flex">
                <Blog />
                <Blog />
                <Blog />
                <Blog />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
