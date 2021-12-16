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

            <Card sx={{ maxWidth: 250 }}>
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
                            <span>Role:{props.role}</span>
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <span>Email:{props.email}</span>
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <span>Movil:{props.phone}</span>
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <div size="small" color="primary">
                        {props.eliminar}
                    </div>
                </CardActions>
            </Card>
        </div>
    )
}
export default CardUser