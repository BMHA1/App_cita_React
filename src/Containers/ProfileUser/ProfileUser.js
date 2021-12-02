import { List } from "@mui/material"
import Boton from "../../Components/Boton/Boton"
import ListPet from "../ListPet/ListPet"

const ProfileUser = () => {

    return (
        <>
            <h1>MIS MASCOTAS</h1>
            <div className="listAnimales">
            <ListPet />
            </div>
        </>
    )


}
export default ProfileUser