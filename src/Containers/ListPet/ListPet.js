import CardPet from "../../Components/CardPet/CardPet";
import { useSelector, useDispatch } from 'react-redux';
import { APIConsumer } from '../../service/Apiconsumer/ApiPets';
import ActionPets from '../../service/redux/Action/ActionPets';
import React, { useEffect } from 'react';
import Boton from '../../Components/Boton/Boton';
import './ListPet.scss'

const ListPet = () => {
    const pets = useSelector((store) => store.pets)
    const user = useSelector((store) => store.user)
    const dispatch = useDispatch()

    useEffect(() => {
        getpets(user)
    }, [user])
    

    const getpets = async (e) => {
        // console.log("entrando")
        try {
            let res = await APIConsumer.getAllPets(e);
            // console.log(res.Data)  // deberiamos recibir un array de objectos de cachorritos
            dispatch(ActionPets.addPets(res.Data))

        } catch (error) {
            alert(error, " es de pets");
        }

    }
    const deletePet = async (e) => {
        // console.log(e)
        let resul = await APIConsumer.deletePets(e)
        if (resul.status == "400") {
            console.log(resul.message)

        }
        getpets(user)
    }

    return (
        <>
            
                <div className="listpet">
                    {pets.map((e, i) => {
                        return <CardPet
                            id={e.id}
                            avatar={e.avatar}
                            name={e.name}
                            gender={e.gender}
                            weight={e.age}
                            boton={<Boton onClick={(data) => deletePet(e.id)}>ELIMINAR</Boton>} />
                    })}
                </div>
            
        </>
    )
}
export default ListPet