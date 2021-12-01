import { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import { useNavigate } from 'react-router-dom'
import Boton from '../Boton/Boton';


const CardPet = (props) => {

    let navigate = useNavigate()
    const redirection = () => {
        console.log("holamundo")
        navigate('/ProfilePet')
    }

    return (
        <>
            <div>

                <Card sx={{ maxWidth: 200 }}>
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
                        <Boton size="small" color="primary">
                            Eliminar
                        </Boton>
                        <Boton size="small" color="primary">
                            Pedir Cita
                        </Boton>
                    </CardActions>
                </Card>
            </div>
        </>
    )
}

export default CardPet

