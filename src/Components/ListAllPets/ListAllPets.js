import CardPet from "../CardPet/CardPet";
import { useSelector, useDispatch } from 'react-redux';
import { APIConsumer } from '../../service/Apiconsumer/ApiPets';
import ActionPets from '../../service/redux/Action/ActionPets';
import React, { useEffect } from 'react';
import Boton from '../Boton/Boton';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';



const ListAllPets = () => {
    const pets = useSelector((store) => store.pets)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        getpets()
    }, [])

    const getpets = async () => {
        try {
            let res = await APIConsumer.getAllPets();
            dispatch(ActionPets.addPets(res.Data))
        } catch (error) {
            alert(error, " es de appointmest");
        }
    }

    const deletePet = async (e) => {
        console.log('hola pets')
        try {

            let resul = await APIConsumer.deletePets(e)
            if (resul.status == "400") {
                console.log(resul.message)
            }
        } catch (error) {

        }

        getpets(user)
    }

    return (
        <>

            {error && <Error />}
            {loading ? <Loading />
                :
                <div className="listpets">

                    {pets?.map((e, i) => {
                        return <CardPet
                            key={i}
                            id={e.id}
                            avatar={e.avatar}
                            name={e.name}
                            gender={e.gender}
                            weight={e.weight}
                            boton={<Boton onClick={() => deletePet(e.id)}>ELIMINAR</Boton>} />
                    })}
                </div>}
        </>
    )


}
export default ListAllPets