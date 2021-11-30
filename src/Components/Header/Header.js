import './Header.scss'
import store from '../../service/redux/store'
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import Boton from '../Boton/Boton'
import { useSelector } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';


const Header = () => {

    const user = useSelector((store) => store.user)
        
    console.log(user)
    // const admin = useSelector((store) => store.admin)
    // const doctor = useSelector((store) => store.doctor)
    return (
        <>
            <div className='header'>

                <div className='logo'></div >
                <ul>
                    {!user.token && <Boton variant="outlined" size="small" margin="normal">
                        <NavLink className="link" to="/">Inicio</NavLink>
                    </Boton>}
                    {!user.token && <Boton variant="outlined" size="small" margin="normal">
                        <NavLink className="link" to="/login">Entrar</NavLink>
                    </Boton>}
                    {!user.token && <Boton variant="outlined" size="small" margin="normal">
                        <NavLink className="link" to="/register">Registrarse</NavLink>
                    </Boton>}
                    {user.token && < Boton variant="outlined" size="small" margin="normal">
                        <NavLink className="link" to="/addapointments">Pedir Cita</NavLink>
                    </Boton>}
                    {user.token && < Boton variant="outlined" size="small" margin="normal">
                        <NavLink className="link" to="/register">Cerrar Sesión</NavLink>
                    </Boton>}
                    {user.token && <Stack direction="row" >
                        <Avatar alt="B" src={user.user.avatar} />
                    </Stack>}
                </ul>
            </div >
        </>
    )
}

export default Header