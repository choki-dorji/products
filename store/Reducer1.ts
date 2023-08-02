import {createSlice} from "@reduxjs/toolkit"
import { products } from "@/components/Card/Card"

interface Products {
    products: products[]
}
const initialState: Products = {
    products : []
}
const Reducer = createSlice({
    name: "reducer",
    initialState,
    reducers:{
        getItem: (state, action) => {
            state.products.push(action.payload)
        },
      
    }
})
export const {getItem} = Reducer.actions
export default Reducer.reducer 