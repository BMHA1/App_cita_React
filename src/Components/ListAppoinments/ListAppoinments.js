import Typography from '@mui/material/Typography';
import CardAppo from "../CardAppo/CardAppo"
import { useDispatch, useSelector } from 'react-redux';
import { APIConsumer } from "../../service/Apiconsumer/ApiAppoinments"
import ActionAppointments from '../../service/redux/Action/ActionAppointments'
import Boton from "../Boton/Boton"
import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import './ListAppoinments.scss'
import Loading from '../Loading/Loading';
import Error from '../Error/Error';

const ListAppoinments = () => {


    let navigate = useNavigate()

    const appoinment = useSelector((store) => store.appointments)
    const pet = useSelector((store) => store.pets)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const dispatch = useDispatch()

    const getAppointments = (id) => {

        setLoading(true)
        setTimeout(async () => {
            try {
                console.log(id + 'esto es una victoria')
                let resul = await APIConsumer.getAllAppointments(id)
                console.log(resul)
                dispatch(ActionAppointments.addAppointment(resul))
                setLoading(false)
            } catch (error) {
                setError(true)
                setLoading(false)
            }
        }, 3000);
    }

    useEffect(() => {
        console.log(pet)
        getAppointments(pet)
    }, [])

    const deleteAppointments = (id) => {
        setLoading(true)
        setTimeout(async () => {
            try {
                console.log(id + 'estoy eliminando')
                await APIConsumer.deleteAppoinment(id)
                getAppointments(pet)
                setLoading(false)
            } catch (error) {
                setError(true)
                setLoading(false)
            }
        }, 2000);
    }

    const modifyAppointments = (id) => {
        setTimeout(async () => {
            try {
                console.log("moficando cita" + id)
                navigate('/')
            } catch (error) {
                setError(true)
                setLoading(false)
            }
        }, 2000);
    }

    return (
        <>
            < Typography variant="h3" component="div" gutterBottom >
                LISTA DE CITAS
            </Typography >
            {error && <Error />}
            {loading ?
                <div className='Loading'>
                    <Loading />
                </div>
                :
                <div className='ContainerAppointments'>
                    {appoinment?.Data?.map((e, i) => {
                        return <CardAppo
                            key={i}
                            id={e.id}
                            name={e.name}
                            date={e.date}
                            state={e.state}
                            doctor={e.doctorId}
                            eliminar={<Boton onClick={(() => deleteAppointments(e.id))}>ELIMINAR</Boton>}
                            modificar={<Boton onClick={(() => modifyAppointments(e.id))} >MODIFICAR</Boton>}
                        />
                    })}
                </div>}
        </>
    )
}
export default ListAppoinments