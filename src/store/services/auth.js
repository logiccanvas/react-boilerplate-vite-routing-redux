import { baseApi } from "@/store/services/baseApi";

export const authApi = baseApi
  .enhanceEndpoints({ addTagTypes: [] })
  .injectEndpoints({
    endpoints: (builder) => ({
      userLogin: builder.mutation({
        query: (paylaod) => ({
          url: "login",
          method: "POST",
          body: paylaod,
        }),
      }),
      logout: builder.query({
        query: () => ({
          url: "logout",
        }),
      }),
    }),
  });

export const { useUserLoginMutation, useLogoutQuery } = authApi;
