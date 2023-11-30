import { configureStore } from "@reduxjs/toolkit";

import productReducer from "./reducers/productReducer";
import { useDispatch } from "react-redux";
// import usersReducer from "./reducers/usersReducer";

const store = configureStore({
  reducer: {
    productReducer,
    // usersReducer,
  },
});
export type AppState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
export default store;
