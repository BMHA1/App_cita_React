import Typography from '@mui/material/Typography';
import CardAppoinments from "../../Components/CardAppoinments/CardAppoinments"
import { useDispatch, useSelector } from 'react-redux';
import { APIConsumer } from "../../service/Apiconsumer/ApiAppoinments"
import ActionAppointments from '../../service/redux/Action/ActionAppointments'
import Boton from "../../Components/Boton/Boton"
import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';

const ProfilePet = () => {
    let navigate = useNavigate()

    const appoinment = useSelector((store) => store.appointments)
    const pet = useSelector((store) => store.pets)
    const dispatch = useDispatch()
    console.log(pet)

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    
    
        useEffect(() => {
            console.log('nununu')
            getAppointments(pet.id)
        }, [])

    

    const getAppointments = async (id) => {
        setLoading(true)
        try {
            let resul = await APIConsumer.getAllAppointments(id)
            dispatch(ActionAppointments.addAppointment(resul))
            setLoading(false)
        } catch (error) {
            setError(true)
            setLoading(false)
        }
    }
    // if (pet.id) {
    //     console.log('holla')
    //     getPet(pet.id)
    // }



    const deleteAppointments = (id) => {
        setLoading(true)
        setTimeout(async () => {
            try {
                console.log('estoy eliminando')
                await APIConsumer.deleteAppoinment(id)
                getAppointments(pet.id)
                setLoading(false)
            } catch (error) {
                setError(true)
                setLoading(false)
            }
        }, 1);
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
        }, 1);
    }
    return (
        <>
            {error && <h1>¡I'm sorry, something has happened!</h1>}
            {loading && <h1>Loading...</h1>}
            <div className='ContainerPrincipal-Appointments'>
                < Typography variant="h3" component="div" gutterBottom >
                    LISTA DE CITAS
                </Typography >
                {/* <ListAppoinment2 /> */}
                <div className='Container-Appointments'>
                    {appoinment.Data.map((e, i) => {
                        return <CardAppoinments
                            key={i}
                            name={pet.name}
                            date={e.date}
                            state={e.state}
                            doctor={e.doctorId}
                            boton={<Boton onClick={((data) => deleteAppointments(e.id))}>ELIMINAR</Boton>}
                            modificar={<Boton onClick={((data) => modifyAppointments(e.id))} >MODIFICAR</Boton>} />
                    })}
                </div>
            </div>
        </>
    )
}
export default ProfilePet