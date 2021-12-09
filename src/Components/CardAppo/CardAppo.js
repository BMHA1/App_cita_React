// import { useNavigate } from 'react-router-dom'
import './CardAppoinments.scss'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';


const CardAppo = (props) => {

    return (
        <>
            <div className='container-cardAppointments' >
                <div className='cardAppointments'>
                    <Card sx={{ maxWidth: 210 }}>
                        <CardActionArea>
                            <CardContent>
                                {/* <Typography gutterBottom variant="h5" component="div">
                                {props.name}
                            </Typography> */}
                                <Typography variant="body2" color="text.secondary">
                                    <span>Día de la cita: {props.date}</span>
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    <span>Estado: {props.state} </span>
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    <span>Doctor: {props.doctor} </span>
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <div className="delete">{props.boton}</div>
                        </CardActions>
                    </Card>
                    {/* <form> */}
                    {/* <span> Nombre de mascota: {props.name} </span><br /> */}
                    {/* <span> Día de la cita: {props.date}</span><br />
                        <span> Estado: {props.state}</span><br />
                        <span> Doctor: {props.doctor}</span><br /> */}
                    {/* <div className="botones-m">{props.modificar}</div><br />
                        <div className="botones-d">{props.boton}</div><br /> */}
                    {/* </form> */}
                </div>
            </div >
        </>
    )
}

export default CardAppo

