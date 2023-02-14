import { createSlice } from "@reduxjs/toolkit";

const initState={
    name: 'pallab mondal'
};

const upperSlice=createSlice({
    name: 'upperCase',
    initialState:initState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase('UPPER_CASE',(state)=>{
            state.name=state.name.toUpperCase();
        })
        .addCase('LOWER_CASE',(state,action)=>{
            state.name=action.payload;
        })
    },
})

export const upperReducer=upperSlice.reducer;

