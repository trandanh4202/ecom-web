import { faClockRotateLeft, faRightFromBracket, faUserTie } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useEffect } from 'react';
import { Link, NavLink, Outlet, redirect, useLocation, useNavigate } from 'react-router-dom';

const Profile = () => {
  return (
    <>
      <div className="profile-wrapper py-5">
        <div className="container-xl">
          <div className="row">
            <div className="col-3">
              <div className="sidebar shadow d-flex flex-column    justify-content-center rounded-4  ">
                {/* <div className="item-menu fs-2">
                  <NavLink to="" className="LinkBar nav-link">
                    <FontAwesomeIcon icon={faUserTie} className="mx-4" />
                    <span>Thông tin tài khoảng</span>
                  </NavLink>
                </div> */}
                <div className="item-menu fs-2">
                  <NavLink to="Settings" className="LinkBar nav-link">
                    <FontAwesomeIcon icon={faUserTie} className="mx-4" />
                    <span>Thông tin tài khoảng</span>
                  </NavLink>
                </div>
                <div className="item-menu fs-2">
                  <NavLink to="OrdersList" className="LinkBar">
                    <FontAwesomeIcon icon={faClockRotateLeft} className="mx-4" />
                    <span>Danh sách giao dịch</span>
                  </NavLink>
                </div>
                <div className="item-menu fs-2">
                  <NavLink to="Login" className="LinkBar">
                    <FontAwesomeIcon icon={faRightFromBracket} className="mx-4" />
                    <span>Thoát tài khoảng</span>
                  </NavLink>
                </div>
              </div>
            </div>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
