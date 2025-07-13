import { createSlice } from "@reduxjs/toolkit";

let cartSlice = createSlice({

    name :"cart",
    initialState:{
        items:[]
    },
    reducers:{
        
        addCart:(state,action)=>{

            state.items.push(action.payload)
        },

        removeCart:(state)=>{

            state.items.pop()
        },
        clearCart:(state)=>{
state.items.length=0

        }

        
    }
})

 export const {addCart,removeCart,clearCart} = cartSlice.actions
 export default cartSlice.reducer;