
import './Login.scss'
// import { APIConsumer } from '../../service/Apiconsumer/ApiUser';
import Button from "../../Components/Button/Button"
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
                        <div className="float-right">
                            <label>
                                <input
                                    type='email'
                                    name='email'
                                    placeholder="Escribe aqui tu email"
                                    required />
                            </label>
                        </div>
                        <div>
                            <label>
                                <input
                                    type='password'
                                    name='password'
                                    placeholder="Password"
                                    required />
                            </label>
                        </div>
                    </div>
                    <div className="content-button">
                        <Button type="onSubmit" ><span> Entrar </span></Button>
                        {/* <Button onClick={() => redirection()} ><span> Registrarte </span></Button> */}
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Login