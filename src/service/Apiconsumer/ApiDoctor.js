const url = "http://localhost:5000/doctor"
export const APIConsumer = {
    getAllDoctors: async (token) => {
        console.log(token)
        try {
            const result = await fetch(url+'/all', {
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
}