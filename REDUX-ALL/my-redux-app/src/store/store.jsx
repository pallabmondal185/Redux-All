import { createStore } from "redux";
import { rootReducer } from '../service/MyCounterReducer/index'
export const store = createStore(
    rootReducer
)