import './Header.scss'
import { NavLink } from 'react-router-dom'
import Boton from '../Boton/Boton'
import { useDispatch, useSelector } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import ActionUser from '../../service/redux/Action/ActionUser';


const Header = () => {

    const user = useSelector((store) => store.user)
    const dispatch = useDispatch()
    const SignOff = () => {
        dispatch(ActionUser.addToken(false))
    }
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
                    {user.token && < Boton onClick={() => SignOff()} variant="outlined" size="small" margin="normal">
                        <NavLink className="link" to="/">Cerrar Sesión</NavLink>
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