'use client'

import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useLocalStorage } from '../hooks/useLocalStorage'

export function CartProvider({ children }) {
    const { updateLocalStorage } = useLocalStorage()
    const cartList = useSelector(state => state.cart.cartList)
    const shippingAddress = useSelector(state => state.cart.shippingAddress)
    const cartSubtotal = useSelector(state => state.cart.cartSubtotal)

    useEffect(() => {
        updateLocalStorage('tentlifyCart', cartList)
    }, [cartList])

    useEffect(() => {
        updateLocalStorage('tentlifyShippingAddress', shippingAddress)
    }, [shippingAddress])

    useEffect(() => {
        updateLocalStorage('tentlifySub', cartSubtotal)
    }, [cartSubtotal])

    return children
}