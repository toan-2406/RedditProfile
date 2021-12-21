import { createSlice } from '@reduxjs/toolkit';

export const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: [
      {
        title: "",
        desc: "",
        tagsSelected: [],
      },
    ],
  },
  reducers: {
    addPost: (state, action) => {
      state.posts = [...state.posts, action.payload];
    },
  },
});

export const { addPost } = postSlice.actions;
export default postSlice.reducer;