import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./booksSlice/booksSlice";
import paragraphReducer from "./paragraphSlice";
import supportReducer from "./supportSlice";
import authReducer from "./authSlice/authSlice";
import userReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    books: booksReducer,
    support: supportReducer,
    auth: authReducer,
    user: userReducer,
    paragraph: paragraphReducer,
  }
});
