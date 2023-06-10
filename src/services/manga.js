import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const BASE_URL = "https://api.jikan.moe/v4/";

export const mangaApi = createApi({
  reducerPath: "mangaApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${BASE_URL}` }),
  endpoints: (builder) => ({
    getTopManga: builder.query({
      query: () => `top/manga?page=1&filter=bypopularity&limit=4`,
    }),
  }),
});

export const { useGetTopMangaQuery } = mangaApi;

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
