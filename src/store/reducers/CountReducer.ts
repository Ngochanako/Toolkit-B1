import { createSlice } from "@reduxjs/toolkit";

const count:number=0;
const countReducer=createSlice({
    name:'countReducer',
    initialState:count,
    reducers:{
        increase:(state)=>state+1,
        decrease:(state)=>state-1,
        reset:(state)=>count,
    }
})
export const {increase,decrease,reset}=countReducer.actions;
export default countReducer.reducer;