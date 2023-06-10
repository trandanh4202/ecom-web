import {
  faAddressCard,
  faBagShopping,
  faClockRotateLeft,
  faGear,
  faRightFromBracket,
  faUser,
  faUserTie,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

import { Link, NavLink, Outlet, redirect, useLocation, useNavigate } from 'react-router-dom';
import SidebarOptions from '~/components/Sidebar/SidebarOptions';

const ProfileLayout = () => {
  return (
    <>
      <div className="profile-wrapper py-5">
        <div className="container-xl">
          <div className="row">
            <div className="col-3">
              <SidebarOptions />
            </div>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileLayout;
