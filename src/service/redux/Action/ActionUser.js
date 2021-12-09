export default {

    addToken: (token) => {
        
        return {
            type: 'ADD_TOKEN', // es la action que quieres que haga cuando llegue a store
            payload: token
        }
    },
    addUser: (user) => {

        return {
            type: 'ADD_USER', // es la action que quieres que haga cuando llegue a store
            payload: user,
        }
    },
    addAllUsers: (users) => {
        return {
            type: 'ADD_ALL_USER', // es la action que quieres que haga cuando llegue a store
            payload: users,
        }
    }

}