import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Product, ProductOrder } from "../../types";
import { url } from "../../common/common";

const initialState: {
  orders: ProductOrder[];
  error?: string;
  loading: boolean;
} = {
  orders: [],
  loading: false,
};

const token = localStorage.getItem("userToken");

//redux-thunk: middleware to enable async call in redux
export const fetchAllOrdersByUserIdAsync = createAsyncThunk(
  "fetchAllOrdersByUserIdAsync",
  async (userId: string) => {
    try {
      const jsonData = await fetch(`${url}/orders/${userId}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      const data: ProductOrder[] = await jsonData.json();
      return data;
    } catch (e) {
      const error = e as Error;
      return error;
    }
  }
);
const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    addOne: (state, action: PayloadAction<ProductOrder>) => {
      state.orders.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllOrdersByUserIdAsync.fulfilled, (state, action) => {
      if (!(action.payload instanceof Error)) {
        return {
          ...state,
          orders: action.payload,
          loading: false,
        };
      }
    });
    builder.addCase(fetchAllOrdersByUserIdAsync.pending, (state, action) => {
      return {
        ...state,
        loading: true,
      };
    });
    builder.addCase(fetchAllOrdersByUserIdAsync.rejected, (state, action) => {
      if (action.payload instanceof Error) {
        return {
          ...state,
          loading: false,
          error: action.payload.message,
        };
      }
    });
  },
});
const ordersReducer = ordersSlice.reducer;
export const { addOne } = ordersSlice.actions;
export default ordersReducer;
