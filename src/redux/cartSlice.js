
import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     cartList: localStorage.getItem('tentlifyCart') ? JSON.parse(localStorage.getItem('tentlifyCart')) : [],
//     shippingAddress: localStorage.getItem('tentlifyShippingAddress') ? JSON.parse(localStorage.getItem('tentlifyShippingAddress')) : {},
// }

const initialState = {
    cartList: [],
    shippingAddress: {},
    cartSubtotal: 0
}


const cartSlice = createSlice({
    name: "cartSlice",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const itemIndex = state.cartList.findIndex(item => item.id === action.payload.id)

            if(itemIndex >= 0) {
                state.cartList[itemIndex].cartQuantity += action.payload.cartQuantity;
            } else {
                const newProduct = {...action.payload, cartQuantity: action.payload.cartQuantity}
                state.cartList.push(newProduct)
            }
        },
        removeFromCart: (state, action) => {
            const remainingItems = state.cartList.filter(item => item.id !== action.payload.id);
            state.cartList = remainingItems;
        },
        increaseQuantity: (state, action) => {
            const itemIndex = state.cartList.findIndex(item => item.id === action.payload.id)
            state.cartList[itemIndex].cartQuantity += 1;
        },
        decreaseQuantity: (state, action) => {
            const itemIndex = state.cartList.findIndex(item => item.id === action.payload.id)
            if(state.cartList[itemIndex].cartQuantity > 1) {
                state.cartList[itemIndex].cartQuantity -= 1;
            } else {
                const remainingCartItems = state.cartList.filter(item => item.id !== action.payload.id)
                state.cartList = remainingCartItems;
            }
        },
        clearCart: (state) => {
            state.cartList = [];
        },
        saveShippingAddress: (state, action) => {
            state.shippingAddress = action.payload
        },
        calculateSubtotal: (state) => {
            state.cartSubtotal = state.cartList.reduce((acc, item) => acc + item.price * item.cartQuantity, 0)
        },
        setCartItems: (state, action) => {
            // Replace entire cart list instead of adding to it
            state.cartList = action.payload
        },
    }
})

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart, saveShippingAddress, setCartItems } = cartSlice.actions
export default cartSlice.reducer