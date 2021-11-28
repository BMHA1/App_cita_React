
export const APIConsumer = {
    //    
    loginUser: async (email, password) => {
        try {
            let result = await fetch(`http://localhost:4000/users/login`, {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    "email": email,
                    "password": password
                })
            })

            const token = await result.json();
            console.log(token);
            return token
        } catch (error) {

            console.log(error)
        }
    },
    //adaptar método para la nueva api
    CreateUser: async (user) => {
        try {
            let result = await fetch(`http://localhost:5000/user`, {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    "avatar":user.avatar,
                    "name":user.name,
                    "email": user.email,
                    "surname": user.surname,
                    "password": user.password,
                    "phone":user.phone,
                    "age":user.age,
                    "address":user.address
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