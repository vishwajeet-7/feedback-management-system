import axios from 'axios';
import { ADD_FEEDBACK } from './actionType';

export const addFeedback = (payload)=>(dispatch)=>{
axios.post(`${process.env.REACT_APP_SERVER_URL}`,payload)
.then((res)=>{
    dispatch({
        type:ADD_FEEDBACK,
        payload:res.data.feedback
    })
})
.catch((err)=>{
    console.log(err)
})
}