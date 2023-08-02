import { faDownLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ProductCard from '~/components/Product/ProductCard';
import { getProducts } from '~/features/products/productsSlice';

const Product = () => {
  const [paginationModel, setPaginationModel] = useState({
    page: 1,
    pageSize: 8,
  });

  const dispatch = useDispatch();
  const products = useSelector((state) => state.products?.products?.products);
  useEffect(() => {
    dispatch(getProducts({ paginationModel }));
  }, [dispatch, paginationModel]);

  return (
    <section className="home-products py-5">
      <div className="container-xl ">
        <div className="row bg-body py-5 rounded-3">
          <div className="col-12">
            <h1 className="home-products__title text-center text-uppercase mb-5">Products</h1>
          </div>
          {products &&
            products.map((product) => {
              return (
                <ProductCard
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  basePrice={product.basePrice}
                  description={product.description}
                  percentSale={product.percentSale}
                  averageRating={product.averageRating}
                />
              );
            })}

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
