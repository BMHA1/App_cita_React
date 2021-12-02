const url = "http://localhost:5000/appointment/"
export const APIConsumer = {
   
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
    }
}