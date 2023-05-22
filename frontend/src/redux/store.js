import { feedbackReducer } from "./reducer";
import thunk from 'redux-thunk'

const { createStore, applyMiddleware } = require("redux");


export const store = createStore(feedbackReducer,applyMiddleware(thunk))