import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartSlice'
import authReducer from './authSlice'
import { productApi } from './productApi'
import { emailApi } from './emailApi'
import { ordersApi } from './ordersApi'
import { authApi } from './authApi'
import { searchApi } from './searchApi'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        cart: cartReducer,
        [authApi.reducerPath]: authApi.reducer,
        [productApi.reducerPath]: productApi.reducer,
        [emailApi.reducerPath]: emailApi.reducer,
        [ordersApi.reducerPath]: ordersApi.reducer,
        [searchApi.reducerPath]: searchApi.reducer
    },
    middleware: getDefaultMiddlware => getDefaultMiddlware().concat(productApi.middleware, authApi.middleware, emailApi.middleware, ordersApi.middleware,
        searchApi.middleware
    )
})