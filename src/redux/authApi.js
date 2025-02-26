import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: "https://tentlify-ecom.up.railway.app" }),
    tagTypes: ['User'],
    endpoints: (builder) => ({
        googleSignIn: builder.mutation({
            query: (formData)=> ({
                url: '/api/auth/login',
                method: 'POST',
                body: formData
            }),
            invalidatesTags: ['User']
        })
    })
})

export const { useGoogleSignInMutation } = authApi