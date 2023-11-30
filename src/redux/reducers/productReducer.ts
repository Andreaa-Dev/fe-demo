import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Product } from "../../types";

const initialState: {
  products: Product[];
  error?: string;
  loading: boolean;
} = {
  products: [],
  loading: false,
};

//redux-thunk: middleware to enable async call in redux
export const fetchAllProductAsync = createAsyncThunk(
  "fetchAllProductAsync",
  async () => {
    try {
      const jsonData = await fetch("https://api.escuelajs.co/api/v1/products");
      const data: Product[] = await jsonData.json();
      return data;
    } catch (e) {
      const error = e as Error;
      return error;
    }
  }
);
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addOne: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload);
    },
    removeProduct: (state, action: PayloadAction<string>) => {
      const foundIndex = state.products.findIndex(
        (p) => p.id === action.payload
      );
      state.products.splice(foundIndex, 1);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllProductAsync.fulfilled, (state, action) => {
      if (!(action.payload instanceof Error)) {
        return {
          ...state,
          products: action.payload,
          loading: false,
        };
      }
    });
    builder.addCase(fetchAllProductAsync.pending, (state, action) => {
      return {
        ...state,
        loading: true,
      };
    });
    builder.addCase(fetchAllProductAsync.rejected, (state, action) => {
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
const productReducer = productsSlice.reducer;
export const { addOne, removeProduct } = productsSlice.actions;
export default productReducer;
