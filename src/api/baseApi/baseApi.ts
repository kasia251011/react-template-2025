import type { RootState } from "@/redux/store";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = import.meta.env.VITE_BACKEND_URL || "/api";

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    const session = (getState() as RootState).session;
    if (session.accessToken) {
      headers.set("Authorization", `Bearer ${session.accessToken}`);
    }
    return headers;
  },
});

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery,
  tagTypes: ["self"],
  endpoints: (builder) => ({
    healthCheck: builder.query({
      query: () => "/health-check",
    }),
  }),
});

export const { useHealthCheckQuery } = baseApi;
