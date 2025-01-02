import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import authReducer from "./authSlice";
 import { saveState, loadState } from "../helper";

const preloadedState = loadState();

const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
  },
   preloadedState,
});

// Subscribe to store updates to save state to localStorage
store.subscribe(() => {
  saveState({
    cart: store.getState().cart,
    auth: store.getState().auth,
  });
});

export default store;
