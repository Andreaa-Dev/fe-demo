import { useDispatch } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import productsReducer from "./reducers/productReducer";
import usersReducer from "./reducers/userReducer";
import cartsReducer from "./reducers/cartReducer";
import ordersReducer from "./reducers/orderReducer";

const store = configureStore({
  reducer: {
    productsReducer,
    usersReducer,
    cartsReducer,
    ordersReducer,
  },
});
export type AppState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
export default store;
