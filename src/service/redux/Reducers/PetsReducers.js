const petsReducers = (pets = [], action) => {
    console.log(action.payload)
    if (action.type === "ADD_PETS") {
       
        return pets = (action.payload)
    }

    return pets
}
export default petsReducers