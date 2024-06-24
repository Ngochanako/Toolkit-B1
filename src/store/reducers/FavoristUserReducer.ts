import { PayloadAction, createSlice } from "@reduxjs/toolkit"

const favouristUsers=[{
    id:0,
    name:'Nguyễn văn a',
    status:true,
},
{ 
    id:1,
    name:'Nguyễn văn b',
    status:false,
},
{
    id:2,
    name:'Nguyễn văn c',
    status:true,
}
]
const favouristUsersReducer=createSlice({
    name:'favouristUsersReducer',
    initialState:favouristUsers,
    reducers:{
        changeFavourist:(state,action:PayloadAction<number>)=>{
            let newFavouristUsers=state.map((btn)=>btn.id==action.payload?{...btn,status:!btn.status}:btn)
            return newFavouristUsers; 
        }
    }
})
export const {changeFavourist}=favouristUsersReducer.actions;
export default favouristUsersReducer.reducer;