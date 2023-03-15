import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios'
import { http } from '../../util/config';

export interface DetailProductModel {
    id: number;
    name: string;
    alias: string;
    price: number;
    feature: boolean;
    description: string;
    size: string[];
    shortDescription: string;
    quantity: number;
    image: string;
    categories: Category[];
    relatedProducts: RelatedProduct[];
}

export interface Category {
    id: string;
    category: string;
}

export interface RelatedProduct {
    id: number;
    name: string;
    alias: string;
    feature: boolean;
    price: number;
    description: string;
    shortDescription: string;
    image: string;
}

export type ProductState = {
    detailProduct: DetailProductModel | null
}

const initialState: ProductState = {
     detailProduct: null
}

const detailProdSlice = createSlice({
    name: 'detailProdSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>{
        builder 
        .addCase(callApiDetailProductSlice.fulfilled, (state: ProductState, action: PayloadAction< DetailProductModel | null> )=>{
            state.detailProduct = action.payload
        })
    }
});

export const { } = detailProdSlice.actions

export default detailProdSlice.reducer

export const callApiDetailProductSlice = createAsyncThunk('detailProdSlice/callApiDetailProductSlice', async (prodId:string)=>{
    try{
        const result = await http.get(`/api/Product/getbyid?id=${prodId}`)
        console.log(result)
        return result.data.content
    }catch(err){
        console.log(err)
    }
})