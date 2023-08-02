// productSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const initialState = {
  products: [],
  loading: false,
  error: null,
};
// Thực hiện API tạo sản phẩm
export const createProduct = createAsyncThunk('products/createProduct', async (productData) => {
  // const {
  //   auth: { token }, // Lấy token từ slice auth
  // } = getState();

  const response = await axios.post('api/products', productData, {
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJFbWFpbCI6ImxhbmRwYWRtaWthQGdtYWlsLmNvbSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWVpZGVudGlmaWVyIjoiNDNiZDhkMzAtODVhZi00OTYwLThhOWYtZDdmN2VlZWI4NTcxIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiQWRtaW4iLCJleHAiOjE2OTA2MjAxNzIsImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0OjcwNTEiLCJhdWQiOiJodHRwczovL2xvY2FsaG9zdDo3MDUxIn0.cPI3rAFGTj_D6pA_3El9_254MTH88mEbl9iL__m0-V4`,
    },
  });

  return response.data;
});

export const getProducts = createAsyncThunk(
  'products/getProducts',
  async ({ searchValue='',selectedSorts='', currentPageQuery = 1,selectedCategories,selectedBrands}) => {
    console.log(selectedSorts)
    console.log(currentPageQuery)
    let link = `/api/Products?sortBy=${selectedSorts}&page=${currentPageQuery}&pageSize=8`;
    console.log('categories',selectedCategories)

    if(selectedCategories !== null){
     link += `&categoryId=${selectedCategories}`;
    }
    console.log('brands',selectedBrands)
    if(selectedBrands !== null){
      link += `&brandId=${selectedBrands}`;
     }
    if(searchValue !== null){
      link += `&search=${searchValue}`;
    }
     console.log(link)
    const response = await axios.get(link);
    return response.data;
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createProduct.pending, (state) => {
        // Xử lý khi yêu cầu tạo sản phẩm đang pending
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        // Xử lý khi tạo sản phẩm thành công
        console.log('Create product success:', action.payload);
      })
      .addCase(createProduct.rejected, (state, action) => {
        // Xử lý khi tạo sản phẩm bị lỗi
        console.error('Create product error:', action.error);
      })
      .addCase(getProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload.data;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default productsSlice.reducer;
