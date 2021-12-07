import { useSelector} from 'react-redux';
import ListPet from "../ListPet/ListPet"
import './ProfileUser.scss'

const ProfileUser = () => {
    const user = useSelector((store) => store.user)
    console.log(user.user.name)
    return (
        <>
            <div className="principal-profileUser">

                <div className='Titulo'>
                    <h1>Bienvenido{ ' '+user.user.name}</h1>
                </div>
                <div className="listAnimales">
                    <ListPet />
                </div>
            </div>
        </>
    )
}
export default ProfileUser