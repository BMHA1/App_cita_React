import { useEffect, useState } from 'react'
import store from '../../service/redux/store'
import CardProduct from '../CardProduct/CardProduct'

const ProductList = () => {



    const [product, setProduct] = useState([])

    useEffect(() => {
        setProduct(store.getState().products)

    }, [])

    return (
        <>
            <div className="rentalsList">
                {product.map((e, i) => {
                    return <CardProduct
                        id={i}
                        title={e.name}
                        price={e.price}
                        img={e.image} />
                })}
            </div>
        </>
    )
}
export default ProductList