import Button from "../Button/Button";
import store from "../../service/redux/store";
import action from "../../service/redux/actionTools/action";

const CardProduct = (props) => {


    const detele = () => {
        store.dispatch(action.deleteProductsCar(props.id))
    }
    const addCard = (productBuy) => {
        store.dispatch(action.addProductsCar(productBuy))
    }

    return (
        <>
        <div className="cerrar">
            <Button onClick={detele}>Eliminar</Button>
        </div>
            <div className="CardList">
                <h1>{props.title}</h1>
            </div>
            <div className="id">
                <span>{props.id}</span>
            </div>
            <div className="task">
                <img src={props.img} alt="product"></img>
            </div>
            <Button onClick={() => addCard(props)}><span> comprar {props.price} €</span></Button>
        </>
    )
};

export default CardProduct