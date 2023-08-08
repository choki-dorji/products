import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import { products } from "@/components/Card/Card"

export const fetchProducts = createAsyncThunk('products/fetch', async () => {
    const response = await fetch('http://localhost:3000/api/products');
    return response.json()
  });

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
        // getItem: (state, action) => {
        //     state.products = action.payload
        // },
      
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
          return action.payload;
        });
      },
})
// export const {getItem} = Reducer.actions
export default Reducer.reducer 