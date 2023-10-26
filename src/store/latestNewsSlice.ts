import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Post } from "../models/post";
import { client } from "../providers/apiService";

const initialState = {
  posts: [],
  status: null,
};

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await client.get("history");
  return response.data;
});

export const newsSlice = createSlice({
  name: "news",
  initialState,

  reducers: {
    setInitialPosts: (state, action) => {
      state.posts = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.status = "failed";
    });

    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.posts = action.payload;
      state.status = "success";
    });
  },
});


export const selectAllPosts = (state) => state.news.posts;
export const getPostsStatus = (state) => state.news.status;
export const selectPostById = (state, postId) => {
  return state?.news?.posts.find((post) => post.id === postId);
};

export default newsSlice.reducer;
