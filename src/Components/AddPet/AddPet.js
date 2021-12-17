import TextField from '@mui/material/TextField'
import Boton from '../Boton/Boton';
import { APIConsumer } from '../../service/Apiconsumer/ApiPets';
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';
import { useState } from 'react';
import { Grid, Box } from '@mui/material'

import './AddPet.scss'

const AddPet = () => {
    const user = useSelector((state) => state.user)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [message, setMessage] = useState(false)
    const navigate = useNavigate()

    const HandelChangeSend = (d) => {
        setLoading(true)
        console.table(pets)
        d.preventDefault()
        const pets = {
            avatar: d.target.avatar.value,
            name: d.target.name.value,
            userId: user.user.data,
            specie: d.target.specie.value,
            weight: d.target.weight.value,
            age: d.target.age.value,
            gender: d.target.gender.value,
            disease: d.target.disease.value
        }
        console.table(pets)
        console.log(user.user.data)
        setTimeout(async () => {
            try {
                let result = await APIConsumer.CreatePets(pets)
                console.log(result)
                if (result) {
                    setMessage(true)
                    setTimeout(() => {
                        navigator('./perfilpets')
                    }, 2000)
                } else {
                    setError(true)
                }
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
            {error && <Error />}

            {loading && <Loading />}
            <Box sx={{ lineHeight: 'normal', m: 1, align:'justify', typography: 'subtitle2', fontSize: '2.5em' }}>Hora de registar tus mascotas</Box>
            {message ?
                <div>
                    <span>¡Registro Exitoso!</span>
                    <span>Correee y pide una cita!</span>
                    <Boton onClick={() => navigate('/ProfilePet')}>IR A PERFIL</Boton>
                </div> :
                <form onSubmit={(d) => HandelChangeSend(d)} >
                    <div className="Container-add-pet">
                        <Grid className="GridPadre-pet" container spacing={1} columns={2} justifyContent="center" >
                            <Grid columnSpacing={2} >
                                <Grid item xs={5} className="avatar-pet">
                                    <TextField type='text'
                                        size="small"
                                        name='avatar'
                                        placeholder="Introduce url de tu foto"
                                        margin="dense"
                                        required />
                                </Grid>
                                <Grid item xs={5} className="name-pet">
                                    <TextField type='text'
                                        size="small"
                                        name='name'
                                        placeholder="Nombre Mascota"
                                        margin="dense"
                                        required />
                                </Grid>
                                <Grid item xs={5} className="specie">
                                    <TextField type='text'
                                        size="small"
                                        name='specie'
                                        placeholder="¿Especie?"
                                        margin="dense"
                                        required />
                                </Grid>
                            </Grid>
                            <Grid>
                                <Grid item xs={5} className="weight">
                                    <TextField type='text'
                                        size="small"
                                        name='weight'
                                        placeholder="¿Cúanto pesa?"
                                        margin="dense"
                                        required />
                                </Grid>
                                <Grid item xs={5} className="gender">
                                    <TextField type='text'
                                        size="small"
                                        name='gender'
                                        placeholder="¿Sexo?"
                                        margin="dense"
                                        required />
                                </Grid>
                                <Grid item xs={5} className="age">
                                    <TextField type='text'
                                        size="small"
                                        name='age'
                                        placeholder="¿Que edad tienes?"
                                        margin="dense"
                                        required />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={5} className="disease">
                            <TextField
                                id="standard-multiline-static"
                                placeholder="¿Algo extra que te gustaría contar?"
                                multiline
                                rows={6}
                                variant="standard"
                                margin="dense"
                                name='disease'
                                className="textarea"
                            />
                        </Grid>
                        <div className="buton-pet">
                            <Boton type="onSubmit">Registrarte</Boton>
                        </div>
                    </div >
                </form >
            }

        </>
    )


}
export default AddPet