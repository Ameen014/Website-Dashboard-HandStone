import { createSlice, PayloadAction } from "@reduxjs/toolkit";  

// Define the types for the cart item and the cart state  
interface CartItem {  
  id: string;  
  price: number;  
  quantity: number;  
  totalPrice: number; // This can be computed as quantity * price, but keeping it here for clarity  
  name: string;  
}  

interface CartState {  
  items: CartItem[];  
  totalQuantity: number;  
}  

// Define the initial state  
const initialState: CartState = {  
  items: [],  
  totalQuantity: 0,  
};  

// Create the slice  
const cartSlice = createSlice({  
  name: "cart",  
  initialState,  
  reducers: {  
    addItemToCart(state, action: PayloadAction<CartItem>) {  
      const newItem = action.payload;  
      const existingItem = state.items.find((item) => item.id === newItem.id);  
      state.totalQuantity += newItem.quantity;  

      if (!existingItem) {  
        state.items.push({  
          ...newItem,  
          totalPrice: newItem.price * newItem.quantity,  
        });  
      } else {  
        existingItem.quantity += newItem.quantity;  
        existingItem.totalPrice += newItem.price * newItem.quantity;  
      }  
    },  
    removeItemFromCart(state, action: PayloadAction<string>) {  
      const id = action.payload;  
      const existingItem = state.items.find((item) => item.id === id);  
      
      if (existingItem) {  
        state.totalQuantity -= existingItem.quantity;  
        state.items = state.items.filter((item) => item.id !== id);  
      }  
    },  
    clearCart(state) {  
      state.items = [];  
      state.totalQuantity = 0;  
    },  
    changeItemQuantity(  
      state,  
      action: PayloadAction<{ id: string; quantityChange: number }>  
    ) {  
      const { id, quantityChange } = action.payload;  
      const existingItem = state.items.find((item) => item.id === id);  

      if (existingItem) {  
        existingItem.quantity += quantityChange;  
        existingItem.totalPrice = existingItem.quantity * existingItem.price;  
        state.totalQuantity += quantityChange;  

        // Remove item if quantity is zero or less  
        if (existingItem.quantity <= 0) {  
          state.items = state.items.filter((item) => item.id !== id);  
        }  
      }  
    },  
  },  
});  

// Export actions and reducer  
export const cartActions = cartSlice.actions;  
export default cartSlice.reducer;