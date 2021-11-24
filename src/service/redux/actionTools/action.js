export default {

    addProductsCar: (productos) => {
        return (
            {
                type: 'ADD_BUY', // es la action que quieres que haga cuando llegue a store
                payload: productos
            }
        )
    },

    deleteProductsCar: (id) => {
        return (
            {
                type: 'DELETE_BUY', // es la action que quieres que haga cuando llegue a store
                payload: {
                    key: id,
                }
            }
        )
    },
    addToken: (token) => {
        return (
            {
                type: 'ADD_TOKEN', // es la action que quieres que haga cuando llegue a store
                payload: {
                    key: token,
                }
            }
        )
    }

}