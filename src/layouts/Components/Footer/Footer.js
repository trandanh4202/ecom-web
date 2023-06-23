import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      {/* <footer className="py-3">
        <div className="container-xl">
          <div className="row">
            <div className="col-4 col-lg-5  d-flex align-items-center gap-2 ">
              <FontAwesomeIcon icon={faPaperPlane} />
              <span>Sign Up for Newsletter</span>
            </div>
            <div className="col-8 col-lg-7 d-flex align-items-center justify-content-center">
              <form className="form">
                <span className="title">Subscribe to our newsletter.</span>
                <p className="description">
                  Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit quis. Duis tempor incididunt
                  dolore.
                </p>
                <div>
                  <input placeholder="Enter your email" type="email" name="email" id="email-address" />
                  <button>
                    <div class="svg-wrapper-1">
                      <div class="svg-wrapper">
                        <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0 0h24v24H0z" fill="none"></path>
                          <path
                            d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <span>Send</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </footer> */}

      <footer className="py-4 fs-3 border-top border-bottom border-3 mt-5  ">
        <div className="container-xl">
          <div className="row">
            <div className="col-lg-4 col-12 ">
              <h4 className="mb-4 ">Contact Us</h4>
              <div>
                <address className="">
                  Địa chỉ: 142 Tô Ký, Hóc Môn <br /> Thành phố Hồ Chí Minh, Việt Nam <br />
                </address>
                <a href="tel:+84 913423421" className="mt-3 word-wrap d-block mb-1 ">
                  +84 9134234**
                </a>
                <a href="mailto:trantrongdanh15@gmail.com" className="mt-2 word-wrap d-block mb-0 ">
                  trantrongdanh15@gmail.com
                </a>
                <div className="social_icons d-flex align-items-center gap-5  mt-4 ">
                  <a href="https://www.youtube.com/" className="">
                    <i className="fa-brands fa-youtube"></i>{' '}
                  </a>
                  <a href="https://www.youtube.com/" className="">
                    <i className="fa-brands fa-facebook"></i>{' '}
                  </a>
                  <a href="https://www.youtube.com/" className="">
                    <i className="fa-brands fa-instagram"></i>{' '}
                  </a>
                  <a href="https://www.youtube.com/" className="">
                    <i className="fa-brands fa-github"></i>{' '}
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-4">
              <h4 className=" mb-4">Information</h4>
              <div className="footer-link d-flex flex-column">
                <Link to="/privacypolicy" className=" py-2 mb-1">
                  Privacy Policy
                </Link>
                <Link to="/refundpolicy" className=" py-2 mb-1">
                  Refund Policy
                </Link>
                <Link to="/shippingpolicy" className=" py-2 mb-1">
                  Shipping Policy
                </Link>
                <Link to="/termconditions" className=" py-2 mb-1">
                  Terms & Conditions
                </Link>
                <Link className=" py-2 mb-1">Blogs</Link>
              </div>
            </div>
            <div className="col-lg-3 col-4">
              <h4 className=" mb-4">Account</h4>
              <div className="footer-link d-flex flex-column">
                <Link className=" py-2 mb-1">About Us</Link>
                <Link className=" py-2 mb-1">Faq</Link>
                <Link className=" py-2 mb-1">Contact</Link>
              </div>
            </div>
            <div className="col-lg-2 col-4">
              <h4 className=" mb-4">Quick Links</h4>
              <div className="footer-link d-flex flex-column">
                <Link className=" py-2 mb-1">Laptops</Link>
                <Link className=" py-2 mb-1">Headphones</Link>
                <Link className=" py-2 mb-1">Tablets</Link>
                <Link className=" py-2 mb-1">Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-3">
        <div className="container-xl">
          <div className="row">
            <div className="col-12  d-flex justify-content-center align-items-center fs-1 ">
              <FontAwesomeIcon icon={faCopyright} />
              {new Date().getFullYear()} by Tran Danh
              {/* <p>&copy Copyright {new Date()} by Tran Danh</p> */}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
