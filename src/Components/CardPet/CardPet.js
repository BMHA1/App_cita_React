import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import { useNavigate } from 'react-router-dom'
import Boton from '../Boton/Boton';
import { useDispatch } from 'react-redux';
import ActionPets from '../../service/redux/Action/ActionPets';
import './cardPet.scss'
const CardPet = (props) => {
    let dispatch = useDispatch()
    let navigate = useNavigate()

    const redirection = () => {
        console.log(props)
        const id = props.id
        dispatch(ActionPets.addPets(id))
        navigate('/ProfilePet')
    }

    return (
        <>
            <div className='card'>
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
                                <span>Peso: {props.weight} Kg</span>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <div size="small" color="primary">
                            {props.citas}
                        </div>
                        <div size="small" color="primary">
                            {props.eliminar}
                        </div>
                    </CardActions>
                </Card>
            </div>
        </>
    )
}

export default CardPet

