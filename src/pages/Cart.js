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
                  <input type="checkbox" value={1} />
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
                  <div>
                    <input className="form-control fs-4 text-black" type="number" min={1} max={10} />
                  </div>
                  <div>{/* <AiFillDelete className="text-danger " /> */}</div>
                </div>
                <div className="col-2">
                  <h5 className="price fs-4 text-black d-flex justify-content-end align-items-center">$ 100</h5>
                </div>
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
                  <div>
                    <input className="form-control fs-4 text-black" type="number" min={1} max={10} />
                  </div>
                  <div>{/* <AiFillDelete className="text-danger " /> */}</div>
                </div>
                <div className="col-2">
                  <h5 className="price fs-4 text-black d-flex justify-content-end align-items-center">$ 100</h5>
                </div>
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
                  <div>
                    <input className="form-control fs-4 text-black" type="number" min={1} max={10} />
                  </div>
                  <div>{/* <AiFillDelete className="text-danger " /> */}</div>
                </div>
                <div className="col-2">
                  <h5 className="price fs-4 text-black d-flex justify-content-end align-items-center">$ 100</h5>
                </div>
              </div>
            </div>
            <div
              className="col-12 py-2 mt-4 
              d-flex"
            >
              {/* <div className="col-3 d-flex justify-content-center align-items-center flex-column"> */}
              <div className="col-9">
                <p>Taxes and shipping at checkout aren't caculator</p>
              </div>
              <div className="col-3">
                <h4 className="fs-2 text-black d-flex justify-content-end align-items-center ">SubTotal: $ 1000</h4>
              </div>

              {/* </div> */}
            </div>

            <div className="col-12 d-flex ">
              <div className="col-6  ">
                <Link
                  to="/product"
                  className="button d-flex align-items-center justify-content-center w-100 fs-2 text-black text-uppercase border border-1 bg-dark"
                >
                  Continue To Shopping
                </Link>
              </div>
              <div className="col-6">
                <Link
                  to="/checkout"
                  className="button d-flex align-items-center justify-content-center w-100 fs-2 text-black text-uppercase border border-1 bg-dark"
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