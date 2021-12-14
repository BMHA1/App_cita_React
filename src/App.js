import './App.scss';
import Login from './Containers/Login/Login';
import Header from './Components/Header/Header'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListAllPets from "./Components/ListAppoinments/ListAppoinments"
import Register from "./Containers/Register/Register"
import ListPet from './Components/ListPet/ListPet'
import AddPet from './Components/AddPet/AddPet';
import AddAppointments from './Components/AddAppointments/AddAppointments';
import ListUser from './Components/ListUser/ListUser';
import HomePage from './Containers/HomePage/HomePage';
import ProfileUser from './Containers/ProfileUser/ProfileUser'
import ProfileAdmin from './Containers/ProfileAdmin/ProfileAdmin';
import ProfileDoctor from './Containers/ProfileDoctor/ProfileDoctor';
import ProfilePet from './Containers/ProfilePet/ProfilePet';
// import ListAppoinment from './Containers/ListAppoinments/ListAppoinments';


function App() {
  return (
    <>
      {/* <Provider store={store}> */}
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} exact />     {/* página de muestra y bienvenidalisto */} 
            <Route path="/login" element={<Login />} exact /> {/* página de login  listo*/}
            <Route path="/register" element={<Register />} exact />  {/* página de Registro listo*/}
            <Route path="/profileuser" element={<ProfileUser />} exact />{/* página perfilUsers listo*/}
            <Route path="/profileadmin" element={<ProfileAdmin />} exact />{/* página perfilAdmin listo*/}
            <Route path="/profilePet" element={<ProfilePet/>} exact />{/* página perfilAdmin listo*/}
            <Route path="/profiledoctor" element={<ProfileDoctor/>} exact />{/* página perfilAdmin*/}
            <Route path="/listallpet" element={<ListAllPets />} exact />{/* página donde muestra todas las mascotas del mismo dueño*/}
            <Route path="/lispet" element={<ListPet />} exact />{/* página donde muestra el perfil de un mascota en particular*/}
            <Route path="/listuser" element={<ListUser />} exact />{/* página donde se mostrarán todos los usuarios (Solo Admin)*/}
            <Route path="/addpet" element={<AddPet />} exact />{/* página dar de alta a una mascota*/}
            <Route path="/addapointments" element={<AddAppointments />} exact />{/* página para pedir cita*/}
            {/* <Route path="/listpointments" element={<ListAppoinment />} exact />página para pedir cita */}
            
          </Routes>
        </BrowserRouter>
      {/* </Provider> */}
    </>
  );
}
export default App;

