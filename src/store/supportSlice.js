import {
  createSlice
} from "@reduxjs/toolkit";

const supportSlice = createSlice({
  name: "support",
  initialState: {
    modals: {
      delete_image: false,
      delete_book: false,
      delete_sound: false,
      delete_paragraphs: false,
      create_user: false,
      delete_user: false,
      edit_user: false,
      login: false,
      create_book: false,
      delete_book: false
    },
    forms: {
      auth: true,
      send_code: false,
      reset_password: false
    }
  },
  reducers: {
    changeForm(state, action) {
      for (var form in state.forms) {
        state.forms = {
          ...state.forms,
          [form]: false,
          [action.payload]: true
        };
      }
    },
    toggleModal(state, action) {
      state.modals[action.payload] = !state.modals[action.payload];
    },
  },
});

export const {
  toggleModal,
  changeForm,
  showToast,
} =
supportSlice.actions;
export default supportSlice.reducer;