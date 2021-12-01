const url = "http://localhost:5000/pet"
export const APIConsumer = {
    //    

    //adaptar método para la nueva api

    CreatePets: async (pets) => {

        try {
            let result = await fetch(url, {
                method: "POST",
                headers: { "Authorization": localStorage.getItem('token') },
                body: JSON.stringify({
                    "avatar": pets.avatar,
                    "name": pets.name,
                    "userId": pets.id,
                    "specie": pets.specie,
                    "weight": pets.weight,
                    "age": pets.age,
                    "gender": pets.gender,
                    "disease": pets.disease
                })
            })

            const token = await result.json();
            console.log(token);
            return token
        } catch (error) {

            console.log(error)
        }
    },
    getAllPets: async (user) => {
        let id = user.user.data
        let token = user.token
        console.log(id)
        try {
            const result = await fetch(url + "/allpets/" + id, {
                headers: {
                    "Authorization": token
                },
                method: "GET"
            })
            const pets = await result.json()
            console.log(pets)
            return pets

        } catch (error) {
            console.log(error)
        }
    },
}

