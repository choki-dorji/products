import { configureStore } from "@reduxjs/toolkit";
import Reducer1 from "./Reducer1";
import Reducer2 from "./Reducer2";

export const store = configureStore({
    reducer: {
        productItem: Reducer1,
        searched: Reducer2 
    }
})