import { configureStore } from "@reduxjs/toolkit";
import { UserReducer } from "../reducer/UserReducer";

export const Store=configureStore({reducer: UserReducer})