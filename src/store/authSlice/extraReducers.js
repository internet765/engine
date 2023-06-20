import { createAsyncThunk } from "@reduxjs/toolkit";
import AuthServices from "../../services/AuthServices";

export const login = createAsyncThunk(
  "auth/login",
  async function (data, { rejectWithValue }) {
    try {
      const response = await AuthServices.login(data);
      if (response.status >= 400) throw new Error("Server Error");
      return response.data;
    } catch (error) {
      return rejectWithValue();
    }
  }
);

export const checkAuth = createAsyncThunk(
  "auth/checkAuth",
  async function (token, { rejectWithValue }) {
    try {
      const response = await AuthServices.refreshToken(token);
      if (response.status >= 400) throw new Error("Server Error");
      return response.data;
    } catch (error) {
      return rejectWithValue();
    }
  }
);

export const sendCode = createAsyncThunk(
  "auth/sendCode",
  async function (email, { rejectWithValue }) {
    try {
      const response = await AuthServices.sendCode(email);
      if (response.status >= 400) throw new Error("Server Error");
      return response.data;
    } catch (error) {
      return rejectWithValue();
    }
  }
);

export const resetPassword = createAsyncThunk(
  "auth/resetPassword",
  async function (data, { rejectWithValue, getState }) {
    const { auth } = getState();

    const reset_data = {
      code: data.code,
      password: data.password,
      email: auth.email,
    };

    try {
      const response = await AuthServices.resetPassword(reset_data);
      if (response.status >= 400) throw new Error("Server Error");
      return response.data;
    } catch (error) {
      return rejectWithValue();
    }
  }
);

export const changePassword = createAsyncThunk(
  "auth/changePassword",
  async function (data, { rejectWithValue }) {
    try {
      const response = await AuthServices.changePassword(data);
      if (response.status >= 400) throw new Error("Server Error");
      return response.data;
    } catch (error) {
      return rejectWithValue();
    }
  }
);

export const changeEmail = createAsyncThunk(
  "auth/changeEmail",
  async function (email, { rejectWithValue }) {
    try {
      const response = await AuthServices.changeEmail(email);
      if (response.status >= 400) throw new Error("Server Error");
      return response.data;
    } catch (error) {
      return rejectWithValue();
    }
  }
);

export const approveChangeEmail = createAsyncThunk(
  "auth/approveChangeEmail",
  async function (code, { rejectWithValue }) {
    try {
      const response = await AuthServices.approveChangeEmail(code);
      if (response.status >= 400) throw new Error("Server Error");
      return response.data;
    } catch (error) {
      return rejectWithValue();
    }
  }
);

export const setCurrentUser = createAsyncThunk(
  "auth/setCurrentUser",
  async function (_, { rejectWithValue }) {
    try {
      const response = await AuthServices.setCurrentUser();
      if (response.status >= 400) throw new Error("Server Error");
      return response.data;
    } catch (error) {
      return rejectWithValue();
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async function (token) {
  const response = await AuthServices.logout(token);
  return response.data;
});
