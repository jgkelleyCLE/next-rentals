import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const searchApi = createApi({
    reducerPath: "searchApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://tentlify-ecom.up.railway.app" }),
    // baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }), //TESTING
    tagTypes: ["Search"],
    endpoints: (builder) => ({
        getAllSearches: builder.query({
            query: () => ({
                url: "/api/search",
                method: "GET",
            }),
            providesTags: ["Search"],
        }),
        createSearch: builder.mutation({
            query: ({term, resultsCount, resultIds}) => ({
                url: "/api/search",
                method: "POST",
                body: {term, resultsCount, resultIds},
            }),
            invalidatesTags: ["Search"],
        }),
        getSearchById: builder.query({
            query: (id) => ({
                url: `/api/search/${id}`,
                method: "GET",
            }),
            providesTags: ["Search"],
        }),
    })

})

export const { useGetAllSearchesQuery, useCreateSearchMutation, useGetSearchByIdQuery } = searchApi