import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import useAuth from "../utils/hooks/useAuth";

const API_SERVICE_URL = process.env.API_SERVICE_URL;

export const customerApi = createApi({
  reducerPath: "customerApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_SERVICE_URL,
    prepareHeaders: (headers) => {
      const { token } = useAuth();

      if (token) {
        headers.set("x-auth-token", `${token}`);
      }

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCustomer: builder.query({
      query: (id) => `customers/${id}`,
    }),
  }),
});

export const { useGetCustomerQuery } = customerApi;
