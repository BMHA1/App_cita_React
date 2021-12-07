
const userinitial = {
    token: false,
    user: {},
    users: {}
}

const userReducer = (user = userinitial, action) => {

    // console.log(action.payload)
    if (action.type === "ADD_TOKEN") {
        return {
            ...user,
            token: action.payload
        }
    }
    if (action.type === "ADD_USER") {
        return {
            ...user,
            user: action.payload
        }

    }
    if (action.type === "ADD_ALL_USER") {
        return {
            ...user,
            users: action.payload
        }
    }
    return user
}
export default userReducer