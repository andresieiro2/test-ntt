import { configureStore } from "@reduxjs/toolkit";

import movieSlice from "./slices/movies";

const store = configureStore({
  reducer: { movies: movieSlice.reducer },
});

export default store;
export type AppDispatchType = typeof store.dispatch;
