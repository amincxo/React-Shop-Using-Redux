import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/product/productsSlice"
import cartReducer from "../features/cart/cartSlice"

const store = configureStore({
    reducer: {
        product:productReducer,
        cart : cartReducer
    }
});

export default store;