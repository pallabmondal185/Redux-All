import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../API/Api";

const initialState = {
    loading: false,
    productData: [],
    error: '',
    cartData: [],
    cartError: false
}

export const getProduct = createAsyncThunk('product/getProduct', async () => {
    try {
        const res = await axiosInstance.get('/products');
        return await res.data;
    } catch (error) {
        console.log('something Error occured: ' + error);
    }
})

const ProductSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addCart(state, action) {
            let filtData = [];
            filtData = state.cartData.filter(item => action.payload === item);
            console.log(state.cartData)
            if (!filtData.length) {
                state.cartData.push(action.payload);
            } else {
                Set.cartError = true;
            }
        },
        removeCart(state, action) {
            state.cartData.splice(action.payload, 1)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getProduct.pending, (state) => {
            state.loading = true;
        })
            .addCase(getProduct.fulfilled, (state, action) => {
                state.productData = action.payload;
                state.loading = false;
            })
            .addCase(getProduct.rejected, (state) => {
                state.error = 'some error happend';
                state.loading = false;
            })
    }
})

export const { addCart, removeCart } = ProductSlice.actions;
export const productReducer = ProductSlice.reducer;