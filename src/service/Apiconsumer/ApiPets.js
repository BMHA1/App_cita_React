export const APIConsumer = {
    //    

    //adaptar método para la nueva api

    CreatePets: async (pets) => {

        try {
            let result = await fetch(`http://localhost:5000/pet`, {
                method: "POST",
                headers: { "Authorization": localStorage.getItem('token') },
                body: JSON.stringify({
                    "avatar": pets.avatar,
                    "name": pets.name,
                    "userId":pets.id,
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

