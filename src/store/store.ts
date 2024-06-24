import { configureStore } from "@reduxjs/toolkit";
import CountReducer from "./reducers/CountReducer";
import ListNumberReducer from "./reducers/ListNumberReducer";
import ColorReducer from "./reducers/ColorReducer";
import DisplayReducer from "./reducers/DisplayReducer";
import Arrowreducer from "./reducers/Arrowreducer";
import FavoristUserReducer from "./reducers/FavoristUserReducer";

export const store=configureStore({
    reducer:{
        count:CountReducer,
        listNumber:ListNumberReducer,
        color:ColorReducer,
        display:DisplayReducer,
        arrow:Arrowreducer,
        users:FavoristUserReducer,
    }
})