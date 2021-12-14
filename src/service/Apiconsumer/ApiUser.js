

const url = `http://localhost:5000/user`


export const APIConsumer = {
    //    
    loginUser: async (user) => {
        try {
            let result = await fetch(url+'/login' , {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    "email": user.email,
                    "password": user.password
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
            let result = await fetch(`http://localhost:5000/user/`, {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    "avatar": user.avatar,
                    "name": user.name,
                    "email": user.email,
                    "surname": user.surname,
                    "password": user.password,
                    "phone": user.phone,
                    "age": user.age,
                    "address": user.address
                })
            })

            const token = await result.json();
            // console.log(token);
            return token
        } catch (error) {

            console.log(error)
        }
    },
    getAllUsers: async () => {

        console.log('getAllUsers');
        try {
            let result = await fetch(url + '/all', {
                method: "GET",
                headers: { 'Content-Type': 'application/json' },
            })

            const users = await result.json();
            console.log(users);
            return users
        } catch (error) {

            console.log(error)
        }
    },
    deleteUsers: async (id) => {
        console.log(id)
        try {
            const result = await fetch(url + id, {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: "GET"
            })
            const data = await result.json();
            // console.log(data);
            return data

        } catch (error) {
            console.log(error)
        }
    }

}