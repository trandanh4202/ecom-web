import React, { useEffect, useState } from 'react';
import Tippy from '@tippyjs/react'; // different import path!

import Image from '~/components/Image/Image';

import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faCartShopping,
  faCircleXmark,
  faCoins,
  faGear,
  faLocationDot,
  faMagnifyingGlass,
  faSignOut,
  faSpinner,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

import { Wrapper } from '~/components/Popper';
import AccountItem from '~/components/ProductSearch';
import Menu from '~/components/Popper/Menu/Menu';
import Search from '../Search/Search';

const Header = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [userInfo, setUserInfo] = useState(true);
  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: 'View profile',
      to: '/@hoaa',
    },
    {
      icon: <FontAwesomeIcon icon={faCoins} />,
      title: 'Get coins',
      to: '/coin',
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: 'Settings',
      to: '/settings',
    },
    // ...MENU_ITEMS,
    {
      icon: <FontAwesomeIcon icon={faSignOut} />,
      title: 'Log out',
      to: '/logout',
      separate: true,
    },
  ];
  useEffect(() => {
    setTimeout(() => {
      setSearchResult([]);
    }, 0);
  }, []);
  // Handle logic
  const handleMenuChange = (menuItem) => {
    switch (menuItem.type) {
      case 'language':
        // Handle change language
        break;
      default:
    }
  };
  const [activeModal, setActiveModal] = useState(null);

  const handleMouseEnter = (target) => {
    setActiveModal(target);
  };

  const handleMouseLeave = () => {
    setActiveModal(null);
  };
  const categories = [
    {
      id: 'dienthoai',
      label: 'Điện thoại',
      content: [
        {
          title: 'Thương hiệu điện thoại',
          contentLink: ['Iphone', 'Samsung', 'Xiaomi', 'Oppo'],
        },
        {
          title: 'Mức giá điện thoại',
          contentLink: ['5 triệu', '10 triệu', '15 triệu', '20 triệu'],
        },
      ],
    },
    {
      id: 'dienthoai1',
      label: 'Điện thoại1',
      content: [
        {
          title: 'Thương hiệu điện thoại1111',
          contentLink: ['Iphone', 'Samsung', 'Xiaomi', 'Oppo'],
        },
        {
          title: 'Mức giá điện thoại111',
          contentLink: ['5 triệu', '10 triệu', '15 triệu', '20 triệu'],
        },
      ],
    },
    {
      id: 'dienthoai13',
      label: 'Điện thoại13',
      content: [
        {
          title: 'Thương hiệu điện thoại11113',
          contentLink: ['Iphone', 'Samsung', 'Xiaomi', 'Oppo'],
        },
        {
          title: 'Mức giá điện thoại1311',
          contentLink: ['5 triệu', '10 triệu', '15 triệu', '20 triệu'],
        },
        {
          title: 'Mức giá điện thoại1311',
          contentLink: ['5 triệu', '10 triệu', '15 triệu', '20 triệu'],
        },
      ],
    },
  ];
  const handleModalMouseEnter = () => {
    // Do nothing or add any specific behavior if needed
  };
  return (
    <>
      <div className="header sticky-top">
        <section className="header-upper py-3">
          <div className="container-xl">
            <div className="row align-items-center">
              <div className="col-lg-2 col-2 col-md-3">
                <Link to="/">
                  <img className="header-logo" src="/images/logo.png" alt="" />
                </Link>
              </div>
              <div className="col-lg-5 col-5 col-md-9 ">
                <Search />
              </div>
              <div className="col-lg-5 col-5 col-md-12">
                <div className="header-upper-links d-flex align-items-center justify-content-between">
                  <Link
                    to="profilelayout/settings"
                    className="d-flex align-items-center justify-content-center   fw-bold fs-4 ms-1"
                  >
                    <FontAwesomeIcon icon={faLocationDot} size="2xl" />
                    <span className="header-text">
                      Cửa hàng <br />
                      gần bạn
                    </span>
                  </Link>
                  <Link to="cart" className=" d-flex align-items-center fw-bold fs-4 ms-1">
                    <FontAwesomeIcon icon={faCartShopping} size="2xl" />
                    <span className="header-text">
                      Giỏ <br />
                      Hàng
                    </span>
                    <span className="badge">0</span>
                  </Link>

                  {userInfo ? (
                    <>
                      {/* <span>Hi, Danh</span> */}

                      <Menu items={userMenu} onChange={handleMenuChange}>
                        <Image className="user-avatar" src="/images/logo.png" alt="Nguyen Van A" />
                      </Menu>
                    </>
                  ) : (
                    <Link
                      to="Login"
                      className="d-flex flex-column align-items-center justify-content-center  fw-bold fs-4 ms-1"
                    >
                      <FontAwesomeIcon icon={faUser} size="2xl" /> <span className="header-text">Đăng nhập</span>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="header-bottom py-3">
          <div className="container-xl">
            <div className="row">
              <div className="col-12">
                <div className="menu-bottom d-flex align-items-center gap-5">
                  <div>
                    <div className="dropdown">
                      <button
                        className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-3 d-flex align-items-center  fs-2 text-uppercase fw-bold"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <FontAwesomeIcon icon={faBars} />
                        <span>Danh mục</span>
                      </button>
                      <ul className="dropdown-menu">
                        {categories.map((category) => (
                          <li key={category.id}>
                            <Link className="dropdown-item " to="" onMouseEnter={() => handleMouseEnter(category.id)}>
                              {category.label}
                            </Link>
                            {activeModal === category.id && (
                              <div className="modal-content" onMouseLeave={handleMouseLeave}>
                                {/* <div className="row"> */}
                                {category.content.map((item) => (
                                  <div className="w-25">
                                    {/* <div key={item.title}> */}
                                    <div className="title">{item.title}</div>
                                    <div className="d-flex flex-column content">
                                      {item.contentLink.map((link) => (
                                        <Link key={link}>{link}</Link>
                                      ))}
                                      {/* </div> */}
                                    </div>
                                  </div>
                                ))}
                                {/* </div> */}
                              </div>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="menu-links">
                    <div className="d-flex align-items-center gap-5">
                      <NavLink className=" text-uppercase fs-2 fw-semibold " to="/">
                        Home
                      </NavLink>
                      <NavLink className=" text-uppercase fs-2 fw-semibold" to="/Products">
                        Main Store
                      </NavLink>
                      <NavLink className=" text-uppercase fs-2 fw-semibold" to="/Blogs">
                        Blogs
                      </NavLink>
                      <NavLink className=" text-uppercase fs-2 fw-semibold" to="/Contact">
                        Contact
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Header;
