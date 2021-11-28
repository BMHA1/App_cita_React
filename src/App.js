import './App.scss';
import Login from './Containers/Login/Login';
import Header from './Components/Header/Header'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListAllPets from "./Containers/ListAllPets/ListAllPets"
import Register from "./Containers/Register/Register"
import ListPet from './Containers/ListPet/ListPet';
import AddPet from './Containers/AddPet/AddPet';
import AddAppointments from './Containers/AddAppointments/AddAppointments';
import ListUser from './Containers/ListUser/ListUser';
import HomePage from './Containers/HomePage/HomePage';
// import { Provider } from 'react-redux';
// import store from './service/redux/store';
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
 
            <Route path="/" element={<HomePage />} exact />     {/* página de muestra y bienvenida */}
            <Route path="/login" element={<Login />} exact /> {/* página de login */}
            <Route path="/register" element={<Register />} exact />  {/* página de Registro*/}
            <Route path="/listallpet" element={<ListAllPets />} exact />{/* página donde muestra todas las mascotas del mismo dueño*/}
            <Route path="/lispet" element={<ListPet />} exact />{/* página donde muestra el perfil de un mascota en particular*/}
            <Route path="/listuser" element={<ListUser />} exact />{/* página donde se mostrarán todos los usuarios (Solo Admin)*/}
            <Route path="/addpet" element={<AddPet />} exact />{/* página dar de alta a una mascota*/}
            <Route path="/addapointments" element={<AddAppointments />} exact />{/* página para pedir cita*/}
          
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;

