import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "../Reducer/CounterSlice";
import { profileReducer } from "../Reducer/ProfileSlice";
import {upperReducer} from "../Reducer/UpperReducer";
import { AddReducer } from "../Reducer/AddReducer";

export const store=configureStore({
    reducer:{
      counterReducer,
      profileReducer,
      upperReducer,
      AddReducer
    }
  })