import { configureStore } from '@reduxjs/toolkit';
import newsReducer from './latestNewsSlice';
import launchesReducer from './launchesSlice';
import postDetailsReducer from './postDetails';

export const store = configureStore({
  reducer: {
    news : newsReducer,
    launches: launchesReducer,
    postDetails: postDetailsReducer
  },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch