import CardPet from "../../Components/CardPet/CardPet"
import { useSelector } from 'react-redux';



const ListPet = () => {
    const pet = useSelector((store) => store.pets)
    console.log(pet)
    return (
        <>
            <div className="contenedor-principal">
                <div className="listpet">
                    {pet.map((e, i) => {
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