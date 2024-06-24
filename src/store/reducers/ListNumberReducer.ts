import { createSlice } from "@reduxjs/toolkit"

const list:number[]=[]
const listNumberReducer=createSlice({
    name:'listNumberReducer',
    initialState:list,
    reducers:{
         add:(state)=>{
            let num=Math.floor(Math.random()*100);
            state.push(num);
            return state;
         }
    }
})
export const {add}=listNumberReducer.actions;
export default listNumberReducer.reducer;
