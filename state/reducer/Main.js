import ChangeState from "./reducer"
import {  combineReducers  } from 'redux'
import { Show_order_Details } from "./reducer"


export const Reducers = combineReducers({
    ChangeState,
    Show_order_Details
})