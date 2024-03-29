import './Header.scss'
import { NavLink } from 'react-router-dom'
import Boton from '../Boton/Boton'
import { useDispatch, useSelector } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import ActionUser from '../../service/redux/Action/ActionUser';
import ActionAdmin from '../../service/redux/Action/ActionAdmin';
import { useState } from 'react';
import { useEffect } from 'react';

const Header = () => {

    const admin = useSelector((store) => store.admin)
    const user = useSelector((store) => store.user)
    const [Home, setHome] = useState(true)
    const dispatch = useDispatch()

    const SignOff = () => {
        // console.log("sigOFFF")
        dispatch(ActionUser.addToken(false))
        dispatch(ActionAdmin.addTokenAdmin(false))
        setHome(true)
        console.log(Home)
    }

    useEffect(() => {
        if (user.token) {
            return setHome(false)
        } else if (admin.token) {
            console.log(admin.token)
            return setHome(false)
        }
    })
    return (
        <>
            <div className='header'>
                <div className='logo'></div >
                <ul>

                    {Home && <Boton variant="outlined" size="small" margin="normal">
                        <NavLink className="link" to="/">Inicio</NavLink>
                    </Boton>}
                    {Home && <Boton variant="outlined" size="small" margin="normal">
                        <NavLink className="link" to="/login">Entrar</NavLink>
                    </Boton>}
                    {Home && <Boton variant="outlined" size="small" margin="normal">
                        <NavLink className="link" to="/register">Registrarse</NavLink>
                    </Boton>}
                    {/* USUARIO=CLIENTE */}
                    {user.token && < Boton variant="outlined" size="small" margin="normal">
                        <NavLink className="link" to="/addapointments">Pedir Cita</NavLink>
                    </Boton>}
                    {user.token && < Boton variant="outlined" size="small" margin="normal">
                        <NavLink className="link" to="/addpet">Añadir Mascota</NavLink>
                    </Boton>}
                    {/* {user.token && < Boton variant="outlined" size="small" margin="normal">
                        <NavLink className="link" to="/listpointments">Mis Citas</NavLink>
                    </Boton>} */}
                    {user.token && < Boton onClick={() => SignOff()} variant="outlined" size="small" margin="normal">
                        <NavLink className="link" to="/">Cerrar Sesión</NavLink>
                    </Boton>}
                    {user.token && <Stack direction="row" >
                        <Avatar alt="B" src={user.user.avatar} />
                    </Stack>}

                    {/* HEADEAR ADMIN */}

                    {admin.token && < Boton variant="outlined" size="small" margin="normal">
                        <NavLink className="link" to="/listpointments">Doctores</NavLink>
                    </Boton>}
                    {admin.token && < Boton variant="outlined" size="small" margin="normal">
                        <NavLink className="link" to="/listpointments">Usuarios</NavLink>
                    </Boton>}
                    {admin.token && < Boton variant="outlined" size="small" margin="normal">
                        <NavLink className="link" to="/listpointments">CITAS</NavLink>
                    </Boton>}
                    {admin.token && < Boton onClick={() => SignOff()} variant="outlined" size="small" margin="normal">
                        <NavLink className="link" to="/">Cerrar Sesión</NavLink>
                    </Boton>}
                    {admin.token && <Stack direction="row" >
                        <Avatar alt="B" src={admin.admin.avatar} />
                    </Stack>}
                </ul>
            </div >
        </>
    )
}

export default Header