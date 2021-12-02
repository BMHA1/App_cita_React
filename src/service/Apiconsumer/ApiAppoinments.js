const url = "http://localhost:5000/appointment/"
export const APIConsumer = {


    // (solo admin)
    getAllAppointments: async (id) => {


        try {
            const result = await fetch(url + id, {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: "GET"
            })
            const data = await result.json();
            console.log(data);
            return data

        } catch (error) {
            console.log(error)
        }
    },

    deleteAppoinment: async (id) => {
        try {
            const result = await fetch(`http://localhost:9525/appointments/${id}`, {
                headers: {
                    "Authorization": ""
                },
                method: "GET"
            })
            console.log(result)
            return await result.json()

        } catch (error) {
            console.log(error)
        }
    }
}