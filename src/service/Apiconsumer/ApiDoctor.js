const url = "http://localhost:5000/doctor"
export const APIConsumer = {
    getAllDoctors: async (token) => {
        console.log(token)
        try {
            const result = await fetch(url + '/all', {
                headers: {
                    "Authorization": token
                },
                method: "GET"
            })
            const doctors = await result.json()
            console.log(doctors)
            return doctors

        } catch (error) {
            console.log(error)
        }
    },
    CreateAppoinment: async (appoinment) => {
      console.log(appoinment.doctorId)
        try {
            let result = await fetch("http://localhost:5000/appointment", {
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({

                    "date": appoinment.date,
                    "state": appoinment.state,
                    "petId": appoinment.petIt,
                    "doctorId": appoinment.doctorId
                    
                })
            })
            const token = await result.json();
            console.log(token);
            return token
        } catch (error) {

            console.log(error)
        }
    }
}