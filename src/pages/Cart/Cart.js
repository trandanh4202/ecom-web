import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
  return (
    <>
      <section className="cart-wrapper py-5 ">
        <div className="container-xl">
          <div className="row">
            <div className="col-12">
              <div className="cart-header w-100 py-3 d-flex justify-content-center align-items-center">
                <div className="col-1">
                  <input className="select-all" type="checkbox" />
                </div>
                <h4 className="col-5 fs-2 text-secondary ">Product</h4>
                <h4 className="col-2 fs-2 text-secondary">Price</h4>
                <h4 className="col-2 fs-2 text-secondary">Quantity</h4>
                <h4 className="col-2 fs-2 text-secondary d-flex justify-content-end align-items-center">Total</h4>
              </div>
              <div className="cart-data w-100 py-3 mb-2 d-flex justify-content-between align-items-center">
                <div className="col-1">
                  <input type="checkbox" value={1} />
                </div>
                <div className="col-5 gap-2 d-flex align-items-center pe-5">
                  <div className="w-25">
                    <img src="image/laptop" className="img-fluid" alt="product image" />
                  </div>
                  <div className="w-75">
                    <p className="fs-4 text-black text-truncate">
                      Laptop Lenovo Yoga 7 14IAL7 i5 1240P/16GB/512GB/Touch/Pen/Win11 (82QE000RVN) Laptop Lenovo Yoga 7
                      14IAL7 i5 1240P/16GB/512GB/Touch/Pen/Win11 (82QE000RVN
                    </p>
                    <p className="fs-4 text-black">Size: 10gb</p>
                    <p className="fs-4 text-black"> Color: White</p>
                  </div>
                </div>
                <div className="col-2">
                  <h5 className="price fs-4 text-black">$ 100</h5>
                </div>
                <div className="col-2 d-flex align-items-center gap-3">
                  <div className=" d-flex justify-content-center align-items-center">
                    <button className="button-quantity">-</button>
                    <input className=" input-quantity justify-content-center align-items-center text-center input-width " />
                    <button className="button-quantity">+</button>
                  </div>
                </div>
                <div className="col-2">
                  <h5 className="price fs-4 text-black d-flex justify-content-end align-items-center">$ 100</h5>
                </div>
              </div>
            </div>
            <div className="col-12 py-2 mt-4 d-flex">
              {/* <div className="col-3 d-flex justify-content-center align-items-center flex-column"> */}
              {/* <div className="row justify-content-between"> */}
              <div className="col-8">
                <div className="d-flex align-items-center ">
                  <div className="checked-all me-3 d-flex align-items-center justify-content-center">
                    <input type="checkbox" className="me-3" />
                    <span>Chọn tất cả (4) </span>
                  </div>
                  <div className="delete-all">
                    <FontAwesomeIcon icon={faTrash} className="me-3" /> <span>Xoá tất cả</span>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <h4 className="fs-2 text-black d-flex justify-content-end align-items-center ">
                  Tổng thanh toán ( 4 sản phẩm ): 100đ
                </h4>
              </div>
              {/* </div> */}

              {/* </div> */}
            </div>
            <div className="col-12 d-flex align-items-center justify-content-between">
              <div className="col-6">
                <Link
                  to="/products"
                  className=" text-white w-100 text-center d-flex justify-content-center align-items-center  fs-3  text-uppercase border border-1 round-black-btn"
                >
                  Continue To Shopping
                </Link>
              </div>
              <div className="col-6">
                <Link
                  to="/checkout"
                  className=" text-white w-100 text-center d-flex justify-content-center align-items-center fs-3  text-uppercase border border-1 round-black-btn"
                >
                  Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
