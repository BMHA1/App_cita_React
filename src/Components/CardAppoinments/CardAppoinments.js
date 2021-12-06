// import { useNavigate } from 'react-router-dom'
import './CardAppoinments.scss'


const CardAppoinments = (props) => {

 
   
    return (
        <>

            <div className='container-cardAppointments' >
                <div className='cardAppointments'>
                    <form>
                        <span> Nombre de mascota: {props.name} </span><br />
                        <span> Día de la cita: {props.date}</span><br />
                        <span> Estado: {props.state}</span><br />
                        <span> Doctor: {props.doctor}</span><br />
                        <div className="botones-m">{props.modificar}</div><br />
                        <div className="botones-d">{props.boton}</div><br />
                    </form>
                </div>
            </div >

        </>
    )
}

export default CardAppoinments

