import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const BASE_URL = "https://api.jikan.moe/v4/";

export const animeApi = createApi({
  reducerPath: "animeApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${BASE_URL}` }),
  tagTypes: ["anime"],
  endpoints: (builder) => ({
    getTopAnime: builder.query({
      query: ({ page = 1, limit = 4, filter = "bypopularity" }) =>
        `top/anime?page=${page}&filter=${filter}&limit=${limit}`,
      keepUnusedDataFor: 30,
      providesTags: ["anime"],
    }),
    getAnimeSearch: builder.query({
      query: ({ page = 1, limit = 4, search }) =>
        `anime?q=${search}page=${page}&limit=${limit}`,
      keepUnusedDataFor: 30,
      providesTags: ["anime"],
    }),
    getAnimeById: builder.query({
      query: (id) => `anime/${id}`,
      keepUnusedDataFor: 30,
      providesTags: ["anime"],
    }),
  }),
});

export const {
  useGetTopAnimeQuery,
  useGetAnimeSearchQuery,
  useGetAnimeByIdQuery,
} = animeApi;
