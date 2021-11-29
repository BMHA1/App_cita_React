
import './Login.scss'
import { APIConsumer } from '../../service/Apiconsumer/ApiUser';
import Boton from "../../Components/Boton/Boton"
import TextField from '@mui/material/TextField'
import action from "../../service/redux/Action/ActionUser";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import jwt_decode from "jwt-decode"

const Login = (props) => {
    let navigate = useNavigate()

    const dispatch = useDispatch()
    const user = useSelector((store) => store.user.token)
    console.log(user)
    // //enviamos datos y logeamos al usuario 
    const handleSendData = async (e) => {
        e.preventDefault()
        const user = {
            email: e.target.email.value,
            password: e.target.password.value
        }
        console.table(user)

        try {
            let res = await APIConsumer.loginUser(user);
            console.log(res.token)
            if (!res.token) return dispatch(action.addToken(false))
            else {
                dispatch(action.addToken(res.token))
                decode(res.token)
            }


        } catch (error) {
            alert(error, " es de login");
        }
    }

    const decode = (token) => {
        let jtw = jwt_decode(token);
        if (jtw && jtw.role === "user") navigate('/profileuser')
        if (jtw && jtw.role === "admin") navigate('/profileadmin')
        else if (jtw && jtw.role === "doctor") navigate('/profiledoctor')
    }

    return (
        <div className="Padre">
            <div className="Profile">
                <form onSubmit={(e) => handleSendData(e)}>
                    {/* <legend>¿Preparado para vivir una experiencia?</legend> */}
                    <div className='imput'>
                        <div className="email">
                            <TextField type='email'
                                size="small"
                                name='email'
                                placeholder="Introduce tú email"
                                margin="normal"
                                required />
                        </div>
                        <div className="password">
                            <TextField type='password'
                                size="small"
                                name='password'
                                placeholder="Introduce tu contraseña"
                                margin="normal"
                                required />
                        </div>
                    </div>
                    <div className="content-button">
                        <Boton type="onSubmit" ><span> Entrar </span></Boton>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login