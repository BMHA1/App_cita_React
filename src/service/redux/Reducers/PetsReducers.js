

const petsReducers = (pets = [], action) => {
   
    if (action.type === "ADD_PETS") {
       
        return pets = (action.payload)
    }

    return pets
}
export default petsReducers