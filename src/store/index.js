import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./detailcard-slice";
import userReducer from "./user-slice";

const store = configureStore({
  reducer: { card: cardReducer, user: userReducer },
});
export default store;
