
const appointmentsReducers = (appointments = [], action) => {
    console.log(appointments, action)

    if (action.type === "ADD_APPOINTMENTS") {

        return {
            ...appointments,
            appointments: appointments.id.concat(action.payload)
        }

    }
    return
}
export default appointmentsReducers