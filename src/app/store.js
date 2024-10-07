import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/product/productsSlice"

const store = configureStore({
    reducer: {
        product:productReducer,
    }
});

export default store;