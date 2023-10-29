import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_SERVICE_URL = process.env.API_SERVICE_URL;

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_SERVICE_URL }),
  endpoints: (builder) => ({
    sendOtp: builder.mutation({
      query: (params) => ({
        url: "/customers/auth/otp/send",
        method: "POST",
        body: params,
      }),
    }),
    verifyOtp: builder.mutation({
      query: (params) => ({
        url: "/customers/auth/otp/verify",
        method: "POST",
        body: params,
      }),
    }),
  }),
});

export const { useSendOtpMutation, useVerifyOtpMutation } = authApi;
