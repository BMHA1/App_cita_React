
import ListPet from "../ListPet/ListPet"
import './ProfileUser.scss'

const ProfileUser = () => {

    return (
        <>
            <div className="principal-profileUser">

                <div className='Titulo'>
                    <h1>MIS MASCOTAS</h1>
                </div>
                <div className="listAnimales">
                    <ListPet />
                </div>
            </div>
        </>
    )
}
export default ProfileUser