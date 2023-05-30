import { Rating } from '@mui/material';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const ProductCard = (props) => {
  const { grid } = props;
  let location = useLocation();
  return (
    <>
      <div className={`${location.pathname === '/Products' ? `col-${grid}` : 'col-3'}`}>
        <Link to="" className="w-100 product-card bg-body p-3 my-3 border border-secondary-subtle rounded-4">
          <div className="product-image ">
            <img className="img-fluid " src="image/chuot-128x129.webp" alt="" />
            <img className="img-fluid " src="image/ban-phim-128x129.webp" alt="" />
          </div>
          <div className="product-details w-100">
            <div className="product-name py-3 text-black fs-2 fw-semibold text-truncate ">
              Lenovo Gaming 5555555555555555555
            </div>
            <div className="product-price py-3 fs-3 fw-medium text-danger">$100.00</div>
            <div className="old-price  d-flex align-items-center">
              <h4 className="fs-5 me-3 text-decoration-line-through">500000</h4>
              <div className="fs-4 border border-1 border-danger-subtle rounded-2 bg-danger-subtle text-danger">
                -50%
              </div>
            </div>
            <Rating name="half-rating-read" size="large" defaultValue={2.5} precision={0.5} readOnly />
            <p className={`"mb-0 me-5 desc fs-6 text-black-50 " ${grid === 12 ? 'd-block' : 'd-none'}`}>
              Tran Trong Danh Tran Trong Danh Tran Trong Danh Tran Trong Danh Tran Trong Danh Tran Trong Danh Tran
              TrongTran Trong Danh Tran Trong Danh Tran Trong Danh Tran Trong Danh Tran Trong Danh Tran Trong Danh Tran
              Trong Danh Tran Trong Danh Danh Tran Trong Danh
            </p>
          </div>
        </Link>
      </div>
      <div className={`${location.pathname === '/Products' ? `col-${grid}` : 'col-3'}`}>
        <Link className="w-100 product-card bg-body p-3 my-3 border border-secondary-subtle rounded-4">
          <div className="product-image  ">
            <img className="img-fluid " src="image/chuot-128x129.webp" alt="" />
            <img className="img-fluid " src="image/ban-phim-128x129.webp" alt="" />
          </div>
          <div className="product-details w-100">
            <div className="product-name py-3 text-black fs-2 fw-semibold text-truncate ">
              Lenovo Gaming 5555555555555555555
            </div>
            <div className="product-price py-3 fs-3 fw-medium text-danger">$100.00</div>
            <div className="old-price  d-flex align-items-center">
              <h4 className="fs-5 me-3 text-decoration-line-through">500000</h4>
              <div className="fs-4 border border-1 border-danger-subtle rounded-2 bg-danger-subtle text-danger">
                -50%
              </div>
            </div>
            <Rating name="half-rating-read" size="large" defaultValue={2.5} precision={0.5} readOnly />
            <p className={`"mb-0 me-5 desc fs-6 text-black-50 " ${grid === 12 ? 'd-block' : 'd-none'}`}>
              Tran Trong Danh Tran Trong Danh Tran Trong Danh Tran Trong Danh Tran Trong Danh Tran Trong Danh Tran
              TrongTran Trong Danh Tran Trong Danh Tran Trong Danh Tran Trong Danh Tran Trong Danh Tran Trong Danh Tran
              Trong Danh Tran Trong Danh Danh Tran Trong Danh
            </p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
