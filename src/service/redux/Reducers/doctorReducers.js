const doctorinitial = {
    token: false,
    doctor: {}
}

const doctorReducer = (doctor = doctorinitial, action) => {
    // console.log(doctor + 'doctorReducer', action)
    // console.log(action.payload)
    if (action === "ADD_TOKEN_DOCTOR") {
        return {
            ...doctor,
            token: action.payload.key
        }
    }
    if (action === "ADD_DOCTOR") {
        return {
            ...doctor,
            user: action.payload.doctor
        }
    }
    return doctor
}
export default doctorReducer