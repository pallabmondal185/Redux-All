import { createSlice } from "@reduxjs/toolkit";

 const initialState={
    count:0,
    name:'pallab'
 }

 const CounterSlice=createSlice({
    name:'counter',
    initialState,
    reducers: {
        increment(state){
            state.count=state.count+1;
        },
        decrement(state){
            state.count=state.count-1
        }
    }
 })

 export const {increment,decrement}=CounterSlice.actions;
 export const counterReducer= CounterSlice.reducer;