




const petsReducers = (pets = [], action) => {
    console.log( action.payload)
    if (action.type === "ADD_PETS") {
        console.log("entrando")
        console.log(action.payload)
        return pets=(action.payload)
    }

    return pets
}
export default petsReducers