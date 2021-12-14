import TextField from '@mui/material/TextField'
import { Grid } from '@mui/material';
import Boton from '../Boton/Boton';
import { APIConsumer } from '../../service/Apiconsumer/ApiPets';
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import './AddPet.scss'

const AddPet = () => {
    let navigate = useNavigate()
    const user = useSelector((state) => state[user])
    

    const HandelChangeSend = (d) => {
        setLoading(true)
        d.preventDefault()
        const pets = {
            avatar: d.target.avatar.value,
            name: d.target.name.value,
            userId: user.user.id,
            specie: d.target.specie.value,
            weight: d.target.weight.value,
            age: d.target.age.value,
            gender: d.target.gender.value,
            disease: d.target.disease.value
        }
        console.table(pets)
        setTimeout(async () => {
            try {
                let result = await APIConsumer.CreatePets(pets)
                console.log(result)
                if (result) navigate('/login')
                // setLoading(false)
            } catch (error) {
                alert(error)
                // setError(true)
                // setLoading(false)
            }
        }, 5000);
    }


    return (
        <>
        <h1>registra tu mascota</h1>
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
                                    placeholder="¿Que Animal es?"
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
                            <Grid item xs={5} className="age-pet">
                                <TextField type='text'
                                    size="small"
                                    name='age'
                                    placeholder="Introduce tu movil"
                                    margin="dense"
                                    required />
                            </Grid>
                            <Grid item xs={5} className="gender">
                                <TextField type='text'

                                    size="small"
                                    name='gender'
                                    placeholder="Introduce tu edad"
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
        </>
    )


}
export default AddPet