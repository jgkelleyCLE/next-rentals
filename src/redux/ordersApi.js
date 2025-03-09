import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const ordersApi = createApi({
    reducerPath: 'ordersApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://tentlify-ecom.up.railway.app',
    // baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001', //TESTING
    prepareHeaders: (headers, { getState }) => {
        const token = getState().auth.user?.token
        if (token) {
            headers.set('authorization', `Bearer ${token}`)
            return headers
        }
    }}),
    tagTypes: ['Orders'],
    endpoints: (builder) => ({
        getOrders: builder.query({
            query: () => ({
                url: '/api/orders',
                method: "GET"
            }),
            providesTags: ['Orders']
        }),
        getUserOrders: builder.query({
            query: (id) => ({
                url: `/api/orders/user/${id}`,
                method: "GET"
            }),
            providesTags: ['Orders']
        }),
        getOrderById: builder.query({
            query: (id) => ({
                url: `/api/orders/${id}`,
                method: "GET"
            }),
            providesTags: ['Orders']
        }),
        createOrder: builder.mutation({
            query: ({ title, cart, eventDate, itemsPrice, taxPrice, shippingPrice, totalPrice }) => ({
              url: `/api/orders`,
              method: 'POST',
              body: { title, orderItems: cart, eventDate, itemsPrice, taxPrice, shippingPrice, totalPrice }
            }),
            invalidatesTags: ['Orders']
        }),
        updateOrderStatus: builder.mutation({
            query: ({ id, status }) => ({
                url: `/api/orders/${id}/status`,
                method: 'PUT',
                body: {status}
            }),
            invalidatesTags: ['Orders']
        }),
        updateOrderToPaid: builder.mutation({
            query: (id) => ({
                url: `/api/orders/${id}/pay`,
                method: 'PUT'
            }),
            invalidatesTags: ['Orders']
        })
    })
})

export const { useGetOrdersQuery, useGetUserOrdersQuery, useGetOrderByIdQuery, useCreateOrderMutation, useUpdateOrderToPaidMutation, useUpdateOrderStatusMutation } = ordersApi