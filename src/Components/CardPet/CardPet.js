import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import { useNavigate } from 'react-router-dom'
import Boton from '../Boton/Boton';
import { useDispatch } from 'react-redux';
import ActionPets from '../../service/redux/Action/ActionPets';

const CardPet = (props) => {
    let dispatch = useDispatch()
    let navigate = useNavigate()
    const redirection = () => {
        dispatch(ActionPets.addPets(props))
        navigate('/ProfilePet')
    }

    return (
        <>
            <div>

                <Card sx={{ maxWidth: 210 }}>
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
                                <span>Sexo:{props.gender}</span>
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                <span>Edad:{props.age}</span>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <div className="delete">{props.boton}</div>

                        <Boton size="small" color="primary">
                            Ver cita
                        </Boton>
                    </CardActions>
                </Card>
            </div>
        </>
    )
}

export default CardPet

