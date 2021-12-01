import { APIConsumer } from '../../service/Apiconsumer/ApiDoctor';
import TextField from '@mui/material/TextField'
import { Grid } from '@mui/material';
import Boton from '../../Components/Boton/Boton';
import './AddAppointments.scss'
// import { useNavigate } from 'react-router-dom'
import Select from '@mui/material/Select';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

const AddAppointments = () => {
    const pets = useSelector((store) => store.pets)
    const user = useSelector((store) => store.user)
    // const dc = [{ name: "julio" }, { name: "mario" }, { name: "pedro" }]

    const [dc, setDc] = useState([])



    useEffect(() => {
        getdoctor()
    }, [])


    const getdoctor = async () => {

        let result = await APIConsumer.getAllDoctors(user.token)
        console.log(result.Data)
        setDc(result.Data)
    }


    const HandelChangeSend = (d) => {
        d.preventDefault()
        console.log("aqui estoy")
        console.log(d.target[1].value)
        console.log(d.target.date.value)
        console.log(d.target.doctor.value)
        console.log(d.target.pets.value)
        const appoinment = {

            date: d.target.date.value,
            state: "Pending",
            petIt: d.target.pets.value,
            doctorid: d.target.doctor.value,

        }
        // setTimeout(async () => {
        //     try {
        //         let result = await APIConsumer.CreateAppoinment(appoinment)
        //         console.log(result)
        //         // setLoading(false)
        //     } catch (error) {
        //         console.log(error)
        //         // setError(true)
        //         // setLoading(false)
        //     }
        // }, 5000);
    }

    return (
        <>
            {/* {error && <h1>¡I'm sorry, something has happened!</h1>}
                {loading && <h1>Loading...</h1>} */}
            <form onSubmit={(d) => HandelChangeSend(d)} >
                <div className="Container-appoints">
                    <Grid className="Grid-appoinments" container spacing={1} columns={2} justifyContent="center" >
                        <Grid columnSpacing={2} >
                            <Grid item xs={5} className="doctor">
                                <label>Pets : </label>
                                <select name="pets">
                                    {pets.map((name) => {
                                        return <option name="pets">{name.name}</option>
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
                            <Grid item xs={5} className="doctor">
                                <label>Doctor : </label>
                                <select>
                                    {dc.map((name) => {
                                        return <option name="doctor">{name.name}{'  '}{name.username}</option>
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