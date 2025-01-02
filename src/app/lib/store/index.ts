// store/index.ts  
import { configureStore } from "@reduxjs/toolkit";  
import cartReducer from "./cartSlice";  
import authReducer from "./authSlice";  
import { saveState, loadState } from "../helper";  

// Interface for Cart  
interface CartItem {  
  id: string;  
  price: number;  
  quantity: number;  
  totalPrice: number;  
  name: string;  
}  

// Cart state interface  
interface CartState {  
  items: CartItem[];  
  totalQuantity: number;  
}  

// Auth state interface  
interface AuthState {  
  isLogin: boolean;  
}  

// Define the entire application state  
interface RootState {  
  cart: CartState;  
  auth: AuthState;  
}  

// Load initial state  
const preloadedState = loadState() as RootState;  

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

// Export the RootState for use in selectors or components  
export type { RootState };  
export default store;