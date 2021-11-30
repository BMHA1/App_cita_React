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

    }
}