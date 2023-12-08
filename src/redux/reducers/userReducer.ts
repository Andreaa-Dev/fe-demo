import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "../../types";

const initialState: {
  user: User;
} = {
  user: {
    _id: "",
    name: "test",
    email: "test@gmail.com",
    role: "USER",
  },
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getUserInformation: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
  },
});
const usersReducer = usersSlice.reducer;
export const { getUserInformation } = usersSlice.actions;
export default usersReducer;
