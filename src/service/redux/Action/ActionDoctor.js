export default {

    addToken: (token) => {

        return (
            {
                type: '----', // es la action que quieres que haga cuando llegue a store
                payload: {
                    key: token,
                }
            }
        )
    },
    addDoctor: (user) => {

        return (
            {
                type: '----', // es la action que quieres que haga cuando llegue a store
                payload: {
                    user: user,
                }
            }
        )
    }

}