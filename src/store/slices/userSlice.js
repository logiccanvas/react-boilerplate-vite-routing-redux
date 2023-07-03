import { createSlice } from "@reduxjs/toolkit";

import { setItem, removeItem } from "@/utils/localstorage";
import { getUser } from "@/utils/storeInitial";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    data: getUser(),
  },
  reducers: {
    setUser: (state, action) => {
      state.data = action.payload;
      setItem("user", action.payload);
    },
    removeUser: (state) => {
      state.data = {};
      removeItem("user");
      removeItem("userToken");
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
