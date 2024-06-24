import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "../../interfaces/User";

const initialUserLogin={
    id:0,
    email:'',
    password:'',
}
const userLoginReducer=createSlice({
    name:'userRegisterReducer',
    initialState:initialUserLogin,
    reducers:{
        login:(state,action:PayloadAction<User>)=>{
            return {...action.payload}
        },
        reset:(state)=>{
            return initialUserLogin}
    }
})
export const {login}=userLoginReducer.actions;
export default userLoginReducer.reducer;