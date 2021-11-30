const admininitial = {
    token: false,
    admin: {}
}
const adminReducers = (admin = admininitial, action) => {
   

    if (action === "ADD_TOKEN_ADMIN") {
        return {
            ...admin,
            admin: action.payload.admin
        }
    }

    return admin
}
export default adminReducers