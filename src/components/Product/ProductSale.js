import { faFire } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const ProductSale = (props) => {
  const { id, name, price, basePrice, percentSale, imageUrl, averageRating, soldQuantity, quantity } = props;

  return (
    <Link
      to={`${id}`}
      className="w-100 product-card-sale bg-body border border-secondary-subtle rounded-4 d-flex align-items-center justify-content-center flex-column "
    >
      <div className="product-sale-image p-5 ">
        <img className="img-fluid " src="image/chuot-128x129.webp" alt="" />
      </div>
      <div className="w-100 product-sale-details d-flex align-items-center justify-content-center flex-column p-3">
        <div className="w-100 product-name py-3 text-black fs-2 fw-semibold text-truncate ">{name}</div>
        <div className="product-price py-3 fs-3 fw-medium text-danger">{basePrice}</div>
        <div className="old-price  d-flex align-items-center">
          <h4 className="fs-5 me-3 text-decoration-line-through">{price}</h4>
          <div className="fs-4 border border-1 border-danger-subtle rounded-2 bg-danger-subtle text-danger">
            -{percentSale}%
          </div>
        </div>
        {/* <Rating name="half-rating-read" size="large" defaultValue={2.5} precision={0.5} readOnly /> */}
        <div className="product-count-sale w-100">
          <img src={imageUrl} alt="" />
          <span className="count">
            <span style={{ width: `${{ soldQuantity } / { quantity }}%` }} className="Background"></span>
            <b className="shock">
              {soldQuantity}/{quantity} Suất
            </b>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProductSale;
