import { configureStore } from '@reduxjs/toolkit'

const initialState={
    name:"Abhishek",
    email:"abc@gmail.com",
    age:"26",
    status:"Programmer",
    phone:"8910374010"
}

export const Store = configureStore({
    reducer:(state)=>{
        return state
    },
    preloadedState:initialState
}
)
  
