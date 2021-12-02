// import { useNavigate } from 'react-router-dom'



const CardAppoinments = (props) => {

    // let navigate = useNavigate()
    // const deleteAppointments = () => {
    //     console.log("holamundo")
    //     navigate('/ProfilePet')
    // }
    const modifyAppointments = () => {
        console.log("moficando cita")
    }


    return (
        <>

            <button onClick={((e) => modifyAppointments(e))} >
                <div>
                    <form>
                        <span> Nombre de mascota: {props.name} </span><br />
                        <span> Día de la cita: {props.date}</span><br />
                        <span> Estado: {props.state}</span><br />
                        <span> Doctor: {props.doctor}</span><br />
                        <div className="delete-b">{props.boton}</div><br />
                    </form>
                </div>
            </button >

        </>
    )
}

export default CardAppoinments

