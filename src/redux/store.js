import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import authReducer from "./reducers/authReducer";
import { authApi } from "../apis/authAPI";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

setupListeners(store.dispatch);
