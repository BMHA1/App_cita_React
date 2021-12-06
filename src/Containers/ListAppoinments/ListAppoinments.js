import { useEffect } from "react"
import CardAppoinments from "../../Components/CardAppoinments/CardAppoinments"
import { APIConsumer } from "../../service/Apiconsumer/ApiAppoinments"
import Boton from "../../Components/Boton/Boton"
import ActionAppointments from "../../service/redux/Action/ActionAppointments"
import { useDispatch, useSelector } from 'react-redux';
import { useState } from "react"
import { useNavigate } from "react-router"

const ListAppoinment = () => {

    let navigate = useNavigate()
    const appoinment = useSelector((store) => store.appointments)
    const pet = useSelector((store) => store.pets)
    const user = useSelector((store) => store.users)
    const dispatch = useDispatch()

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)



    useEffect(() => {
        console.log('nununu')
        // getAllAppointments(pet.id)
    }, [])

    const getAllAppointments = async (id) => {
        console.log("dentros metedo de buscqueda")
        setLoading(true)
        try {
            let resul = await APIConsumer.getAllAppointments(id)
            dispatch(ActionAppointments.addAppointment(resul))
            getAllAppointments(pet.id)
            setLoading(false)
        } catch (error) {
            setError(true)
            setLoading(false)
        }
    }


    // if (pet.id) {
    //     console.log('holla')
    //     getAllAppointments(pet.id)
    // }

    const deleteAppointments = (id) => {
        setLoading(true)
        setTimeout(async () => {
            try {
                console.log('estoy eliminando')
                await APIConsumer.deleteAppoinment(id)
                getAllAppointments(pet.id)
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
            <h1>Mis Citas  </h1>
            {appoinment.Data.map((e, i) => {
                return <CardAppoinments
                    // key={i}
                    name={pet.name}
                    date={e.date}
                    state={e.state}
                    doctor={e.doctorId}
                    boton={<Boton onClick={((data) => deleteAppointments(e.id))}>ELIMINAR</Boton>}
                    modificar={<Boton onClick={((data) => modifyAppointments(e.id))} >MODIFICAR</Boton>} />
            })}

        </>
    )
}
export default ListAppoinment


















    //     // const [loading, setLoading] = useState(false)
    //     const appoinment = useSelector((store) => store.appointments.Data)
    //     const user = useSelector((store) => store.user.user)
    //     const dispatch = useDispatch()

    //     console.log(appoinment)
    //     console.log(user)


    //     useEffect(() => {
    //         const getAppointments = async (id) => {
    //             console.log(id)
    //             let resul = await APIConsumer.getAllAppointments(id)
    //             dispatch(ActionAppointments.addAppointment(resul))
    //         }
    //         getAppointments(user.Data)
    //     }, [])



    //     const deleteAppointments = async (id) => {
    //         console.log(id)
    //         await APIConsumer.deleteAppoinment(id)
    //         // setLoading(true)
    //     }





    //     return (
    //         <>
    //             <div className="contenedor-principal">
    //                 <div >
    //                     {appoinment.map((e, i) => {
    //                         return <CardAppoinments
    //                             id={i}
    //                             name={e.petId}
    //                             date={e.date}
    //                             state={e.state}
    //                             doctor={e.doctorId}
    //                             boton={<Boton onClick={((e) => deleteAppointments(e.id))}>ELIMINAR</Boton>}
    //                         />
    //                     })}
    //                 </div>
    //             </div>
    //         </>
    //     )


    // }