// Redux/CartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  searchQuery: "",
  selectedCategory: "",
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemExist = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (itemExist) {
        itemExist.quantity++;
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1,
        });
      }
    },

    removeFromCart(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    AdjustCart(state, action) {
      const itemExist = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (itemExist) {
        itemExist.quantity += action.payload.quantity;
      }
    },
    clearCart(state) {
      state.items = [];
    },
    setSearchQuery(state, action) {
      state.searchQuery = action.payload;
    },
    setCategory(state, action) {
      state.selectedCategory = action.payload;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  AdjustCart,
  clearCart,
  setSearchQuery,
  setCategory,
} = CartSlice.actions;

export default CartSlice.reducer;
