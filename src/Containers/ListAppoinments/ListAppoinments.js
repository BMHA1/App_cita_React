import { useEffect } from "react"
import CardAppoinments from "../../Components/CardAppoinments/CardAppoinments"
import { APIConsumer } from "../../service/Apiconsumer/ApiAppoinments"
import Boton from "../../Components/Boton/Boton"
import ActionAppointments from "../../service/redux/Action/ActionAppointments"
import { useDispatch, useSelector } from 'react-redux';

const ListAppoinment = () => {

    // const [loading, setLoading] = useState(false)
    const appoinment = useSelector((store) => store.appointments.Data)
    const user = useSelector((store) => store.user.user)
    const dispatch = useDispatch()

    console.log(appoinment)
    console.log(user)


    useEffect(() => {
        const getAppointments = async (id) => {
            console.log(id)
            let resul = await APIConsumer.getAllAppointments(id)
            dispatch(ActionAppointments.addAppointment(resul))
        }
        getAppointments(user.Data)
    }, [])


    const deleteAppointments = async (id) => {
        console.log(id)
        await APIConsumer.deleteAppoinment(id)
        // setLoading(true)
    }





    return (
        <>
            <div className="contenedor-principal">
                <div >
                    {appoinment.map((e, i) => {
                        return <CardAppoinments
                            id={i}
                            name={e.petId}
                            date={e.date}
                            state={e.state}
                            doctor={e.doctorId}
                            boton={<Boton onClick={((e) => deleteAppointments(e.id))}>ELIMINAR</Boton>}
                        />
                    })}
                </div>
            </div>
        </>
    )


}
export default ListAppoinment