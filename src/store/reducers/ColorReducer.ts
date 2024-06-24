import { createSlice } from "@reduxjs/toolkit";

const colorState={
    background:'white',
    color:'grey',
    text:'Light',
};
const colorReducer=createSlice({
    name:'colorReducer',
    initialState:colorState,
    reducers:{
        change:(state)=>{
            state.background = state.background === 'white' ? 'black' : 'white';
            state.color = state.color === 'grey' ? 'white' : 'grey';
            state.text=state.text==='Light'?'Dark':'Light';
        }
    }
})
export const {change}=colorReducer.actions;
export default colorReducer.reducer;
