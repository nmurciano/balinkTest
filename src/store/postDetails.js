import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getPostDetails } from '../providers/apiCalls';


const initialState = {
    postDetails: {},
    status: null
};


export const fetchPostDetails = createAsyncThunk('PostDetails/fetchPostDetails',
 /**  @param id {string} */
 async id => {
    const response = await getPostDetails(id);
    return response.data;
})

export const postDetailsSlice = createSlice({
    name: 'postDetails',
    initialState,
    reducers: {
        setInitialPostDetails: (state, action) => {
            state.postDetails = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPostDetails.pending, (state, action) => {
            state.status = 'loading'
        });

        builder.addCase(fetchPostDetails.rejected, (state, action) => {
            state.status = 'failed'
        });

        builder.addCase(fetchPostDetails.fulfilled, (state, action) => {
            console.log(action.payload);
            state.postDetails = action.payload
            state.status = 'success'
        })
    },
});

//:  { news: { posts: Post[] ; }; }

export const getpostDetails = (state) => state?.postDetails?.postDetails;
export const getpostDetailsStatus = (state) => state?.postDetails?.status;

export default postDetailsSlice.reducer;