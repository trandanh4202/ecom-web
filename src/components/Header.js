import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCartShopping, faLocationDot, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';
import { Badge } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';

import { ShoppingCartIcon } from '@mui/icons-material/ShoppingCart';

const Header = () => {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xl">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">Tran Trong Danh & Duong Phu Cuong</p>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-0">
                Hotline: {''}{' '}
                <a className="text-white" href="tel:+84 913423421">
                  +84 913423421
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container-xl">
          <div className="row align-items-center">
            <div className="col-2">
              <h1>
                <Link>
                  <img className="w-50" src="/images/logo.png" alt="" />
                </Link>
              </h1>
            </div>
            <div className="col-5">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Search products here..."
                  aria-label="Search products here..."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text" id="basic-addon2">
                  <FontAwesomeIcon icon={faMagnifyingGlass} beatFade size="lg" />{' '}
                </span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <Link className="d-flex align-items-center justify-content-center text-white text-uppercase fs-4 ms-1">
                  <FontAwesomeIcon icon={faLocationDot} size="2xl" />
                  Cửa hàng <br />
                  gần bạn
                </Link>
                <Link to="cart" className="text-white d-flex align-items-center text-uppercase fs-4 ms-1">
                  <FontAwesomeIcon icon={faCartShopping} size="2xl" />
                  Giỏ <br />
                  Hàng
                  <span className="badge">0</span>
                </Link>

                <Link
                  to="/Login"
                  className="d-flex flex-column align-items-center justify-content-center text-white text-uppercase fs-4 ms-1"
                >
                  <FontAwesomeIcon icon={faUser} size="2xl" /> Đăng nhập
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-3">
        <div className="container-xl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-5">
                <div>
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-3 d-flex align-items-center text-white fs-2 text-uppercase "
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <FontAwesomeIcon icon={faBars} />
                      <span>shop categories</span>
                    </button>
                    <ul className="dropdown-menu ">
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Linkction
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white " to="">
                          Linknother Linkction
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Something else here
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-5">
                    <NavLink className="text-white text-uppercase fs-3 " to="/">
                      Home
                    </NavLink>
                    <NavLink className="text-white text-uppercase fs-3" to="/Products">
                      Main Store
                    </NavLink>
                    <NavLink className="text-white text-uppercase fs-3" to="/Blogs">
                      Blogs
                    </NavLink>
                    <NavLink className="text-white text-uppercase fs-3" to="/Contact">
                      Contact
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
