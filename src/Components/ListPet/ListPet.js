import CardPet from "../CardPet/CardPet";
import { useSelector, useDispatch } from 'react-redux';
import { APIConsumer } from '../../service/Apiconsumer/ApiPets';
import ActionPets from '../../service/redux/Action/ActionPets';
import React, { useEffect, useState } from 'react';
import Boton from '../Boton/Boton';
import './ListPet.scss'
import Loading from '../Loading/Loading';
import Error from '../Error/Error';

const ListPet = () => {
    const pet = useSelector((store) => store.pets)
    const user = useSelector((store) => store.user)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [message, setMessage] = useState(false)
    const dispatch = useDispatch()

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
            if (resul) {
            }
            setLoading(false)
        } catch (error) {
            setError(true)
            setLoading(false)
        }

        getpets(user)
    }

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
                            boton={<Boton onClick={() => deletePet(e.id)}>ELIMINAR</Boton>} />
                    })}
                </div>
            }
        </>
    )
}
export default ListPet