import { APIConsumer } from '../../service/Apiconsumer/ApiAppoinments';
import TextField from '@mui/material/TextField'
import { Grid } from '@mui/material';
import Boton from '../../Components/Boton/Boton';
import './AddAppointments.scss'
// import { useNavigate } from 'react-router-dom'
import Select from '@mui/material/Select';
import { useSelector } from 'react-redux';







const AddAppointments = () => {
    // const doctor = useSelector((store) => store.doctor.doctor)

    const dc = [{ name: "julio" }, { name: "mario" }, { name: "pedro" }]



    const HandelChangeSend = (d) => {
        // setLoading(true)
        d.preventDefault()
        const appoinment = {

            date: d.target.date.value,
            state: "Pending",
            petIt: d.target.petIt.value,
            doctorid: d.target.doctorid.value,

        }
        setTimeout(async () => {
            try {
                let result = await APIConsumer.CreateAppoinment(appoinment)
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
            <form onSubmit={(d) => HandelChangeSend(d)} >
                <div className="Container-appoints">
                    <Grid className="Grid-appoinments" container spacing={1} columns={2} justifyContent="center" >
                        <Grid columnSpacing={2} >
                            <Grid item xs={5} className="name-dog">
                                <TextField type='text'
                                    placeholder={"Nombre del perro"}
                                    size="small"
                                    name='date'
                                    margin="dense"
                                    required />
                            </Grid>
                            <Grid item xs={5} className="date">
                                <TextField type='date'
                                    size="small"
                                    name='date'
                                    margin="dense"
                                    required />
                            </Grid>
                            <Grid item xs={5} className="doctor">
                                <label>Doctor: </label>
                                <select>
                                    {dc.map((name) => {
                                        return <option>{name.name}</option>
                                    })}
                                </select>
                            </Grid>
                        </Grid>
                    </Grid>
                    <div className="buton">
                        <Boton type="onSubmit">Solicitar</Boton>
                    </div>
                </div >
            </form >
        </>
    )


}

export default AddAppointments