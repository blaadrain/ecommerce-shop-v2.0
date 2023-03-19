import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { Product, ProductsSliceState, Status } from './types';

export const fetchProducts = createAsyncThunk<Product[]>(
  'products/fetchProducts',
  async () => {
    const { data } = await axios.get<Product[]>(
      'https://6403a6883bdc59fa8f2a61db.mockapi.io/products'
    );

    return data;
  }
);

const initialState: ProductsSliceState = {
  items: [],
  status: Status.LOADING,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.items = [];
      state.status = Status.LOADING;
    });
    builder.addCase(
      fetchProducts.fulfilled,
      (state, action: PayloadAction<Product[]>) => {
        state.items = action.payload;
        state.status = Status.SUCCESS;
      }
    );
    builder.addCase(fetchProducts.rejected, (state) => {
      state.items = [];
      state.status = Status.ERROR;
    });
  },
});

export default productsSlice.reducer;
