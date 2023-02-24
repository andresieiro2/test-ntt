import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { IMovie } from "../../types/movie";

type InitialStateProps = {
  selected: IMovie | null;
  list: IMovie[] | null;
  error: any;
  loading: boolean;
};

type SearchPayload = {
  search: string;
};

const initialState: InitialStateProps = {
  selected: null,
  loading: false,
  error: null,
  list: null,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setSelectedMovie: (state, action) => {
      state.selected = action.payload;
    },
    resetState: (state, action) => {
      state.selected = null;
      state.list = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.loading = false;
      state.list = action.payload.Search;
    });
    builder.addCase(fetchMovies.rejected, (state, action) => {
      state.loading = false;
      state.error = action;
      state.list = null;
    });
  },
});

const fetchMovies = createAsyncThunk(
  "movies/fetchMovie",
  async (payload: SearchPayload) => {
    const response = await axios.get(process.env.REACT_APP_API_GATEWAY || "", {
      params: {
        type: "movie",
        s: payload.search,
        apikey: process.env.REACT_APP_API_KEY || "",
        i: "tt3896198",
        plot: "short",
      },
    });
    return response.data;
  }
);

export const actions = {
  ...moviesSlice.actions,
  fetchMovies,
};

export default moviesSlice;
