import { Rating } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = () => {
  return (
    <div className="col-3 ">
      <Link className="w-100 product-card bg-body p-3 m-3 border border-secondary-subtle rounded-4">
        <div className="product-image  w-100">
          <img className="img-fluid w-100" src="image/chuot-128x129.webp" alt="" />
          <img className="img-fluid w-100" src="image/ban-phim-128x129.webp" alt="" />
        </div>
        <div className="product-details w-100">
          <div className="product-name py-3 text-black fs-2 fw-semibold text-truncate ">
            Lenovo Gaming 5555555555555555555
          </div>
          <div className="product-price py-3 fs-3 fw-medium text-danger">$100.00</div>
          <Rating name="half-rating-read" size="large" defaultValue={2.5} precision={0.5} readOnly />
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
