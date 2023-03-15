import { configureStore } from "@reduxjs/toolkit";
import detailProdSlice from "./reducer/detailProdSlice";
import productSlice from "./reducer/productSlice";



const store = configureStore({
    reducer: {
      productSlice,
      detailProdSlice
    }
})

export default store;

export type RootState = ReturnType <typeof store.getState>;
export type DispatchType = typeof store.dispatch