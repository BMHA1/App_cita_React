import { APIConsumer } from '../../service/Apiconsumer/ApiDoctor';
import TextField from '@mui/material/TextField'
import { Grid } from '@mui/material';
import Boton from '../../Components/Boton/Boton';
import './AddAppointments.scss'
// import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';

const AddAppointments = () => {
    const pets = useSelector((store) => store.pets)
    const user = useSelector((store) => store.user)


    const [dc, setDc] = useState([])

    useEffect(() => {
        getdoctor()
    }, [])

    const getdoctor = async () => {

        let result = await APIConsumer.getAllDoctors()
        console.log(result.Data)
        setDc(result.Data)
    }

    const HandelChangeSend = (d) => {
        d.preventDefault()
        const appoinment = {
            date: d.target.date.value,
            state: "Pending",
            petId: d.target[0].value,
            doctorId: d.target[1].value,
        }
        setTimeout(async () => {
            try {
                let result = await APIConsumer.CreateAppoinment(appoinment, user.token)
                console.log(result)
                // setLoading(false)
            } catch (error) {
                console.log(error)
                // setError(true)
                // setLoading(false)
            }
        }, 5000);
    }

    return (
        <>
            {/* {error && <h1>¡I'm sorry, something has happened!</h1>}
                {loading && <h1>Loading...</h1>} */}
            <div className="contenedorPadre-Appointment">
                <div className="imgAppointments-Add">
                    <img src={"https://bestanimations.com/uploads/gifs/631689384cute-funny-dog-animated-gif-2.gif"} alt="use"></img>
                </div>
                <form onSubmit={(d) => HandelChangeSend(d)} >
                    <Typography variant="h3" component="div" gutterBottom>
                        ¡PIDA LA CITA!
                    </Typography>
                    <div className="Container-appoints">
                        <Grid className="Grid-appoinments" container spacing={1} columns={2} justifyContent="center" >
                            <Grid columnSpacing={2} >
                                <Grid item xs={5} className="doctor">
                                    <label>Doctor : </label>
                                    <select>
                                        {dc.map((name) => {
                                            return <option key={name.id} value={name.id}>{name.name}</option>
                                        })}
                                    </select>
                                </Grid>
                                <Grid item xs={5} className="pets">
                                    <label>Pets : </label>
                                    <select >
                                        {pets.map((pet) => {
                                            return <option key={pet.id} value={pet.id}>{pet.name}</option>
                                        })}
                                    </select>
                                </Grid>
                                <Grid item xs={5} className="date">
                                    <TextField type='date'
                                        size="small"
                                        name='date'
                                        margin="dense"
                                        required />
                                </Grid>
                            </Grid>
                        </Grid>
                        <div className="buton-solicitar">
                            <Boton type="onSubmit">Solicitar</Boton>
                        </div>
                    </div >
                </form >

            </div>
        </>
    )


}

export default AddAppointments