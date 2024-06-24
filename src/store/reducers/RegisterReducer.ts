import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "../../interfaces/User";

const initialUserRegister={
    id:0,
    email:'',
    password:'',
}
const userRegisterReducer=createSlice({
    name:'userRegisterReducer',
    initialState:initialUserRegister,
    reducers:{
        register:(state,action:PayloadAction<User>)=>{
            return {...action.payload}
        }
    }
})
export const {register}=userRegisterReducer.actions;
export default userRegisterReducer.reducer;