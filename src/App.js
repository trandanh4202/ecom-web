import React from 'react';
import './App.scss';
import './responsive.scss';
import { RouterProvider } from 'react-router-dom';

import './components/Modal/modal.scss';

import router from './routes/routes';
import { Provider } from 'react-redux';
import { store } from './features/store';
function App() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}

export default App;
