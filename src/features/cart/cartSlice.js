import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [
    {
      pizzaId: 12,
      name: "nappoli",
      quantity: 2,
      unitPrice: 16,
      totalPrice: 32,
    },
  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    delItem(state, action) {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    incItemQuant(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity++;
    },
    decItemQuant(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity--;
    },
    clearCart(state, action) {
      state.cart = [];
    },
  },
});

export const { addItem, delItem, incItemQuant, decItemQuant, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;

export const getCart = (state) => state.cart.cart;

export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((acc, curr) => acc + curr.totalPrice, 0);

export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((acc, curr) => acc + curr.quantity, 0);
