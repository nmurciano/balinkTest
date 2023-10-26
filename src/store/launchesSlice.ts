import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
//import { launches } from '../models/launche';
import { getLaunches } from "../providers/apiCalls";

const initialState = {
  launches: [],
  status: null,
};

export const fetchLaunches = createAsyncThunk(
  "launches/fetchLaunches",
  async () => {
    const response = await getLaunches();
    return response.data.docs;
  }
);

export const launchesSlice = createSlice({
  name: "launches",
  initialState,
  reducers: {
    setInitialLaunches: (state, action) => {
      state.launches = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchLaunches.pending, (state, action) => {
      state.status = "loading";
    });

    builder.addCase(fetchLaunches.rejected, (state, action) => {
      state.status = "failed";
    });

    builder.addCase(fetchLaunches.fulfilled, (state, action) => {
      state.launches = action.payload;
      state.status = "success";
    });
  },
});

//:  { news: { posts: Post[] ; }; }

export const selectAllLaunches = (state) => {
  return state?.launches?.launches;
};


export default launchesSlice.reducer;
