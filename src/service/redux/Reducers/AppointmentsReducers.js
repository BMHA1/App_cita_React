
const appointmentsReducers = (appointments = [], action) => {

    if (action.type === "ADD_APPOINTMENT") {
     
        return appointments = (action.payload)
    }
    return appointments
}
export default appointmentsReducers