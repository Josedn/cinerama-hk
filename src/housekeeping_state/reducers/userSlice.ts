import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  userName: string;
  lastLogin: string;
  lastIp: string;
  rights: string[];
  status: "idle" | "loading" | "failed";
  errorCode: number;
}

const initialState: UserState = {
  userName: "",
  lastLogin: "",
  lastIp: "",
  rights: [],
  status: "idle",
  errorCode: -1,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: builder => {},
});

