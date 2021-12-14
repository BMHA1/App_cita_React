import CardPet from "../CardPet/CardPet";
import { useSelector, useDispatch } from 'react-redux';
import { APIConsumer } from '../../service/Apiconsumer/ApiPets';
import ActionPets from '../../service/redux/Action/ActionPets';
import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material'
import Boton from '../Boton/Boton';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';
import './ListPet.scss'
import { useNavigate } from "react-router";


const ListPet = () => {
    const pet = useSelector((store) => store.pets)
    const user = useSelector((store) => store.user)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const dispatch = useDispatch()
    const navigate=useNavigate()
    
    useEffect(() => {
        getpets(user)
    }, [user])


    const getpets = async (e) => {

        try {
            let res = await APIConsumer.getAllPets(e);
            dispatch(ActionPets.addPets(res.Data))
            setLoading(false)
        } catch (error) {
            setError(true)
            setLoading(false)
        }
    }


    const deletePet = async (e) => {
        console.log('hola pets')
        try {
            setLoading(true)
            let resul = await APIConsumer.deletePets(e)
            console.log(resul)
            getpets(user)
            setLoading(false)
        } catch (error) {
            setError(true)
            setLoading(false)
        }
       
    }

    const rediretion =()=>{
        navigate('/ProfilePet')
    }


    if (Object.keys(pet).length !== 0) {
        return (
            <>
                {error && <Error />}
                {loading ? <Loading />
                    :
                    <div className="listpet">
                        {pet?.map((e, i) => {
                            return <CardPet
                                key={i}
                                id={e.id}
                                avatar={e.avatar}
                                name={e.name}
                                gender={e.gender}
                                weight={e.weight}
                                eliminar={<Boton onClick={() => deletePet(e.id)}>ELIMINAR</Boton>}
                                citas={<Boton onClick={() => rediretion()}>PERFIL</Boton>}
                            />
                        })}
                    </div>
                }
            </>
        )
    } else {
        return (< Typography variant="h3" component="div" gutterBottom >
            Cargando Mascotas...
        </Typography >
        )
    }
}
export default ListPet