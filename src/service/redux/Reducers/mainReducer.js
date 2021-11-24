import { combineReducers } from "redux";
import adminReducers from "./adminReducers"
import petsReducers from "./petsReducers"
import userReducers from  "./userReducers"
import appointmentsReducers from "./appointmentsReducers"

const mainReducer = combineReducers({
    admin: adminReducers,
    pets: petsReducers,
    user: userReducers,
    appointments: appointmentsReducers

})

export default mainReducer