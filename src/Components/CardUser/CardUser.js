import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import { useNavigate } from 'react-router-dom'
import Boton from '../Boton/Boton';





const CardUser = (props) => {

    let navigate = useNavigate()
    const redirection = () => {
        navigate('/Listpets')
    }

    return (
        <div>

            <Card sx={{ maxWidth: 225}}>
                <CardActionArea onClick={(() => redirection())}>
                    <CardMedia
                        component="img"
                        height="150"
                        image={props.avatar}
                        alt={props.name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {props.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <span>Sexo:{props.usersuname}</span>
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <span>Edad:{props.email}</span>
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <span>Edad:{props.phone}</span>
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <div className="delete">{props.boton}</div>

                    <Boton size="small" color="primary">
                        Pedir Cita
                    </Boton>
                </CardActions>
            </Card>
        </div>
    )
}
export default CardUser