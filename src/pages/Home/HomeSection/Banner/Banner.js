import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
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
  );
};

export default Banner;
