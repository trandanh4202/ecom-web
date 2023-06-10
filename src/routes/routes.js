import { createBrowserRouter } from 'react-router-dom';
import Layout from '~/layouts/DefaultLayout/Layout';
import ProfileLayout from '~/layouts/ProfileLayout/ProfileLayout';
import ForgotPassword from '~/pages/Auth/ForgotPassword/ForgotPassword';
import Login from '~/pages/Auth/Login/Login';
import Register from '~/pages/Auth/Register/Register';
import Blogs from '~/pages/Blogs/Blogs';
import Cart from '~/pages/Cart/Cart';
import Checkout from '~/pages/Checkout/Checkout';
import Contact from '~/pages/Contact/Contact';
import Home from '~/pages/Home/Home';
import About from '~/pages/Policy/About/About';
import PrivacyPolicy from '~/pages/Policy/PrivacyPolicy/PrivacyPolicy';
import RefundPolicy from '~/pages/Policy/RefundPolicy/RefundPolicy';
import ShippingPolicy from '~/pages/Policy/ShippingPolicy/ShippingPolicy';
import TermConditions from '~/pages/Policy/TermConditions/TermConditions';
import Address from '~/pages/Profile/Address/Address';
import OrdersList from '~/pages/Profile/OrderList/OrdersList';
import Redirect from '~/pages/Profile/Redirect/Redirect';
import Settings from '~/pages/Profile/Setting/Settings';
import SingleProduct from '~/pages/SingleProduct/SingleProduct';
import OurStore from '~/pages/Store/OurStore';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    // loader: rootLoader,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'About',
        element: <About />,
      },
      {
        path: 'Contact',
        element: <Contact />,
      },
      {
        path: 'Products',
        element: <OurStore />,
      },
      {
        path: 'SingleProduct',
        element: <SingleProduct />,
      },
      {
        path: 'Cart',
        element: <Cart />,
      },
      {
        path: 'Checkout',
        element: <Checkout />,
      },
      {
        path: 'Blogs',
        element: <Blogs />,
      },
      {
        path: 'Login',
        element: <Login />,
      },
      {
        path: 'ForgotPassword',
        element: <ForgotPassword />,
      },
      {
        path: 'Register',
        element: <Register />,
      },
      {
        path: 'ProfileLayout',
        element: <ProfileLayout />,
        children: [
          {
            path: 'Settings',
            element: <Settings />,
          },
          {
            path: 'Address',
            element: <Address />,
          },
          {
            path: 'OrdersList',
            element: <OrdersList />,
          },
          {
            path: '*',
            element: <Redirect />,
          },
        ],
      },
      {
        path: 'PrivacyPolicy',
        element: <PrivacyPolicy />,
      },
      {
        path: 'ShippingPolicy',
        element: <ShippingPolicy />,
      },
      {
        path: 'TermConditions',
        element: <TermConditions />,
      },
      {
        path: 'RefundPolicy',
        element: <RefundPolicy />,
      },
    ],
  },
]);

const publicRoutes = [];

const privateRoutes = [];
export default router;
