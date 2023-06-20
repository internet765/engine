import { createSlice } from "@reduxjs/toolkit";
import * as extra from "./extraReducers";

const booksSlice = createSlice({
  name: "books",
  initialState: {
    editBook: {},
    userBooks: [],
    allBooks: [],
    createBook: false,
    deleteBook: false,
    idBookToDeleted: null,
  },
  reducers: {
    setIdBookToDeleted(state, action) {
      state.idBookToDeleted = action.payload;
    },
  },
  extraReducers: {
    [extra.getBooks.fulfilled]: (state, action) => {
      state.allBooks = action.payload;
    },
    [extra.getBook.fulfilled]: (state, action) => {
      state.editBook = action.payload;
    },
    [extra.createBook.pending]: (state) => {
      state.createBook = false;
    },
    [extra.createBook.fulfilled]: (state) => {
      state.createBook = true;
    },
    [extra.deleteBook.pending]: (state) => {
      state.deleteBook = false;
    },
    [extra.deleteBook.fulfilled]: (state) => {
      state.deleteBook = true;
    },
  },
});

export const { setIdBookToDeleted } = booksSlice.actions;
export default booksSlice.reducer;
