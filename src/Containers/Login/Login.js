
import './Login.scss'
import { APIConsumer } from '../../service/Apiconsumer/ApiUser';
import Boton from "../../Components/Boton/Boton"
import TextField from '@mui/material/TextField'
import ActionUser from "../../service/redux/Action/ActionUser";
import ActionAdmin from '../../service/redux/Action/ActionAdmin';
// import ActionDoctor from '../../service/redux/Action/ActionDoctor';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import jwt_decode from "jwt-decode"

const Login = (props) => {

    let navigate = useNavigate()
    const dispatch = useDispatch()




    const handleSendData = async (e) => {
        e.preventDefault()
        const user = {
            email: e.target.email.value,
            password: e.target.password.value
        }

        try {
            let res = await APIConsumer.loginUser(user);
            if (!res.token) return false
            else {
                decode(res.token)
            }
        } catch (error) {
            alert(error, " es de login");
        }
    }

    const decode = (token) => {
        let jtw = jwt_decode(token);

        switch (jtw.role) {
            case "user":
                dispatch(ActionUser.addToken(token))
                dispatch(ActionUser.addUser(jtw))
                navigate('/profileuser')
                break;
            case "admin":
                dispatch(ActionAdmin.addTokenAdmin(token)) //ajustar admin
                dispatch(ActionAdmin.addAdmin(jtw))//ajustar admin
                navigate('/profileadmin')
                break;
            default:
                window.alert("El token no está llegando")
                break;
        }
    }


    return (
        <div className="Padre">
            <div className="Profile">
                <form onSubmit={(e) => handleSendData(e)}>
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