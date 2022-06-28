import React from "react";
import { useDispatch } from 'react-redux'
import { addToCart } from '../../containers/Cart/cartSlice'
import './ProductCard.scss'

const ProductCard = props => {
    const dispatch = useDispatch()
    //otra opcion de renderizado condicional
    /*const button = () => {
        if(props.btn == '0') {
            return 
        } else {
            return <button className="addBtn" onClick={()=>{dispatch(addToCart(props.data))}}>Añadir al carrito</button>
        }
    }*/
    //name: "Platos", price: 2, description: "Platos blanco soso", stock: 40, vendor: "Chino", labels: ["vajilla", "plato"], warranty: "3 años"
    return (
        <div className="ProductCard">
            <h3>{props.data.name}</h3>
            <p>{props.data.vendor}</p>
            <p>{props.data.price}€</p>
            <p>{props.data.description}</p>
            <p>Sólo quedan {props.data.stock} unidades</p>

            {props.btn != '0' &&
                <button className="addBtn" onClick={()=>{dispatch(addToCart(props.data))}}>Añadir al carrito</button>
            }

            {/*button*/}
        </div>
    )
}

export default ProductCard