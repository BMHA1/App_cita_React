import ListUsers from '../../Components/ListUser/ListUser'
import './ProfileAdmin.scss'
import Typography from '@mui/material/Typography';
const ProfileAdmin = () => {




    return (
        <>
            <Typography variant="h3" component="div" gutterBottom>
                MI CLIENTES
            </Typography>
            <ListUsers />
        </>
    )
}
export default ProfileAdmin