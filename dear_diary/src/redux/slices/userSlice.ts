import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  nickname: string;
}

const userSlice = createSlice({
  name: "user",
  initialState: {nickname: ""} as UserState,
  reducers: {
    setNickname(state, action: PayloadAction<string>) {
      state.nickname = action.payload;
    },
  },
});

export const { setNickname } = userSlice.actions;
export const userReducer = userSlice.reducer;
