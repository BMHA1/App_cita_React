export default {

    addAppointment: (appoinment) => {
        return {
                type: 'ADD_APPOINTMENT', // es la action que quieres que haga cuando llegue a store
                payload: appoinment
            }
      
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