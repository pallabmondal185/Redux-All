import { createSlice } from "@reduxjs/toolkit";

const initialState={
    num1:7,
    num2:4,
    result:''
}

const addSlice=createSlice({
    name:'calculator',
    initialState,
    reducers:{
         // standard reducer logic, with auto-generated action types per reducer
    },
    extraReducers:{
        ['ADDITION']:(state)=>{
            state.result=state.num1+state.num2;
        },
        ['SUBSTRACTION']:(state,action)=>{
            state.result=action.payload;
        }
    }
})

export const AddReducer=addSlice.reducer;