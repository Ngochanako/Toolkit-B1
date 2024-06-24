import { createSlice } from "@reduxjs/toolkit"

const displayState='flex'
const displayReducer=createSlice({
    name:'displayReducer',
    initialState:displayState,
    reducers:{
        changeDisplay:(state)=>{
            let newState:string=state==='grid'?'flex':'grid';
            return newState;
        }
    }
})
export const {changeDisplay}=displayReducer.actions;
export default displayReducer.reducer;