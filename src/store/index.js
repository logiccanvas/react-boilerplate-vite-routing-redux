import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import counterReducer from "@/store/slices/counterSlice";
import userReducer from "@/store/slices/userSlice";

import { authApi } from "@/store/services/auth";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([authApi.middleware]),
});

setupListeners(store.dispatch);
