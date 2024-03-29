import { combineReducers } from "redux";
import adminReducers from "./adminReducers"
import petsReducers from "./petsReducers"
import userReducers from "./userReducers"
import appointmentsReducers from "./appointmentsReducers"
import doctorReducers from "./doctorReducers";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/es/storage/session";

const persistConfig={
    key:'root',
    storage,
    whitelist:['pets', 'appointments','user']
}

const mainReducer = combineReducers({
    admin: adminReducers,
    pets: petsReducers,
    user: userReducers,
    appointments: appointmentsReducers,
    doctor: doctorReducers

})

export default persistReducer(persistConfig, mainReducer)