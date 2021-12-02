// import { useSelector, useDispatch } from 'react-redux'
import CardUser from '../../Components/CardUser/CardUser'
import { APIConsumer } from '../../service/Apiconsumer/ApiUser'
import ActionUser from '../../service/redux/Action/ActionUser'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import Boton from '../../Components/Boton/Boton'

const ListUser = () => {

    const users = useSelector((state) => state.user)
    const dispatch = useDispatch()
    console.log(users)

    useEffect(() => {
        getUsers()
    }, [])

    const getUsers = async () => {
        console.log("entrando")
        try {
            let res = await APIConsumer.getAllUsers();
            console.log(res)  // deberiamos recibir un array de objectos de cachorritos
            dispatch(ActionUser.addAllUsers(res.Data))

        } catch (error) {
            console.log(error + "listusers")
        }

    }
    const deleteUsers = async (e) => {
        console.log(e)
        await APIConsumer.deleteUsers(e)
        getUsers()
    }

    return (
        <>
            <h1>Lista Usuarios</h1 >
            <div className="contenedor-principal">
                <div className="listpet">
                    {users.map((e, i) => {
                        return <CardUser
                            id={i}
                            avatar={e.avatar}
                            name={e.name}
                            gender={e.gender}
                            age={e.age}
                            boton={<Boton onClick={(data) => deleteUsers(e.id)}>ELIMINAR</Boton>} />
                    })}
                </div>
            </div>

        </>
    )
}

export default ListUser