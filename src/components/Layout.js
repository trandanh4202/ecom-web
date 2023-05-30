import React from 'react';
import { Outlet } from 'react-router-dom';
import ScrollToTop from 'react-scroll-to-top';
import Footer from './Footer';
import Header from './Header';
import ScrollToTopByMe from './ScrollToTopByMe';
const Layout = () => {
  return (
    <>
      <Header />
      <ScrollToTop smooth color="red" />

      {/* <ScrollToTopByMe /> */}
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
