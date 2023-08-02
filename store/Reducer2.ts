import {createSlice} from "@reduxjs/toolkit"
import { products } from "@/components/Card/Card"

interface Products {
    text: string
}
const initialState: Products = {
    text : ""
}
const Reducer1 = createSlice({
    name: "reducer",
    initialState,
    reducers:{
        search: (state, action) => {
            state.text = action.payload;
          },
      
    }
})
export const { search} = Reducer1.actions
export default Reducer1.reducer 