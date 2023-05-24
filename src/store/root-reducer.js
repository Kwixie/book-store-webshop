import { combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "./user/user.slice";
import { productsReducer } from "./products/products.slice";
import { cartReducer } from "./cart/cart.slice";

export const rootReducer = combineReducers({
  user: userReducer,
  products: productsReducer,
  cart: cartReducer,
});
