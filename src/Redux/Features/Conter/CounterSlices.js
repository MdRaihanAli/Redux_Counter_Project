import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'counter',
    initialState:{
        value:1,
    },
    reducers:{
        Increment: (state)=>{
            state.value = state.value + 1
        },
        Decrement: (state)=>{
            state.value -= 1
        },
        AddAmount: (state, actions)=>{
            state.value += actions.payload
        }
    }
})
export const {Increment, Decrement, AddAmount} = counterSlice.actions;
export default counterSlice.reducer