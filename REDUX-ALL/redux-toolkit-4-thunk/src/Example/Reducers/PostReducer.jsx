import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState={
    entities:[]
}

//A function that accepts a Redux action type string and a callback function that should return a promise.
export const getPost=createAsyncThunk('post/getPost',async()=>{
    const res=await fetch('https://jsonplaceholder.typicode.com/posts');
    const data=await res.json();
    return data;
})

//A function that accepts an initial state, an object of reducer functions, and a "slice name", 
//and automatically generates action creators and action types that correspond to the reducers and state.
const postSlice=createSlice({
    name:'fetchPost',
    initialState,
    reducers:{},
    extraReducers:{
        [getPost.fulfilled]:(state,{payload})=>{
            state.entities=payload;
        }
    }
})

export const postReducer=postSlice.reducer;