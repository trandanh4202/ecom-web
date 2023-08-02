import { Rating } from '@mui/material';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const ProductCard = (props) => {
  const { id, grid, name, price, basePrice, percentSale, description, averageRating } = props;
  let location = useLocation();
  // console.log(grid);
  return (
    <>
      <div className={`${location.pathname === '/Products' ? `p-2 col-lg-${grid} col-${grid}` : ' col-lg-3 col-6'}`}>
        <Link to={`${id}`} className="w-100 product-card  bg-body p-3 my-3 border border-secondary-subtle rounded-4">
          <div className="product-image w-100 d-flex align-items-center justify-content-center ">
            <img className=" " src="image/ban-phim-128x129.webp" alt="banphim" />
            <img className=" " src="image/chuot-128x129.webp" alt="chuot" />
          </div>
          <div className="product-details w-100 overflow-hidden">
            <div className="product-name py-3 text-black fs-2 fw-semibold text-truncate ">{name}</div>
            <div className="product-price py-3 fs-3 fw-medium text-danger">{basePrice}</div>
            <div className="old-price  d-flex align-items-center">
              <h4 className="fs-5 me-3 text-decoration-line-through">{price}</h4>
              <div className="fs-4 border border-1 border-danger-subtle rounded-2 bg-danger-subtle text-danger">
                {percentSale}
              </div>
            </div>
            <Rating name="half-rating-read" size="large" defaultValue={averageRating} precision={0.5} readOnly />
            <p className={`"mb-0 me-5 desc fs-6 text-black-50 display-desktop ${grid === 12 ? 'd-block' : 'd-none'}`}>
              {description}
            </p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
