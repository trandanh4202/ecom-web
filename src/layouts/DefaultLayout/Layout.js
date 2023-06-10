import React from 'react';
import { Outlet } from 'react-router-dom';
import ScrollToTop from 'react-scroll-to-top';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
const Layout = () => {
  return (
    <>
      <Header />
      {/* <ScrollToTop smooth color="red" /> */}

      {/* <ScrollToTopByMe /> */}
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
