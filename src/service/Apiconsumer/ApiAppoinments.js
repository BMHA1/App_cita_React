export const APIConsumer = {
    CreateAppoinment: async (appoinment) => {
        try {
            let result = await fetch(`http://localhost:5000/appointment`, {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({

                    "date": appoinment.date,
                    "state": appoinment.state,
                    "petIt": appoinment.petIt,
                    "doctorId": appoinment.password

                })
            })
            const token = await result.json();
            console.log(token);
            return token
        } catch (error) {

            console.log(error)
        }

    },
    // (solo admin)
    getAllAppointments: async (id) => {


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