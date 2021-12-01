export default {

    addPets: (pets) => {
        return {
            type: 'ADD_PETS', // es la action que quieres que haga cuando llegue a store
            payload: pets
        }
    }
}