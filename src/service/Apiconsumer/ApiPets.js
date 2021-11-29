export const APIConsumer = {
    //    

    //adaptar método para la nueva api
    CreatePets: async (pets) => {
        try {
            let result = await fetch(`http://localhost:5000/pet`, {
                method: "POST",
                headers: {"Authorization": localStorage.getItem('token')},
                body: JSON.stringify({
                    "avatar": pets.avatar,
                    "name": pets.name,
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
}

// getAllRentals: async () => {
//     console.log(localStorage.getItem("token"))

//     try {
//         const result = await fetch(`http://localhost:9525/rentals`, {
//             headers: {
//             },
//             method: "GET"
//         })
//         console.log(result)
//         return await result.json()

//     } catch (error) {
//         console.log(error)
//     }
