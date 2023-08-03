import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import GlobalStyles from '~/components/GlobalStyles/GlobalStyles';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <GlobalStyles>
    <App />
    <ToastContainer />
  </GlobalStyles>,
);
