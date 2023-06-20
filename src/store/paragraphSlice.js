import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ParagraphServices from "../services/ParagraphServices";

// export const addParagraph = createAsyncThunk(
//   "user/addParagraph",
//   async function (data, { rejectWithValue }) {
//     try {
//       const response = await ParagraphServices.addParagraph(data);
//       if (response.status >= 400) {
//         throw new Error("Server Error");
//       }
//       return response.data;
//     } catch (error) {
//       return rejectWithValue();
//     }
//   }
// );

const paragraphSlice = createSlice({
  name: "paragraphs",
  initialState: {
    paragraphs: [],
  },
  reducers: {
    setParagraphs(state, action) {
      state.paragraphs = action.payload;
    },
  }
});

export const { setParagraphs } = paragraphSlice.actions;
export default paragraphSlice.reducer;
