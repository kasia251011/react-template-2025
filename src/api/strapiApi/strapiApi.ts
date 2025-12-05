import { config } from "@/config/config";
import type { RootState } from "@/redux/store";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: config.STRAPI_URL,
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
  tagTypes: ["articles"],
  endpoints: () => ({}),
});
