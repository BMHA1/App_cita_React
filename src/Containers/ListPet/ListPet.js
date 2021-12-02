import CardPet from "../../Components/CardPet/CardPet";
import { useSelector, useDispatch } from 'react-redux';
import { APIConsumer } from '../../service/Apiconsumer/ApiPets';
import ActionPets from '../../service/redux/Action/ActionPets';
import React, { useEffect } from 'react';
import Boton from '../../Components/Boton/Boton';

const ListPet = () => {
    const pets = useSelector((store) => store.pets)
    const user = useSelector((store) => store.user)


    const dispatch = useDispatch()



    useEffect(() => {
        getpets(user)
    }, [])

    const getpets = async (e) => {
        console.log("entrando")
        try {
            let res = await APIConsumer.getAllPets(e);
            console.log(res.Data)  // deberiamos recibir un array de objectos de cachorritos
            dispatch(ActionPets.addPets(res.Data))

        } catch (error) {
            alert(error, " es de pets");
        }

    }
    const deleteAppointments = async (e) => {
        console.log(e)
        await APIConsumer.deletePets(e)
        getpets(user)
    }

    return (
        <>
            <div className="contenedor-principal">
                <div className="listpet">
                    {pets.map((e, i) => {
                        return <CardPet
                            id={i}
                            avatar={e.avatar}
                            name={e.name}
                            gender={e.gender}
                            age={e.age}
                            boton={<Boton onClick={(data) => deleteAppointments(e.id)}>ELIMINAR</Boton>} />
                    })}
                </div>
            </div>

        </>
    )


}
export default ListPet