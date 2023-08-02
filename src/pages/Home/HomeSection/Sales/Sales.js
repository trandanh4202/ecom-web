import moment from 'moment/moment';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Slider from 'react-slick';
import ProductSale from '~/components/Product/ProductSale';
import { getProducts } from '~/features/products/productsSlice';
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
const Sales = () => {
  const [paginationModel, setPaginationModel] = useState({
    page: 1,
    pageSize: 8,
  });
  const [countdown, setCountdown] = useState(null);
  const targetDate = moment('2023-12-31T23:59:59');

  const dispatch = useDispatch();
  const products = useSelector((state) => state.products?.products?.products);
  // useEffect(() => {
  //   dispatch(getProducts({ paginationModel }));
  // }, [dispatch, paginationModel]);

  // Set the target date and time

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
            {products &&
              products.map((product) => {
                return (
                  <ProductSale
                    id={product.id}
                    name={product.name}
                    price={product.price}
                    basePrice={product.basePrice}
                    imageUrl={product.imageUrl}
                    percentSale={product.percentSale}
                    averageRating={product.averageRating}
                    quantity={product.quantity}
                    soldQuantity={product.soldQuantity}
                  />
                );
              })}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Sales;
