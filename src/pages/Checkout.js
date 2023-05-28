import { faLocationDot, faTruck, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Checkout = () => {
  return (
    <>
      <section className="address-wrapper py-5 ">
        <div className="container-xl bg-body shadow-lg">
          <div className="row">
            <div className="col-12 p-5 ">
              <div className="border-top-info "></div>
              <div className="address-title d-flex my-3 align-items-center justify-content-center ">
                <span className="fs-1 fs-bold text-uppercase">Thông tin đặt hàng</span>
              </div>
              <div className="address-info d-flex   ">
                {/* <h1 className="ms-5 me-3">Trần Trọng Danh</h1>
                <h2 className="ms-5 me-3">0913 423 421</h2>
                <p className="ms-5 me-3">142 tô ký, xã thới tam thôn, huyện hóc môn, Tp.HCM</p> */}
                <div className="col-4">
                  <div className="row">
                    <div className="col-md-4 center d-flex  justify-content-center rounded-3">
                      <div className="alert-success fs-3 ">
                        <FontAwesomeIcon icon={faUser} size="2xl" />{' '}
                      </div>
                    </div>
                    <div className="col-8 center">
                      <h5>
                        <strong>Customer</strong>
                      </h5>
                      <p>Admin Doe</p>
                      <p>
                        <a href={`mailto:admin@example.com`}>admin@example.com</a>
                      </p>
                      <p>0913 423 421</p>
                    </div>
                  </div>
                </div>
                {/* 2 */}
                <div className="col-4  ">
                  <div className="row">
                    <div className="col-4 center d-flex align-items-center justify-content-center rounded-3">
                      <div className="alert-success fs-3 ">
                        <FontAwesomeIcon icon={faTruck} size="2xl" />{' '}
                      </div>
                    </div>
                    <div className="col-md-8 center">
                      <h5>
                        <strong>Order info</strong>
                      </h5>
                      <p>Shipping: Tanzania</p>
                    </div>
                  </div>
                </div>
                {/* 3 */}
                <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
                  <div className="row">
                    <div className="col-md-4 center d-flex align-items-center justify-content-center rounded-3">
                      <div className="alert-success fs-3 ">
                        <FontAwesomeIcon icon={faLocationDot} size="2xl" />
                      </div>
                    </div>
                    <div className="col-md-8 center">
                      <h5>
                        <strong>Deliver to</strong>
                      </h5>
                      <p>Address: Arusha Tz, Ngaramtoni Crater, P.O BOX 1234 Arusha Tz</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="products-wrapper py-5 ">
        <div className="container-xl bg-body shadow-lg">
          <div className="row p-5">
            <div className="col-12">
              <div className="cart-header w-100 py-3 d-flex justify-content-center align-items-center">
                <h4 className="col-6 fs-2 text-secondary ">Product</h4>
                <h4 className="col-2 fs-2 text-secondary">Price</h4>
                <h4 className="col-2 fs-2 text-secondary">Quantity</h4>
                <h4 className="col-2 fs-2 text-secondary d-flex justify-content-end align-items-center">Total</h4>
              </div>
              <div className="cart-data w-100 py-3 mb-2 d-flex justify-content-between align-items-center">
                <div className="col-6 gap-2 d-flex align-items-center pe-5">
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
                <div className="col-2 d-flex align-items-center gap-3">10</div>
                <div className="col-2">
                  <h5 className="price fs-4 text-black d-flex justify-content-end align-items-center">$ 100</h5>
                </div>
              </div>
              <div className="cart-data w-100 py-3 mb-2 d-flex justify-content-around align-items-center">
                <div className="col-6 gap-2 d-flex align-items-center pe-5">
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
                <div className="col-2 d-flex align-items-center gap-3">10</div>
                <div className="col-2">
                  <h5 className="price fs-4 text-black d-flex justify-content-end align-items-center">$ 100</h5>
                </div>
              </div>
              <div className="cart-data w-100 py-3 mb-2 d-flex justify-content-between align-items-center">
                <div className="col-6 gap-2 d-flex align-items-center pe-5">
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
                <div className="col-2 d-flex align-items-center gap-3">10</div>
                <div className="col-2">
                  <h5 className="price fs-4 text-black d-flex justify-content-end align-items-center">$ 100</h5>
                </div>
              </div>
            </div>
            <div
              className="col-12 py-2 mt-4 
              d-flex
              justify-content-end"
            >
              {/* <div className="col-3 d-flex justify-content-center align-items-center flex-column"> */}
              {/* <div className="col-9">
                <p>Taxes and shipping at checkout aren't caculator</p>
              </div>
              <div className="col-3">
                <h4 className="fs-2 text-black d-flex justify-content-end align-items-center ">
                  SubTotal ( 10 products): $ 1000
                </h4>
              </div> */}
              <h4 className="fs-2 text-black ">SubTotal ( 10 products): $ 1000</h4>

              {/* </div> */}
            </div>
          </div>
        </div>
      </section>
      <section className="checkout-wrapper py-5">
        <div className="container-xl bg-body shadow-lg">
          <div className="row p-5">
            <div className="col-12 d-flex gap-3">
              <div className="col-9">
                <img src="image/lastweek.webp" className="img-fluid" alt="" />
              </div>
              <div className="col-3">
                <table className="table table-bordered">
                  <tbody>
                    <tr>
                      <td>
                        <strong className="fs-3">Products</strong>
                      </td>
                      <td className="fs-4">$100</td>
                    </tr>
                    <tr>
                      <td>
                        <strong className="fs-3">Shipping</strong>
                      </td>
                      <td className="fs-4">$100</td>
                    </tr>
                    <tr>
                      <td>
                        <strong className="fs-3">Sale</strong>
                      </td>
                      <td className="fs-4">$20</td>
                    </tr>
                    <tr>
                      <td>
                        <strong className="fs-3">Total</strong>
                      </td>
                      <td className="fs-4"> $220</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-12 gap-3 d-flex align-items-center justify-content-between">
              <div className="col-9">
                <p>Nhấn "Đặt hàng" đồng nghĩa với việc bạn đồng ý tuân theo Điều khoản Shopee</p>
              </div>
              <div className="col-3">
                <button
                  className="btn btn-dark round-black-btn"
                  // onClick={AddToCartHanddle}
                >
                  Check Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Checkout;
