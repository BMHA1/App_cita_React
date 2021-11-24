
const adminReducers = (admin = [], action) => {
    console.log(admin, action)

    if (action.type === "LOG_IN") {

        return {
            ...admin,
            admin: admin.id.concat(action.payload)
        }

    }
    return
}
export default adminReducers