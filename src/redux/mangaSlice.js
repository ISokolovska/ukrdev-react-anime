import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const BASE_URL = "https://api.jikan.moe/v4/";

export const mangaApi = createApi({
  reducerPath: "mangaApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${BASE_URL}` }),
  tagTypes: ["manga"],
  endpoints: (builder) => ({
    getTopManga: builder.query({
      query: (page = 1, limit = 4, filter = "bypopularity") =>
        `top/manga?page=${page}&filter=${filter}&limit=${limit}`,
      keepUnusedDataFor: 30,
      providesTags: ["manga"],
    }),
    getMangaSearch: builder.query({
      query: (page = 1, search) =>
        `manga?page=${page}${search ? "&search=" + search : ""}`,
      keepUnusedDataFor: 30,
      providesTags: ["manga"],
    }),
  }),
});

export const { useGetTopMangaQuery, useGetMangaSearchQuery } = mangaApi;

// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { API_URL } from "../../services/apiUrl";

// const friendsApiSlice = createApi({
//   reducerPath: "friendsApiSlice",
//   baseQuery: fetchBaseQuery({
//     baseUrl: `${API_URL}/friends`,

//     prepareHeaders: (headers, { getState }) => {
//       const token = getState().auth.token;

//       if (token) {
//         headers.set("Authorization", `Bearer ${token}`);
//       }
//       return headers;
//     },
//   }),

//   tagTypes: ["friends"],
//   endpoints: (builder) => ({
//     getFriendsList: builder.query({
//       query: () => `/`,
//       keepUnusedDataFor: 30,
//       providesTags: ["friends"],
//     }),
//   }),
//   refetchOnReconnect: true,
// });

// export const { useGetFriendsListQuery } = friendsApiSlice;

// export default friendsApiSlice;
