import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null
}

const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
            
        },
        logoutUser: (state, action) => {
            state.user = null
            
        }
    }
})

export const { setUser, logoutUser } = authSlice.actions
export default authSlice.reducer

