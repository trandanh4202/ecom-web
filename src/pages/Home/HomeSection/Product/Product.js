import { faDownLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '~/components/Product/ProductCard';

const Product = () => {
  return (
    <section className="home-products py-5">
      <div className="container-xl ">
        <div className="row bg-body py-5 rounded-3">
          <div className="col-12">
            <h1 className="home-products__title text-center text-uppercase mb-5">Products</h1>
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <div className="text-center">
            <Link
              to="products"
              className="btn round-black-btn w-25 text-white p-3 border border-1 rounded-3 text-center bg-danger"
            >
              <FontAwesomeIcon icon={faDownLong} />
              <span>View all!</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
