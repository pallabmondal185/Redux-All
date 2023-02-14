import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    entities: [],
    loading: false,
    error: ''
}

//A function that accepts a Redux action type string and a callback function that should return a promise.
export const getUser = createAsyncThunk("users/getUser", async () => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
    }
})

//A function that accepts an initial state, an object of reducer functions, and a "slice name", 
//and automatically generates action creators and action types that correspond to the reducers and state.
const userSlice = createSlice({
    name: 'fetchUser',
    initialState,
    reducers: {},

    extraReducers: {
        [getUser.pending]: (state) => {
            state.loading = true;
        },

        [getUser.fulfilled]: (state, action) => {
            state.entities = action.payload;
            state.loading = false;
        },

        [getUser.rejected]: (state) => {
            state.loading = false;
            state.error = '404 Data Not Found';
        }
    }
})

export const userReducer = userSlice.reducer;