
const userReducer = (user = [], action) => {
    console.log(user + 'userReducer', action)

    return user 
}
export default userReducer