import { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import { useNavigate } from 'react-router-dom'
import Boton from '../Boton/Boton';


const CardAppoinments = (props) => {

    let navigate = useNavigate()
    const deleteAppointments = () => {
        console.log("holamundo")
        navigate('/ProfilePet')
    }
    const modifyAppointments = () => {

    }


    return (
        <>
            <Boton onClick={((e) => modifyAppointments(e))} >
                <div>
                    <form>
                        <span> Nombre mascota: {props.name} </span><br />
                        <span> Día de la cita: {props.date}</span><br />
                        <span> Estado: {props.state}$</span><br />
                        <span> doctor: {props.doctor}</span><br />
                        <div className="delete">{props.boton}</div><br />
                    </form>
                </div>
            </Boton>
        </>
    )
}

export default CardAppoinments

