import { createSlice } from "@reduxjs/toolkit";

export const useSlide = createSlice({
  name: "user",
  initialState: {
    name: "IT Seven",
    age: "21",
    about: "I'm a software developer",
    avaURL:
      "https://preview.redd.it/rrz3hmsxcll71.png?width=640&crop=smart&auto=webp&s=87cc5ed38d8f088ef9fffef7a4c5756b64309d6a",
    theme: "#dd572e",
    pending: false,
    error: false,
  },
  reducers: {
    updateStart: (state) => {
      state.pending = true;
    },
    updateError: (state) => {
      state.pending = false;
      state.error = true;
    },
    updateSuccess: (state, action) => {
      state.pending = false;
      state.error = false;
      state.name = action.payload.name;
      state.age = action.payload.age;
      state.about = action.payload.about;
      state.avaURL = action.payload.avaURL;
      state.theme = action.payload.theme;
    },
  },
});

export const { updateStart, updateError, updateSuccess } = useSlide.actions;
export default useSlide.reducer;
