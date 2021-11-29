
import './Login.scss'
import { APIConsumer } from '../../service/Apiconsumer/ApiUser';
import Boton from "../../Components/Boton/Boton"
import TextField from '@mui/material/TextField'
import action from "../../service/redux/Action/ActionUser";
import { useDispatch } from 'react-redux';


const Login = (props) => {

    // const [clave, setClave] = useState(false)
    const dispatch = useDispatch()


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
            if (!res) return dispatch(action.addToken(false))
            else dispatch(action.addToken(res))
        } catch (error) {
            alert(error, " hola mundo");
        }

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