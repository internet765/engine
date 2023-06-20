import { createSlice } from "@reduxjs/toolkit";
import * as extra from "./extraReducers";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    email: "",
    loading: false,
    isAuth: false,
    errorAuth: false,
    resetPassword: false,
    resetPasswordError: false,
    resetPasswordCodeError: false,
    changedPassword: false,
    changePasswordError: false,
    changedEmail: false,
    changeEmailError: false,
    approvedChangeEmail: false,
    approveChangeEmailError: false,
    currentUser: {},
  },
  reducers: {
    clearFlag(state) {
      state.errorAuth = false;
      state.loading = false;
      state.resetPasswordCodeError = false;
      state.resetPasswordError = false;
      state.resetPassword = false;
      state.changedPassword = false;
      state.changePasswordError = false;
      state.changedEmail = false;
      state.changeEmailError = false;
      state.approveChangeEmailError = false;
    },
    resetCurrentUser(state) {
      state.currentUser = null;
    },
  },
  extraReducers: {
    [extra.login.pending]: (state) => {
      state.loading = true;
    },
    [extra.login.fulfilled]: (state, action) => {
      const { accessToken, refreshToken } = action.payload;
      localStorage.setItem("etf", JSON.stringify({ refreshToken: refreshToken, accessToken: accessToken}));
      state.isAuth = true;
      state.loading = false;
      state.errorAuth = false;
    },
    [extra.login.rejected]: (state) => {
      state.errorAuth = true;
      state.isAuth = false;
    },
    [extra.checkAuth.pending]: (state) => {
      state.loading = true;
    },
    [extra.checkAuth.fulfilled]: (state, action) => {
      const { accessToken, refreshToken } = action.payload;
      localStorage.setItem( "etf", JSON.stringify({ refreshToken: refreshToken, accessToken: accessToken }));
      state.isAuth = true;
      state.loading = false;
      state.errorAuth = false;
    },
    [extra.checkAuth.rejected]: (state) => {
      localStorage.removeItem("etf");
      state.errorAuth = true;
      state.isAuth = false;
    },
    [extra.logout.pending]: (state) => {
      state.loading = true;
    },
    [extra.logout.fulfilled]: (state) => {
      localStorage.removeItem("etf");
      state.isAuth = false;
      state.errorAuth = false;
      state.loading = false;
    },
    [extra.sendCode.pending]: (state) => {
      state.loading = true;
    },
    [extra.sendCode.fulfilled]: (state, action) => {
      state.email = action.meta.arg;
      state.resetPasswordCodeError = false;
      state.loading = false;
    },
    [extra.sendCode.rejected]: (state) => {
      state.resetPasswordCodeError = true;
    },
    [extra.resetPassword.pending]: (state) => {
      state.loading = true;
    },
    [extra.resetPassword.fulfilled]: (state) => {
      state.resetPasswordError = false;
      state.resetPassword = true;
      state.loading = false;
    },
    [extra.resetPassword.rejected]: (state) => {
      state.resetPasswordError = true;
      state.resetPassword = false;
    },
    [extra.changePassword.pending]: (state) => {
      state.loading = true;
      state.changedPassword = false;
    },
    [extra.changePassword.fulfilled]: (state) => {
      state.loading = false;
      state.changePasswordError = false;
      state.changedPassword = true;
    },
    [extra.changePassword.rejected]: (state) => {
      state.changePasswordError = true;
      state.changedPassword = false;
      state.loading = false;
    },
    [extra.changeEmail.pending]: (state) => {
      state.loading = true;
      state.changedEmail = false;
    },
    [extra.changeEmail.fulfilled]: (state) => {
      state.loading = false;
      state.changedEmail = true;
      state.changeEmailError = false;
    },
    [extra.changeEmail.rejected]: (state) => {
      state.loading = false;
      state.changedEmail = false;
      state.changeEmailError = true;
    },
    [extra.approveChangeEmail.pending]: (state) => {
      state.loading = true;
      state.approveChangeEmailError = false;
    },
    [extra.approveChangeEmail.fulfilled]: (state) => {
      state.loading = false;
      state.approvedChangeEmail = true;
      state.approveChangeEmailError = false;
    },
    [extra.approveChangeEmail.rejected]: (state) => {
      state.loading = false;
      state.approvedChangeEmail = false;
      state.approveChangeEmailError = true;
    },
    [extra.setCurrentUser.fulfilled]: (state, action) => {
      state.currentUser = action.payload;
    }
  },
});

export const { clearFlag, resetCurrentUser } = authSlice.actions;
export default authSlice.reducer;
