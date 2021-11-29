import { useState } from 'react';
import { APIConsumer } from '../../service/Apiconsumer/ApiUser';
import TextField from '@mui/material/TextField'
import { Grid } from '@mui/material';
import Boton from '../../Components/Boton/Boton';
import './Register.scss'
import { useNavigate } from 'react-router-dom'

const Register = () => {

    let navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const HandelChangeSend = (d) => {
        setLoading(true)
        d.preventDefault()
        const user = {
            avatar: d.target.avatar.value,
            name: d.target.name.value,
            surname: d.target.surname.value,
            email: d.target.email.value,
            password: d.target.password.value,
            phone: d.target.phone.value,
            age: d.target.age.value,
            addres: d.target.addres.value
        }
        console.table(user)
        setTimeout(async () => {
            try {
                let result = await APIConsumer.CreateUser(user)
                console.log(result)
                if (result) navigate('/login')
                setLoading(false)
            } catch (error) {
                alert(error)
                setError(true)
                setLoading(false)
            }
        }, 5000);
    }


    return (
        <>
            {error && <h1>¡I'm sorry, something has happened!</h1>}
            {loading && <h1>Loading...</h1>}
            <form onSubmit={(d) => HandelChangeSend(d)} >
                <div className="Container-c">

                    <Grid className="Grid" container spacing={1} columns={2} justifyContent="center" >
                        <Grid columnSpacing={2} >
                            <Grid item xs={5} className="avatar">
                                <TextField type='text'
                                    size="small"
                                    name='avatar'
                                    placeholder="Introduce url de tu imagen"
                                    margin="dense"
                                    required />
                            </Grid>
                            <Grid item xs={5} className="name ">
                                <TextField type='text'
                                    size="small"
                                    name='name'
                                    placeholder="Introduce tu nombre"
                                    margin="dense"
                                    required />
                            </Grid>
                            <Grid item xs={5} className="surname ">
                                <TextField type='text'
                                    size="small"
                                    name='surname'
                                    placeholder="Introduce tú apellido"
                                    margin="dense"
                                    required />
                            </Grid>
                            <Grid item xs={5} className="email">
                                <TextField type='email'
                                    size="small"
                                    name='email'
                                    placeholder="Introduce tu email"
                                    margin="dense"
                                    required />
                            </Grid>
                        </Grid>
                        <Grid>
                            <Grid item xs={5} className="password">
                                <TextField type='password'
                                    size="small"
                                    name='password'
                                    placeholder="Introduce tu contraseña"
                                    margin="dense"
                                    required />
                            </Grid>
                            <Grid item xs={5} className="phone">
                                <TextField type='text'
                                    size="small"
                                    name='phone'
                                    placeholder="Introduce tu movil"
                                    margin="dense"
                                    required />
                            </Grid>
                            <Grid item xs={5} className="age">
                                <TextField type='text'
                                    size="small"
                                    name='age'
                                    placeholder="Introduce tu edad"
                                    margin="dense"
                                    required />
                            </Grid>
                            <Grid item xs={5} className="addres">
                                <TextField type='text'
                                    size="small"
                                    name='addres'
                                    placeholder="Introduce tu dirección"
                                    margin="dense"
                                    required />
                            </Grid>
                        </Grid>
                    </Grid>
                    <div className="buton">
                        <Boton type="onSubmit">Registrarte</Boton>
                    </div>
                </div >
            </form >
        </>
    )
}

export default Register