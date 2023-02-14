import { combineReducers } from "redux";
import MyCounterReducer from "./MyCounterReducer";
import { MyToggleNameReducer } from "./MyToggleNameReducer";
import { MyAdditionReducer } from "./MyAdditionReducer";

//Redux is a predictable state container for JavaScript apps.
//Redux's primary use lies in managing and centralizing application state.

export const rootReducer=combineReducers(
    {
        MyCounterReducer,
        MyToggleNameReducer,
        MyAdditionReducer
    }
)