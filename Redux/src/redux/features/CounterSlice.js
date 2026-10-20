import { createSlice } from "@reduxjs/toolkit";

const counterSLice = createSlice({
    name:'count',
    initialState:{
        value:0
    },
    reducers:{
        increment:(state)=>{
           
            state.value = state.value + 1;
        },
        decrement:(state)=>{
            state.value -=1
        },
        incrementValueByUserInput:(state,action)=>{
           console.log(action.payload)
            state.value +=action.payload
        }
    }
  
})

export const {increment,decrement,incrementValueByUserInput} = counterSLice.actions
export default counterSLice.reducer