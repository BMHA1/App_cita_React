import { useSelector } from 'react-redux';
import ListPet from "../ListPet/ListPet"
import './ProfileUser.scss'
import Typography from '@mui/material/Typography';

const ProfileUser = () => {
    const user = useSelector((store) => store.user)

    return (
        <>
            <div className="principal-profileUser">
                <div className='Titulo'>
                    <Typography variant="h3" component="div" gutterBottom>
                        Bienvenido{' ' + user.user.name}
                    </Typography>
                </div>
                <div className="listAnimales">
                    <ListPet />
                </div>
            </div>
        </>
    )
}
export default ProfileUser