import { ADD_FEEDBACK,GET_FEEDBACK } from "./actionType"

let initialState = {
    feedback : []
}

export const feedbackReducer = (state=initialState,{type,payload})=>{
switch(type){
    case GET_FEEDBACK:
        return{
            ...state,
            feedback:payload
        }
    default:
        return state
}
}