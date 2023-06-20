import { createAsyncThunk } from "@reduxjs/toolkit";
import BooksServices from "../../services/BooksServices";

export const getBooks = createAsyncThunk(
  "books/getBooks",
  async function (_, {
    rejectWithValue
  }) {
    try {
      const response = await BooksServices.getBooks();
      if (response.status >= 400) {
        throw new Error("Server Error");
      }
      return response.data;
    } catch (error) {
      return rejectWithValue();
    }
  }
);

export const getBook = createAsyncThunk(
  "books/getBook",
  async function (id, {
    rejectWithValue
  }) {
    try {
      const response = await BooksServices.getBook(id);
      if (response.status >= 400) {
        throw new Error("Server Error");
      }
      return response.data;
    } catch (error) {
      return rejectWithValue();
    }
  }
);

export const deleteBook = createAsyncThunk(
  "books/deleteBook",
  async function (id, {
    rejectWithValue
  }) {
    try {
      const response = await BooksServices.deleteBook(id);
      if (response.status >= 400) {
        throw new Error("Server Error");
      }
      return response.data;
    } catch (error) {
      return rejectWithValue();
    }
  }
);

export const createBook = createAsyncThunk(
  "books/createBook",
  async function (book, {
    rejectWithValue
  }) {
    try {
      const response = await BooksServices.createBook(book.name, book.editor, book.image);
      if (response.status >= 400) {
        throw new Error("Server Error");
      }
      return response.data;
    } catch (error) {
      return rejectWithValue();
    }
  }
);

export const uploadBookImage = createAsyncThunk(
  "books/uploadBookImage",
  async function (image, {
    rejectWithValue
  }) {
    try {
      const response = await BooksServices.uploadBookImage(image);
      return response;
    } catch (error) {
      return rejectWithValue();
    }
  }
);