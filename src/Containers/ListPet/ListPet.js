import CardPet from "../../Components/CardPet/CardPet";
import { useSelector, useDispatch } from 'react-redux';
import { APIConsumer } from '../../service/Apiconsumer/ApiPets';
import ActionPets from '../../service/redux/Action/ActionPets';
import React, { useEffect } from 'react';

const ListPet = () => {
    const pets = useSelector((store) => store.pets)
    const user = useSelector((store) => store.user)
    
   
    const dispatch = useDispatch()
    console.table(user)
    console.log(pets)


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
                            age={e.age} />
                    })}
                </div>
            </div>

        </>
    )


}
export default ListPet