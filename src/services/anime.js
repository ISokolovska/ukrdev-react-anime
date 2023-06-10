import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const BASE_URL = "https://api.jikan.moe/v4/";

export const animeApi = createApi({
  reducerPath: "animeApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${BASE_URL}` }),
  endpoints: (builder) => ({
    getTopAnime: builder.query({
      query: () => `top/anime?page=1&filter=bypopularity&limit=4`,
    }),
  }),
});

export const { useGetTopAnimeQuery } = animeApi;
