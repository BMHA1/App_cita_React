
const userinitial = {
    token: false,
    user: null
}

const userReducer = (user = userinitial, action) => {
    console.log(user + 'userReducer', action)
    console.log(action.payload)
    if (action == "ADD_TOKEN") {
        return {
            ...user,
            token: action.payload.key
        }
    }
    return user
}
export default userReducer