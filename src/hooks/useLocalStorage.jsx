// 'use client'

// import { useEffect, useState } from 'react'
// import { useDispatch } from 'react-redux'
// import { addToCart, saveShippingAddress } from '../redux/cartSlice'

// export const useLocalStorage = () => {
//     const dispatch = useDispatch()
//     const [isLoading, setIsLoading] = useState(true)

//     useEffect(() => {
//         // Load initial values from localStorage
//         try {
//             const cart = JSON.parse(localStorage.getItem('tentlifyCart')) || []
//             const shippingAddress = JSON.parse(localStorage.getItem('tentlifyShippingAddress')) || {}

//             // Dispatch actions to update Redux store
//             if (cart.length > 0) {
//                 cart.forEach(item => dispatch(addToCart(item)))
//             }
            
//             if (Object.keys(shippingAddress).length > 0) {
//                 dispatch(saveShippingAddress(shippingAddress))
//             }
//         } catch (error) {
//             console.error('Error loading from localStorage:', error)
//         } finally {
//             setIsLoading(false)
//         }
//     }, [dispatch])

//     const updateLocalStorage = (key, value) => {
//         try {
//             localStorage.setItem(key, JSON.stringify(value))
//         } catch (error) {
//             console.error('Error updating localStorage:', error)
//         }
//     }

//     return { updateLocalStorage, isLoading }
// }

'use client'

import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart, setCartItems, saveShippingAddress } from '../redux/cartSlice'

export const useLocalStorage = () => {
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        try {
            const cart = JSON.parse(localStorage.getItem('tentlifyCart')) || []
            const shippingAddress = JSON.parse(localStorage.getItem('tentlifyShippingAddress')) || {}

            // Use setCartItems instead of addToCart to prevent quantity doubling
            if (cart.length > 0) {
                dispatch(setCartItems(cart))
            }
            
            if (Object.keys(shippingAddress).length > 0) {
                dispatch(saveShippingAddress(shippingAddress))
            }
        } catch (error) {
            console.error('Error loading from localStorage:', error)
        } finally {
            setIsLoading(false)
        }
    }, [dispatch])

    const updateLocalStorage = (key, value) => {
        try {
            localStorage.setItem(key, JSON.stringify(value))
        } catch (error) {
            console.error('Error updating localStorage:', error)
        }
    }

    return { updateLocalStorage, isLoading }
}