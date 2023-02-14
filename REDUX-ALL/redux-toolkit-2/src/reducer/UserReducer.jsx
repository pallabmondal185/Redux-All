import { createReducer } from "@reduxjs/toolkit";

const initState = {
    name: 'Pallab',
    email: 'pallab@gmail.com'
};

export const UserReducer = createReducer(initState, (builder) => {
    builder
        .addCase('CHANGE_NAME', (state, action) => {
            state.name = action.payload;
        })
        .addCase('CHANGE_EMAIL', (state, action) => {
            state.email = action.payload;
        })
});