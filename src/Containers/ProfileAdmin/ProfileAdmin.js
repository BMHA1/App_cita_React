import ListUsers from '../../Components/ListUser/ListUser'
import './ProfileAdmin.scss'
import Typography from '@mui/material/Typography';
const ProfileAdmin = () => {
    return (
        <>
            <div className="principal-profileAdmin">
                <div className='Titulo'>
                    <Typography variant="h3" component="div" gutterBottom>
                        MI CLIENTES
                    </Typography>
                </div>
                <div className="listUsuarios">
                    <ListUsers />
                </div>
            </div>

        </>
    )
}
export default ProfileAdmin