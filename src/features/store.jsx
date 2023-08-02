import { configureStore } from '@reduxjs/toolkit';
import productReducer from './products/productsSlice';
import singleProductReducer from './singleProduct/singleProductSlice';

import authReducer from './auth/authSlice';
import categoriesReducer from './category/categoriesSlice';
import brandsReducer from './brands/brandsSlice';
import reviewsReducer from './reviews/reviewsSlice';

export const store = configureStore({
  reducer: {
    products: productReducer,
    singleProduct: singleProductReducer,
    auth: authReducer,
    categories: categoriesReducer,
    brands: brandsReducer,
    reviews: reviewsReducer,
  },
});
