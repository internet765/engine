import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import UserServices from "../services/UserServices";

export const setCurrentUser = createAsyncThunk(
  "user/setCurrentUser",
  async function (id, { rejectWithValue }) {
    try {
      const response = await UserServices.fetchUser(id);
      if (response.status >= 400) {
        throw new Error("Server Error");
      }
      return response.data;
    } catch (error) {
      return rejectWithValue();
    }
  }
);

export const setUsers = createAsyncThunk(
  "user/setUsers",
  async function (_, { rejectWithValue }) {
    try {
      const response = await UserServices.fetchUsers();

      if (response.status >= 400) {
        throw new Error("Server Error");
      }
      return response.data;
    } catch (error) {
      return rejectWithValue();
    }
  }
);

export const deleteUser = createAsyncThunk(
  "user/deleteUser",
  async function (id, { rejectWithValue, dispatch }) {
    try {
      const response = await UserServices.deleteUser(id);
      dispatch(setUsers());
      if (response.status >= 400) {
        throw new Error("Server Error");
      }
      return response.data;
    } catch (error) {
      return rejectWithValue();
    }
  }
);

export const updateUser = createAsyncThunk(
  "user/editUser",
  async function (data, { rejectWithValue, dispatch }) {
    try {
      const response = await UserServices.updateUser(data.id, data.editUser);
      dispatch(setUsers());
      if (response.status >= 400) {
        throw new Error("Server Error");
      }
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const createUser = createAsyncThunk(
  "user/createUser",
  async function (user, { rejectWithValue, dispatch }) {
    try {
      const response = await UserServices.createUser(user);
      dispatch(setUsers());
      if (response.status >= 400) {
        throw new Error("Server Error");
      }
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    idUserToDeleted: null,
    createUserError: false,
    reqStatus: false,
    currentUser: {},
    editUser: {},
    users: [],
  },
  reducers: {
    resetCurrentUser(state) {
      state.currentUser = null;
    },
    resetError(state) {
      state.createUserError = false;
    },
    setIdUserToDeleted(state, action) {
      state.idUserToDeleted = action.payload;
    },
    setEditUser(state, action) {
      state.editUser = action.payload;
    },
  },
  extraReducers: {
    [setCurrentUser.fulfilled]: (state, action) => {
      state.currentUser = action.payload;
    },
    [setCurrentUser.rejected]: (state) => {
      state.reqError = true;
    },
    [setUsers.pending]: (state) => {
      state.reqStatus = true;
    },
    [setUsers.fulfilled]: (state, action) => {
      state.users = action.payload;
      state.reqStatus = false;
    },
    [setUsers.rejected]: (state) => {
      state.reqStatus = true;
    },
    [deleteUser.pending]: (state) => {
      state.reqStatus = true;
    },
    [deleteUser.fulfilled]: (state) => {
      state.reqStatus = false;
    },
    [deleteUser.rejected]: (state) => {
      state.reqStatus = true;
    },
    [updateUser.pending]: (state) => {
      state.reqStatus = true;
    },
    [updateUser.fulfilled]: (state) => {
      state.reqStatus = false;
    },
    [updateUser.rejected]: (state) => {
      state.reqStatus = false;
    },
    [createUser.pending]: (state) => {
      state.reqStatus = true;
    },
    [createUser.fulfilled]: (state) => {
      state.createUserError = false;
      state.reqStatus = false;
    },
    [createUser.rejected]: (state) => {
      state.createUserError = true;
      state.reqStatus = false;
    },
  },
});

export const {
  resetCurrentUser,
  setIdUserToDeleted,
  setEditUser,
  resetError,
} = userSlice.actions;
export default userSlice.reducer;
