import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Product } from "../../types";
import { url } from "../../common/common";

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
      const jsonData = await fetch(`${url}/products`);
      const res = await jsonData.json();
      const data: Product[] = res.products;
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
export const { addOne } = productsSlice.actions;
export default productReducer;
