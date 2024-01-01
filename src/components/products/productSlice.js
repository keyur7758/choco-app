import { createSlice } from "@reduxjs/toolkit";
import productdata from "./productdata";

const initialState={
 products : productdata,
}

export const productSlice = createSlice({
    name:"products",
    initialState,
    reducers:{

    }
})

export default productSlice.reducer