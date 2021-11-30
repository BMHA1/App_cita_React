import { combineReducers } from "redux";
import adminReducers from "./adminReducers"
import petsReducers from "./petsReducers"
import userReducers from "./userReducers"
import appointmentsReducers from "./appointmentsReducers"
import doctorReducers from "./doctorReducers";

const mainReducer = combineReducers({
    admin: adminReducers,
    pets: petsReducers,
    user: userReducers,
    appointments: appointmentsReducers,
    doctor: doctorReducers

})

export default mainReducer