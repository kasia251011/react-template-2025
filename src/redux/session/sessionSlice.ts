import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { SessionState } from "./types";

const initialState: SessionState = {};

export const sessionSlice = createSlice({
  name: "session",
  initialState: initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    },
    logout: (state) => {
      state.accessToken = undefined;
    },
  },
});

export const { setToken, logout } = sessionSlice.actions;
export default sessionSlice.reducer;
