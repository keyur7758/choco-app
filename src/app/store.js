import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../components/products/productSlice";
import cartSlice from "../features/cart/cartSlice";

export const store = configureStore({
    reducer: {
        Product: productReducer,
        Cart:cartSlice
    }
})