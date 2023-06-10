import React from 'react';
import './App.scss';
import './responsive.scss';
import { RouterProvider } from 'react-router-dom';

import './components/Modal/modal.scss';

import router from './routes/routes';
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
