import CardUser from '../CardUser/CardUser'
import { APIConsumer } from '../../service/Apiconsumer/ApiUser'
import ActionUser from '../../service/redux/Action/ActionUser'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import Boton from '../Boton/Boton'
import Loading from '../Loading/Loading'
import Error from '../Error/Error'
import { Typography } from '@mui/material'
import './ListUser.scss'

const ListUsers = () => {

    const user = useSelector((state) => state.user)
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        console.log("entrando")
        getUsers()
        console.log(user.users)
    }, [])

    const getUsers = async () => {
        try {
            console.log("entrando")
            let res = await APIConsumer.getAllUsers();
            console.log(res)
            dispatch(ActionUser.addAllUsers(res.Data))

        } catch (error) {
            setError(true)
            setLoading(false)
        }

    }
    const deleteUsers = async (e) => {
        console.log(e)
        let result=await APIConsumer.deleteUsers(e)
        console.log(result)
        getUsers()
    }


    if (Object.keys(user.users).length !== 0) {
        return (
            <>
                {error && <Error />}
                {loading ?
                    <Loading />
                    :
                    <div className="ContainerUsers">
                        <div className="listUsers">
                            {user?.users?.map((e, i) => {
                                return <CardUser
                                    id={i}
                                    avatar={e.avatar}
                                    name={e.name}
                                    role={e.role}
                                    email={e.email}
                                    phone={e.phone}
                                    eliminar={<Boton onClick={() => deleteUsers(e.id)}>ELIMINAR</Boton>}
                                />
                            })}
                        </div>
                    </div>}
            </>
        )
    } else {
        return (
            < Typography variant="h3" component="div" gutterBottom >
                De momento no hay usuarios, registre algun usuario...
            </Typography >
        )
    }
}
export default ListUsers