import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
    name: "products",
    initialState: {
        products: []
    },
    reducers: {
        addProducts: (state, action) => {
            state.products = action.payload
        }
    }
})

export const {addProducts} = productsSlice.actions

export const selectProducts = (state) => state.products.products

export default productsSlice.reducer