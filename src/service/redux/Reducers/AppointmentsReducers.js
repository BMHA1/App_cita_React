
const appointmentsReducers = (appointments = [], action) => {

    if (action.type === "ADD_APPOINTMENT") {
        console.log("entrando")
        console.log(action.payload)
        return appointments = (action.payload)
    }
    return appointments
}
export default appointmentsReducers