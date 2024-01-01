import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart:[]
}

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
    GetCart:(state,action)=>{
        state.cart.push(action.payload)
    },
    deleteCart:(state,action)=>{
    state.cart = state.cart.filter((item)=>item.id !== action.payload)
    },
    incCart:(state,action)=>{
        let itemExist = state.cart.find((item)=>item.id === action.payload.id)
        if(itemExist.quantity >= 1){
            itemExist.quantity += 1
        }
    },
    decCart:(state,action)=>{
        let itemExist = state.cart.find((item)=>item.id === action.payload.id)
        if(itemExist.quantity <= 1){
            itemExist.quantity = 1
        }else{
            itemExist.quantity -= 1
        }
    }
    }
})

export const {GetCart,deleteCart,incCart,decCart} = cartSlice.actions
export default cartSlice.reducer