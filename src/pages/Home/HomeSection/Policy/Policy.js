import React from 'react';

const Policy = () => {
  return (
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
  );
};

export default Policy;
