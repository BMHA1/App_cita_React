
const petsReducers = (pet = [], action) => {
    console.log(pet, action)

    if (action.type === "LOG_IN") {

        return {
            ...pet,
            pet: pet.id.concat(action.payload)
        }

    }
    return
}
export default petsReducers