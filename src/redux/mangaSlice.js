import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const BASE_URL = "https://api.jikan.moe/v4/";

export const mangaApi = createApi({
  reducerPath: "mangaApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${BASE_URL}` }),
  tagTypes: ["manga"],
  endpoints: (builder) => ({
    getTopManga: builder.query({
      query: ({ page = 1, limit = 4, filter = "bypopularity" }) =>
        `top/manga?page=${page}&filter=${filter}&limit=${limit}`,
      keepUnusedDataFor: 30,
      providesTags: ["manga"],
    }),
    getMangaSearch: builder.query({
      query: ({ page = 1, limit = 4, search }) =>
        `manga?q=${search}&page=${page}&limit=${limit}`,
      keepUnusedDataFor: 30,
      providesTags: ["manga"],
    }),
    getMangaById: builder.query({
      query: (id) => `manga/${id}`,
      keepUnusedDataFor: 30,
      providesTags: ["manga"],
    }),
  }),
});

export const {
  useGetTopMangaQuery,
  useGetMangaSearchQuery,
  useGetMangaByIdQuery,
} = mangaApi;
