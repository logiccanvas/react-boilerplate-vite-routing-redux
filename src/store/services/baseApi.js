import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getItem } from "@/utils/localstorage";

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
    prepareHeaders: (headers) => {
      const token = getItem("userToken");

      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: () => ({}),
});
