import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authslice.js";
import JobSlice from "./jobSlice.js";

const store =configureStore({
    reducer:{
     auth:authSlice,
     job:JobSlice
    }
})

export default store;