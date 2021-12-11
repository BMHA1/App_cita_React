// import { useNavigate } from 'react-router-dom'
import './CardAppoinments.scss'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';


const CardAppo = (props) => {

    return (
        <>
                <Card sx={{ maxWidth: 210 }}>
                    <CardActionArea>
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                <span>Id cita: {props.id}</span>
                            </Typography>
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
                        <div className="delete">{props.eliminar}</div>
                        <div className="modify">{props.modificar}</div>
                    </CardActions>
                </Card>
            
        </>
    )
}

export default CardAppo

