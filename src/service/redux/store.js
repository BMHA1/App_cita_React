import { createStore } from 'redux'

// contenedor de cosas que settear ---- ("localstorage de app")
// aca puedes meter lo que quieras 
const iniatelState = {
    cart: [],
    products: [
        { "id": 1, "name": "Hipster Ultimate", "price": 50, "image": "https://images.vans.com/is/image/VansEU/VN0A38G1PHN-HERO?$PLP-IMAGE$" },
        { "id": 2, "name": "On Motion Live", "price": 99, "image": "https://images.vans.com/is/image/VansEU/VN0A3WKT4RQ-HERO?$PLP-IMAGE$" },
        { "id": 3, "name": "Underground Max", "price": 90, "image": "https://images.vans.com/is/image/VansEU/VN0A4UHZV3M-HERO?$PLP-IMAGE$" },
        { "id": 4, "name": "Underground Max", "price": 75, "image": "https://images.vans.com/is/image/VansEU/VN0A54F3U8Q-HERO?$PLP-IMAGE$" },
        { "id": 5, "name": "Underground Max", "price": 75, "image": "https://images.vans.com/is/image/VansEU/VN0A3WMAVNG-HERO?$PLP-IMAGE$" },
        { "id": 6, "name": "Underground Max", "price": 75, "image": "https://images.vans.com/is/image/VansEU/VN0A3WKT4PF-HERO?$PLP-IMAGE$" },
        { "id": 7, "name": "Underground Max", "price": 75, "image": "https://images.vans.com/is/image/VansEU/VN0A3WKT4R2-HERO?$PLP-IMAGE$" },
        { "id": 8, "name": "Underground Max", "price": 75, "image": "https://images.vans.com/is/image/VansEU/VN0A3MVD4Y5-HERO?$PLP-IMAGE$" }
    ],
    user: {
        token: null
    }
}

const reducer = (currentState = iniatelState, action) => {

    console.log('debug REDUCER', action)

    if (action.type === 'ADD_BUY') {
        return {
            ...currentState,
            task: currentState.cart.concat(action.payload)
        }

    } if (action.type === 'DELETE_BUY') {
        return {
            ...currentState,
            task: currentState.cart.splice((action.payload.key, 1))
        }

    } if (action.type === 'ADD_TOKEN') {
        console.log(action.payload.key.token)
        return {
            ...currentState,
            token: currentState.user.token = action.payload.key.token
        }
    }
    return currentState
}

export default createStore(reducer)