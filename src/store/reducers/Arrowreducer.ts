import { createSlice } from "@reduxjs/toolkit"

const arrowState={
    display:'flex',
    width:'200px',
}
const arrowReducer=createSlice({
    name:'arrowReducer',
    initialState:arrowState,
    reducers:{
        changeArrow:(state)=>{
            state.display=state.display=='flex'?'none':'flex';
            state.width=state.width=='200px'?'50px':'200px';
        }
    }
})
export const {changeArrow}=arrowReducer.actions;
export default arrowReducer.reducer;
