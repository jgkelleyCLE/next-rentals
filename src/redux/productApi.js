import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://tentlify-ecom.up.railway.app' }),
    // baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
    tagTypes: ['Product'],
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: ()=> ({
                url: '/api/products',
                method: 'GET'
            }),
            providesTags: ['Product']
        }),
        getProduct: builder.query({
            query: (id)=> ({
                url: `/api/products/${id}`,
                method: 'GET'
            }),
            providesTags: ['Product']
        }),
        getProductsByCategory: builder.query({
            query: (category)=> ({
                url: `/api/products/category/${category}`,
                method: 'GET'
            }),
            providesTags: ['Product']
        }),
        searchProducts: builder.query({
            query: (searchTerm) => ({
                url: `/api/products/search?q=${searchTerm}`,
                method: 'GET'
            }),
            providesTags: ['Product'],
            onError: (error) => {
                console.error(`Error searching products with term ${searchTerm}:`, error);
            }
        }),
    })
})

export const { useGetAllProductsQuery, useGetProductQuery, useGetProductsByCategoryQuery, useSearchProductsQuery  } = productApi;