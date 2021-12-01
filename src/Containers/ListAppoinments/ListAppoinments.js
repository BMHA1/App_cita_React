import { useState } from "react"
import CardAppoinments from "../../Components/CardAppoinments/CardAppoinments"
import { APIConsumer } from "../../service/Apiconsumer/ApiAppoinments"
import Boton from "../../Components/Boton/Boton"
import { useSelector } from "react-redux"

const ListAppoinment = () => {
    const [loading, setLoading] = useState (false)
    const appoinment= useSelector((store)=>store.appoinment)


    const deleteAppointments = async (id) => {
        console.log(id)
        await APIConsumer.deleteAppoinment(id)
        console.log("despues del await")
        setLoading(true)
        // getAllAppoinment()


        // console.log(deleteRentals)
        // setRentals(deleteRentals)
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