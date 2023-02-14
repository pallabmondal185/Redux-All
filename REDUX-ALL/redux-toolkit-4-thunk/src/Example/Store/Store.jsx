import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "../Reducers/UserReducer";
import { postReducer } from "../Reducers/PostReducer";

export const store=configureStore({
    reducer:{
        userReducer,
        postReducer
    }
})