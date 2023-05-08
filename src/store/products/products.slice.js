import { createSlice } from "@reduxjs/toolkit";

export const PRODUCTS_INITIAL_STATE = {
  products: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState: PRODUCTS_INITIAL_STATE,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },
  },
});

export const { setProducts } = productsSlice.actions;
export const productsReducer = productsSlice.reducer;
