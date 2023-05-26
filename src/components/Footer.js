import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <div>
        <footer className="py-3">
          <div className="container-xl">
            <div className="row">
              <div className="col-5 text-white d-flex align-items-center gap-5 ">
                <FontAwesomeIcon icon={faPaperPlane} />
                <span>Sign Up for Newsletter</span>
              </div>
              <div className="col-7 d-flex align-items-center justify-content-center">
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
        </footer>

        <footer className="py-4 fs-3 border-top border-bottom border-1  ">
          <div className="container-xl">
            <div className="row">
              <div className="col-4">
                <h4 className="mb-4 text-white">Contact Us</h4>
                <div>
                  <address className="text-white">
                    Địa chỉ: 142 Tô Ký, Hóc Môn <br /> Thành phố Hồ Chí Minh, Việt Nam <br />
                  </address>
                  <a href="tel:+84 913423421" className="mt-3 d-block mb-1 text-white">
                    +84 9134234**
                  </a>
                  <a href="mailto:trantrongdanh15@gmail.com" className="mt-2 d-block mb-0 text-white">
                    trantrongdanh15@gmail.com
                  </a>
                  <div className="social_icons d-flex align-items-center gap-5 mt-4 ">
                    <a href="https://www.youtube.com/" className="text-white">
                      <i className="fa-brands fa-youtube"></i>{' '}
                    </a>
                    <a href="https://www.youtube.com/" className="text-white">
                      <i className="fa-brands fa-facebook"></i>{' '}
                    </a>
                    <a href="https://www.youtube.com/" className="text-white">
                      <i className="fa-brands fa-instagram"></i>{' '}
                    </a>
                    <a href="https://www.youtube.com/" className="text-white">
                      <i className="fa-brands fa-github"></i>{' '}
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <h4 className="text-white mb-4">Information</h4>
                <div className="footer-link d-flex flex-column">
                  <Link to="/privacypolicy" className="text-white py-2 mb-1">
                    Privacy Policy
                  </Link>
                  <Link to="/refundpolicy" className="text-white py-2 mb-1">
                    Refund Policy
                  </Link>
                  <Link to="/shippingpolicy" className="text-white py-2 mb-1">
                    Shipping Policy
                  </Link>
                  <Link to="/termconditions" className="text-white py-2 mb-1">
                    Terms & Conditions
                  </Link>
                  <Link className="text-white py-2 mb-1">Blogs</Link>
                </div>
              </div>
              <div className="col-3">
                <h4 className="text-white mb-4">Account</h4>
                <div className="footer-link d-flex flex-column">
                  <Link className="text-white py-2 mb-1">About Us</Link>
                  <Link className="text-white py-2 mb-1">Faq</Link>
                  <Link className="text-white py-2 mb-1">Contact</Link>
                </div>
              </div>
              <div className="col-2">
                <h4 className="text-white mb-4">Quick Links</h4>
                <div className="footer-link d-flex flex-column">
                  <Link className="text-white py-2 mb-1">Laptops</Link>
                  <Link className="text-white py-2 mb-1">Headphones</Link>
                  <Link className="text-white py-2 mb-1">Tablets</Link>
                  <Link className="text-white py-2 mb-1">Watch</Link>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <footer className="py-3">
          <div className="container-xl">
            <div className="row">
              <div className="col-12 text-white d-flex justify-content-center align-items-center fs-1 ">
                <FontAwesomeIcon icon={faCopyright} />
                {new Date().getFullYear()} by Tran Danh
                {/* <p>&copy Copyright {new Date()} by Tran Danh</p> */}
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
