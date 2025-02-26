import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const ordersApi = createApi({
    reducerPath: 'ordersApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://tentlify-ecom.up.railway.app',
    prepareHeaders: (headers, { getState }) => {
        const token = getState().auth.user?.token
        if (token) {
            headers.set('authorization', `Bearer ${token}`)
            return headers
        }
    }}),
    tagTypes: ['Order'],
    endpoints: (builder) => ({
        getOrders: builder.query({
            query: () => ({
                url: '/api/orders',
                method: "GET"
            }),
            providesTags: ['Order']
        }),
        getUserOrders: builder.query({
            query: (id) => ({
                url: `/api/orders/user/${id}`,
                method: "GET"
            }),
            providesTags: ['Order']
        }),
        getOrderById: builder.query({
            query: (id) => ({
                url: `/api/orders/${id}`,
                method: "GET"
            }),
            providesTags: ['Order']
        }),
        createOrder: builder.mutation({
            query: ({ title, cart, eventDate, itemsPrice, taxPrice, shippingPrice, totalPrice }) => ({
              url: `/api/orders`,
              method: 'POST',
              body: { title, orderItems: cart, eventDate, itemsPrice, taxPrice, shippingPrice, totalPrice }
            }),
            invalidatesTags: ['Order']
        }),
        updateOrderToPaid: builder.mutation({
            query: (id) => ({
                url: `/api/orders/${id}/pay`,
                method: 'PUT'
            }),
            invalidatesTags: ['Order']
        })
    })
})

export const { useGetOrdersQuery, useGetUserOrdersQuery, useGetOrderByIdQuery, useCreateOrderMutation, useUpdateOrderToPaidMutation } = ordersApi