import { ADD_DATA, REMOVE_DATA,UPDATE_DATA} from "./ActionType";


const InitialState ={
    user_data:[]
}

export const todoReducer =(state=InitialState,action)=>{
   switch (action.type) {
    case ADD_DATA:
      return {
        ...state, user_data:[...state.user_data, action.payload]
      }
    case REMOVE_DATA:
     const dltData = state.user_data.filter((ele,k)=> k!==action.payload)

     return {
      ...state,
      user_data:dltData
     }
     case UPDATE_DATA:
      const updateData =state.user_data.map((ele,k)=>k === action.d ?action.payload: ele)
      return {
        ...state,
        user_data:updateData
      }
    default:
      return state
   }
}