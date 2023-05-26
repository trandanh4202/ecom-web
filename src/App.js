import React from 'react';
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import './components/Modal/modal.scss';
import About from './pages/About';
import Contact from './pages/Contact';
import OurStore from './pages/OurStore';
import Blogs from './pages/Blogs';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import Register from './pages/Register';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ShippingPolicy from './pages/ShippingPolicy';
import TermConditions from './pages/TermConditions';
import RefundPolicy from './pages/RefundPolicy';
import SingleProduct from './pages/SingleProduct';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="About" element={<About />}></Route>
            <Route path="Contact" element={<Contact />}></Route>
            <Route path="Products" element={<OurStore />}></Route>
            <Route path="SingleProduct" element={<SingleProduct />}></Route>
            <Route path="Blogs" element={<Blogs />}></Route>
            <Route path="Login" element={<Login />}></Route>
            <Route path="ForgotPassword" element={<ForgotPassword />}></Route>
            <Route path="Register" element={<Register />}></Route>
            <Route path="PrivacyPolicy" element={<PrivacyPolicy />}></Route>
            <Route path="ShippingPolicy" element={<ShippingPolicy />}></Route>
            <Route path="TermConditions" element={<TermConditions />}></Route>
            <Route path="RefundPolicy" element={<RefundPolicy />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
