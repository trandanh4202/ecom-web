import React, { useEffect } from 'react';
import { Navigate, Outlet, redirect, useLocation, useNavigate } from 'react-router-dom';
import Profile from '../pages/Profile';
import Footer from './Footer';
import Header from './Header';

const ProfileLayout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/profilelayout/Settings');
  }, []);
  return (
    <>
      {/* <Header /> */}
      <Profile />
      {/* <Outlet /> */}
      {/* <Footer /> */}
    </>
  );
};

export default ProfileLayout;
