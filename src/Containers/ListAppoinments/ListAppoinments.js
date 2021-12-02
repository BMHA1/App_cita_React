import { useEffect, useState } from "react"
import CardAppoinments from "../../Components/CardAppoinments/CardAppoinments"
import { APIConsumer } from "../../service/Apiconsumer/ApiAppoinments"
import Boton from "../../Components/Boton/Boton"
import ActionAppointments from "../../service/redux/Action/ActionAppointments"
import { useDispatch, useSelector } from 'react-redux';

const ListAppoinment = () => {
    const [loading, setLoading] = useState(false)
    const appoinment = useSelector((store) => store.appointments)
    const user = useSelector((store) => store.user)
     const dispatch = useDispatch()

    const deleteAppointments = async (id) => {
        console.log(id)
        await APIConsumer.deleteAppoinment(id)

        setLoading(true)

    }
    useEffect(() => {
        console.log(user.user.id)
        getAppointments(user.user.id)
    }, [])
    const getAppointments = async (id) => {
        console.log(id)
        let resul = await APIConsumer.getAllAppointments(id)
        dispatch(ActionAppointments.addAppointment(resul))
    }

    return (
        <>
            <div className="contenedor-principal">
                <div className="listpet">
                    {appoinment.map((e, i) => {
                        return <CardAppoinments
                            id={i}
                            name={e.name}
                            date={e.date}
                            state={e.state}
                            doctor={e.doctor}
                            boton={<Boton onClick={((e) => deleteAppointments(e.id))}></Boton>}
                        />
                    })}
                </div>
            </div>
        </>
    )


}
export default ListAppoinment