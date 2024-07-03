import { configureStore } from "@reduxjs/toolkit";
import addReducer from './CartSlice';


export const CartStore = configureStore({
    reducers: {
        cart  : addReducer,
    }
})

