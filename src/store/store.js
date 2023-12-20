import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "Components/separate/usersSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});
