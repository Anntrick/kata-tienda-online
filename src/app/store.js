import { configureStore } from '@reduxjs/toolkit'
import cartSlice from '../containers/Cart/cartSlice'
import productsSlice from '../containers/Products/productsSlice'

export default configureStore({
    reducer: {
        products: productsSlice,
        cart: cartSlice
    }
})