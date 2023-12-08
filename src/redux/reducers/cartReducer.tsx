import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ProductCart } from "../../types";

const initialState: {
  carts: ProductCart[];
} = {
  carts: [],
};

const cartsSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    addProductToCart: (state, action: PayloadAction<ProductCart>) => {
      state.carts.push(action.payload);
    },
  },
});

const cartReducer = cartsSlice.reducer;
export const { addProductToCart } = cartsSlice.actions;
export default cartReducer;
