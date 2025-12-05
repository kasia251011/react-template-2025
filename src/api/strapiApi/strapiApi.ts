import type { RootState } from "@/redux/store";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || "http://localhost:1337/api";

const baseQuery = fetchBaseQuery({
  baseUrl: STRAPI_URL,
  prepareHeaders: (headers, { getState }) => {
    const session = (getState() as RootState).session;
    if (session.accessToken) {
      headers.set("Authorization", `Bearer ${session.accessToken}`);
    }
    return headers;
  },
});

export const strapiApi = createApi({
  reducerPath: "strapiApi",
  baseQuery,
  tagTypes: ["self"],
  endpoints: () => ({}),
});
