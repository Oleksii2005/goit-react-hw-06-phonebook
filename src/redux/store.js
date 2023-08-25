import { configureStore, createReducer } from "@reduxjs/toolkit";

const myReducer = createReducer(10, {})
export const store = configureStore({
    reducer: {
        myValue: myReducer,
    },
})