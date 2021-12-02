// import ListAppoinment2 from "../../Containers/ListAppoinments2/ListAppoinments2"
import Typography from '@mui/material/Typography';
import CardAppoinments from "../../Components/CardAppoinments/CardAppoinments"
import { useDispatch, useSelector } from 'react-redux';
import { APIConsumer } from "../../service/Apiconsumer/ApiAppoinments"
import React, { useEffect } from 'react';
import ActionAppointments from '../../service/redux/Action/ActionAppointments'
import Boton from "../../Components/Boton/Boton"


const ProfilePet = () => {
    const appoinment = useSelector((store) => store.appointments)
    const pet = useSelector((store) => store.pets)
    const dispatch = useDispatch()
    console.log(appoinment)
    console.log(pet.id)
   
    const misCojones = async (id) => {
        console.log('poooooorque')
        try {
            let resul = await APIConsumer.getAllAppointments(id)
            dispatch(ActionAppointments.addAppointment(resul))
        } catch (error) {
            alert(error, " nada");
        }
    }
    if (pet.id) {
        console.log('hooola')
        misCojones(pet.id)
    }


    const deleteAppointments = async (id) => {
        try {
            console.log(id)
            await APIConsumer.deleteAppoinment(id)
            // setLoading(true)
        } catch (error) {
            alert(error, " es de pets");
        }
    }



    return (
        <>
            < Typography variant="h3" component="div" gutterBottom >
                LISTA DE CITAS
            </Typography >
            {/* <ListAppoinment2 /> */}
            {appoinment.Data.map((e, i) => {
                return <CardAppoinments
                    key={i}
                    name={pet.name}
                    date={e.date}
                    state={e.state}
                    doctor={e.doctorId}
                    boton={<Boton onClick={((data) => deleteAppointments(e.id))}>ELIMINAR</Boton>} />
            })}
        </>
    )
}
export default ProfilePet