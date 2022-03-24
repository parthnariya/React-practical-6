import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "./detailcard-slice";
import userReducer from "./user-slice";

const store = configureStore({
  reducer: { card: cardSlice.reducer, user: userReducer },
});
export default store;
