import { useSelector, useDispatch } from 'react-redux'
import CardUser from '../../Components/CardUser/CardUser'



const ListUser = () => {

    const users = useSelector((state) => state.user)
    // const dispatch = useDispatch()
    
    return (
        <>
            <h1>Lista Usuarios</h1 >
            <div className="rentalsList">
                {users.map((e, i) => {
                    return <CardUser
                        id={i}
                        title={e.name}
                        price={e.price}
                        img={e.image} />
                })}
            </div>
        </>
    )
}

export default ListUser