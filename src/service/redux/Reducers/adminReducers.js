const admininitial = {
    token: false,
    admin: {}
}
const adminReducers = (admin = admininitial, action) => {
   

    if (action.type === "ADD_TOKEN_ADMIN") {
        return {
            ...admin,
            token: action.payload
        }
    }
    if (action.type === "ADD_USER") {
        return {
            ...admin,
            admin: action.payload
        }

    }

    return admin
}
export default adminReducers