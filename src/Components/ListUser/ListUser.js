import CardUser from '../CardUser/CardUser'
import { APIConsumer } from '../../service/Apiconsumer/ApiUser'
import ActionUser from '../../service/redux/Action/ActionUser'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import Boton from '../Boton/Boton'
import Loading from '../Loading/Loading'
import Error from '../Error/Error'


const ListUsers = () => {

    const users = useSelector((state) => state.user)
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        getUsers()
    }, [])

    const getUsers = async () => {
        console.log("entrando")
        try {
            let res = await APIConsumer.getAllUsers();
            console.log(res)
            dispatch(ActionUser.addAllUsers(res.Data))
        } catch (error) {
            setError(true)
            setLoading(false)
        }

    }
    const deleteUsers = async (e) => {
        await APIConsumer.deleteUsers(e)
        getUsers()
    }

    return (
        <>
            {error && <Error />}
            < Typography variant="h3" component="div" gutterBottom >
                Lista Usuarios
            </Typography >
            {loading ?
                <Loading />
                :
                <div className="ContainerUsers">
                    <div className="listpet">
                        {users?.map((e, i) => {
                            return <CardUser
                                id={i}
                                avatar={e.avatar}
                                name={e.name}
                                gender={e.gender}
                                age={e.age}
                                boton={<Boton onClick={() => deleteUsers(e.id)}>ELIMINAR</Boton>}
                            />
                        })}
                    </div>
                </div>}
        </>
    )
}

export default ListUsers