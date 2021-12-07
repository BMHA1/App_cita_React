export default {

    addTokenAdmin: (token) => {

        return {
            type: 'ADD_TOKEN_ADMIN', // es la action que quieres que haga cuando llegue a store
            payload: token,
        }

    },
    addAdmin: (admin) => {
        return {
            type: 'ADD_ADMIN', // es la action que quieres que haga cuando llegue a store
            payload: admin,
        }
    }
}