
const userReducer = (user = [], action) => {
    console.log(user, action)

    if (action.type === "LOG_IN") {

        return {
            ...user,
            user: user.id.concat(action.payload)
        }

    }
    return
}
export default userReducer