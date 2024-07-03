import { createSlice } from "@reduxjs/toolkit";


export const CartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        add(state, action) {
            state.push(action.payload)
        }
    }
})

export default CartSlice.reducer;

export const {add} = CartSlice.action;