// import { useNavigate } from 'react-router-dom'
import './CardAppoinments.scss'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import Boton from '../Boton/Boton';


const CardAppo = (props) => {

    return (
        <>
            <Card sx={{ maxWidth: 230}}>
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
                    <div size="small" color="primary">
                        {props.modificar}
                    </div>
                    <div size="small" color="primary">
                        {props.eliminar}
                    </div>
                </CardActions>
            </Card>
        </>
    )
}

export default CardAppo

