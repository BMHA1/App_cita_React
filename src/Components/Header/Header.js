import './Header.scss'
import store from '../../service/redux/store'
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import Boton from '../Boton/Boton'





const Header = () => {

    const [clave, setClave] = useState(false)
    const [Dasboard, setDasboard] = useState(false)
    const [DasboardUser, setDasboardUser] = useState(false)
    const [DasboardAdmin, setDasboardAdmin] = useState(false)
    const [DasboardDoctor, setDasboardDoctor] = useState(false)

    useEffect(() => {
        console.log("header")
        let variable = (store.getState().user.token)
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
                    <Boton variant="outlined" size="small" margin="normal">
                        <NavLink to="/login">Entrar</NavLink>
                    </Boton>
                    <Boton variant="outlined" size="small" margin="normal">
                        <NavLink to="/register">Registrarse</NavLink>
                    </Boton>
                    {DasboardUser && < Boton variant="outlined" size="small" margin="normal">
                        <NavLink to="/register">Pedir Cita</NavLink>
                    </Boton>}
                    {Dasboard && <Boton variant="outlined" size="small" margin="normal">
                        <NavLink to="/register">Cerrar Sesión</NavLink>
                    </Boton>}
                </ul>
            </div>
        </>
    )
}

export default Header