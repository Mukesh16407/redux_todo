
import { ADD_DATA,REMOVE_DATA,UPDATE_DATA } from "./ActionType";

export const Add =(items)=>{
    return{
        type:ADD_DATA,
        payload:items
    }
}

export const Remove =(id)=>{
    return{
        type:REMOVE_DATA,
        payload:id
    }
}
export const Update_data =(items,id)=>{
    return{
        type:UPDATE_DATA,
        payload:items,
        d:id
    }
}