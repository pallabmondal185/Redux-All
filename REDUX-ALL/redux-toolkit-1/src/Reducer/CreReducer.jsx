import { createReducer } from "@reduxjs/toolkit";
//A utility that simplifies creating Redux reducer functions.

const initialState = {
    name: 'pallab',
    age: 26,
    phone: 897452147,
    email: 'pallab@gmail.com',
    city: 'Kolkata',
    status: 'devoloper',
    counter: 0
}

export const CreReducer = createReducer(initialState, (builder) => {
    builder
        .addCase("UPDATE_NAME", (state,) => {
            state.name='Mondal';
        })
        .addCase('UPDATE_AGE',(state,action)=>{
            state.age=action.payload
        })
    builder 
        .addCase('INCREMENT',(state,action)=>{
            state.counter++;
        })
        .addCase('DECREMENT',(state,action)=>{
            state.counter--;
        })
    builder
        .addCase("TOGGLE_CITY",(state,action)=>{
            if(state.city==='Kolkata'){
                state.city='Delhi'
            }
            else if(state.city==='Delhi'){
                state.city='Kolkata'
            }
        })
})