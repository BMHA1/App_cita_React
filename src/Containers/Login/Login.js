
import './Login.scss'
// import { APIConsumer } from '../../service/Apiconsumer/ApiUser';
import Boton from "../../Components/Boton/Boton"
import TextField from '@mui/material/TextField'
// import action from "../../service/redux/actionTools/action";
// import store from "../../service/redux/store"

const Login = (props) => {

    // const [clave, setClave] = useState(false)


    // //enviamos datos y logeamos al usuario 
    const handleSendData = async (e) => {
        // e.preventDefault()
        // let email = e.target.email.value
        // let password = e.target.password.value

        // try {
        //     let res = await APIConsumer.loginUser(email, password);
        //     if (!res) return store.dispatch(action.addToken(false))
        //     else store.dispatch(action.addToken(res))
        // } catch (error) {
        //     alert(error, " hola mundo");
        // }

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