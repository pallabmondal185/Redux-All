import { configureStore } from "@reduxjs/toolkit";
import { CreReducer } from '../Reducer/CreReducer';

// const initialState = {
//     name: 'pallab',
//     age: 26,
//         phone: 897452147,
//         email: 'pallab@gmail.com',
//         city: 'kolkata',
//         status:'devoloper'
// }

// export const Store = configureStore({
//     reducer: (state) => {
//         return state
//     },
//     preloadedState: initialState
// }
// )

export const Store = configureStore(
    {
        reducer: CreReducer
    }
);
