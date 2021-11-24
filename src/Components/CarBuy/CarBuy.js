import { useEffect, useState } from 'react';
// import Button from '../Button/Button';
import store from '../../service/redux/store';
import action from '../../service/redux/actionTools/action';
import CardProduct from '../CardProduct/CardProduct';

const CarBuy = () => {

    const [productsBuy, setproductsBuy] = useState([])



    store.subscribe(() => {
        setproductsBuy(store.getState().cart)
    })


    return (
        <>
            <div >
                {productsBuy.map((e,i) => {
                    <CardProduct
                        id={i}
                        title={e.name}
                        price={e.price}
                        img={e.image}
                    />
                })}
            </div>

        </>
    )

}

export default CarBuy

