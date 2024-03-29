import { Rating } from '@mui/material';
import React from 'react';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '~/features/singleProduct/singleProductSlice';
import { getReviews } from '~/features/reviews/reviewsSlice';
const SingleProduct = () => {
  let { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const dispatch = useDispatch();
  const product = useSelector((state) => state.singleProduct?.product);
  const reviews = useSelector((state) => state.reviews);
  useEffect(() => {
    dispatch(getProductById({ id }));
    dispatch(getReviews({ id }));
  }, [dispatch, id]);

  return (
    <>
      <div className="SingleProduct-view py-5">
        <div className="container-xl">
          <div className="row">
            <div className="col-lg-6 col-12">
              <div className="image-wrapper py-5 bg-body border border-1 rounded-3">
                <Carousel>
                  <div>
                    <img src={product.imageUrl} alt="a" />
                  </div>
                  <div>
                    <img src="image/Phukiengaming-128x129.webp" alt="" />
                  </div>
                  <div>
                    <img src="image/Phukiengaming-128x129.webp" alt="" />
                  </div>
                  <div>
                    <img src="image/Phukiengaming-128x129.webp" alt="" />
                  </div>
                  <div>
                    <img src="image/Phukiengaming-128x129.webp" alt="" />
                  </div>
                  <div>
                    <img src="image/Phukiengaming-128x129.webp" alt="" />
                  </div>
                  <div>
                    <img src="image/Phukiengaming-128x129.webp" alt="" />
                  </div>
                </Carousel>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="product-details p-3 ms-5">
                <div className="product-info w-100">
                  <div className="product-name fs-1 fw-bold mb-5">{product.name}</div>
                </div>
                <div className="product-description">
                  <p className="fs-2 text-body-tertiary lh-base">{product.description}</p>
                </div>

                <div className="product-count border border-1 rounded-3 w-100">
                  <div className="flex-box d-flex justify-content-between align-items-center border-bottom">
                    <h6 className="fs-3">Price</h6>
                    <span className="fw-medium fs-4">{product.basePrice}</span>
                  </div>
                  <div className="flex-box d-flex justify-content-between align-items-center border-bottom">
                    <h6>Status</h6>
                    <span className="fw-medium fs-4">{product.quantity}</span>
                  </div>
                  <div className="flex-box d-flex justify-content-between align-items-center border-bottom">
                    <h6>Color</h6>
                    <ul className="d-flex align-items-center justify-content-between">
                      <li className="border border-1 bg-primary p-2 m-2">Xanh </li>
                      <li className="border border-1 bg-primary p-2 m-2">Xanh </li>
                      <li className="border border-1 bg-primary p-2 m-2">Xanh </li>
                      <li className="border border-1 bg-primary p-2 m-2">Xanh </li>
                    </ul>
                  </div>
                  <div className="flex-box d-flex justify-content-between align-items-center border-bottom">
                    <h6>Memory</h6>
                    <ul className="d-flex align-items-center justify-content-between">
                      <li className="border border-1 bg-primary p-2 m-2">128GB </li>
                      <li className="border border-1 bg-primary p-2 m-2">256GB </li>
                      <li className="border border-1 bg-primary p-2 m-2">512GB </li>
                      <li className="border border-1 bg-primary p-2 m-2">1TB </li>
                    </ul>
                  </div>
                  <div className="flex-box d-flex justify-content-between align-items-center border-bottom">
                    <h6>Reviews</h6>
                    <Rating
                      value={product.averageRating}
                      readOnly
                      // text={`${product.reviewQuantity} reviews`}
                    />
                  </div>
                  <div className="flex-box d-flex justify-content-between align-items-center border-bottom">
                    <h6>Quantity</h6>
                    {/* <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
                      {[...Array(quantity).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select> */}
                    <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
                      {[...Array(product.quantity).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                  <button
                    className="btn btn-dark round-black-btn "
                    // onClick={AddToCartHanddle}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="description-wrapper py-5">
        <div className="container-xl">
          <div className="row">
            <div className="col-12">
              <h1>Description</h1>
              <p>{product.description}</p>
            </div>
          </div>
        </div>
      </div>
      <section className="review-wrapper py-5">
        <div className="container-xl">
          <div className="row">
            <div className="col-12">
              <h1> Reviews</h1>
              <strong>Danh</strong>
              <Rating value={3} readOnly />
              <span>2:00 PM</span>
              <div className="alert alert-info mt-3">Danh</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProduct;
