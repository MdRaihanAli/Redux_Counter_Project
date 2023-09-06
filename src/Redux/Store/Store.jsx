import { configureStore } from "@reduxjs/toolkit";
import conterReduser from '../Features/Conter/CounterSlices'

const store = configureStore({
    reducer:{
        counter : conterReduser 
    }
})

export default store;