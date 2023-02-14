import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: 'pallab',
    age: 26,
    city: 'kolkata'
}

const profileSlice = createSlice({
    name: 'change profile',
    initialState,
    reducers: {
        changeName(state) {
            state.name = 'Mondal'
        },
        changeAge(state) {
            if (state.age === 26) {
                state.age = 100
            }
            else{
                state.age=26
            }
        },
        changecity(state, action) {
            state.city = action.payload
        }
    }
})

export const { changeName, changeAge, changecity } = profileSlice.actions;
export const profileReducer = profileSlice.reducer;