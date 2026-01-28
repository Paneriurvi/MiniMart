import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  totalAmount: 0,
};

const calculateTotal = cartItems =>
  cartItems.reduce(
    (total, item) => total + item.price * item.cartQuantity,
    0
  );

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existItem = state.cartItems.find(
        i => i.itemName === item.itemName
      );

      if (existItem) {
        existItem.cartQuantity += 1;
      } else {
        state.cartItems.push({ ...item, cartQuantity: 1 });
      }

      state.totalAmount = calculateTotal(state.cartItems);
    },

    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        item => item.itemName !== action.payload.itemName
      );
      state.totalAmount = calculateTotal(state.cartItems);
    },

    increaseQuantity: (state, action) => {
      const item = state.cartItems.find(
        i => i.itemName === action.payload.itemName
      );
      if (item) {
        item.cartQuantity += 1;
      }
      state.totalAmount = calculateTotal(state.cartItems);
    },

    decreaseQuantity: (state, action) => {
      const item = state.cartItems.find(
        i => i.itemName === action.payload.itemName
      );
      if (item && item.cartQuantity > 1) {
        item.cartQuantity -= 1;
      }
      state.totalAmount = calculateTotal(state.cartItems);
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
