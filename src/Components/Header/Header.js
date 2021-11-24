import './Header.scss'
import store from '../../service/redux/store'
import { useState, useEffect } from 'react'




const Header = () => {

    const [clave, setClave] = useState(false)

    useEffect(() => {
        console.log("heade")
        let variable=(store.getState().user.token)
        console.log(variable)

        store.subscribe(() => {
            setClave(store.getState().user.token)
            console.log(clave)
        })
    });

    return (
        <>
            <div className='header'>
                <ul>
                    <il>Lista de productos</il> <br/>
                    {clave&&<il>Logout</il>}<br/>
                    <il>Carrito de compra</il><br/>
                </ul>
            </div>
        </>
    )
}

export default Header