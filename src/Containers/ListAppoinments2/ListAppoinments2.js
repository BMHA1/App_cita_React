// import CardAppoinments from "../../Components/CardAppoinments/CardAppoinments"
// import { useDispatch, useSelector } from 'react-redux';
// import { APIConsumer } from "../../service/Apiconsumer/ApiAppoinments"
// import React, { useEffect } from 'react';
// import ActionAppointments from '../../service/redux/Action/ActionAppointments'
// import Boton from "../../Components/Boton/Boton"

// const ListAppoinment2 = () => {
//     const appoinment = useSelector((store) => store.appointments)
//     const user = useSelector((store) => store.user)
//     const dispatch = useDispatch()

//     useEffect(() => {
//         console.log('hooola')
//         getAppointments(user)
//     }, [])

//     const getAppointments = async (id) => {
//         console.log(id)
//         try {
//             let resul = await APIConsumer.getAllAppointments(id)
//             dispatch(ActionAppointments.addAppointment(resul))
//         } catch (error) {
//             alert(error, " es de pets");
//         }
//     }

//     const deleteAppointments = async (id) => {
//         try {
//             console.log(id)
//             await APIConsumer.deleteAppoinment(id)
//             // setLoading(true)
//         } catch (error) {
//             alert(error, " es de pets");
//         }
//     }


//     console.log(appoinment)
//     console.log(user)

//     return (
//         <>
//             <div className="contenedor-principal">
//                 <div >
//                     {appoinment.map((e, i) => {
//                         return <CardAppoinments
//                             id={i}
//                             name={e.petId}
//                             date={e.date}
//                             state={e.state}
//                             doctor={e.doctorId}
//                             boton={<Boton onClick={((e) => deleteAppointments(e.id))}>ELIMINAR</Boton>} />
//                     })}
//                 </div>
//             </div>
//         </>
//     )

// }
// export default ListAppoinment2