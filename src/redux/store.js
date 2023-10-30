import { configureStore, setupListeners } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";

import { setupListeners } from "@reduxjs/toolkit/query";
import { authApi } from "../apis/authApi";
import { customerApi } from "../apis/customerApi";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
    [customerApi.reducerPath]: customerApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, customerApi.middleware),
});

setupListeners(store.dispatch);
