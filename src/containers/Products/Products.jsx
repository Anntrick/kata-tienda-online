
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { addProducts, selectProducts } from './productsSlice'

import ProductCard from '../../components/ProductCard/ProductCard'
import './Products.scss'

const Products = props => {
    const dispatch = useDispatch()
    const products = useSelector(selectProducts)

    useEffect(() => {
        dispatch(addProducts([
            {name: "Cucharas", price: 1, description: "Cucharas de acero inoxidable", stock: 50, vendor: "Jose Carlos", labels: ["cuberteria", "acero"], warranty: "3 años"},
            {name: "Sarten de ceramica inducción", price: 50, description: "Sarten de ceramica inducción", stock: 21, vendor: "Manolo", labels: ["antiadherente", "menaje", "cerámica"], warranty: "3 años"},
            {name: "Vaso de tubo", price: 3, description: "Los mejores vasos para tu cubata, no incluye hielo", stock: 30, vendor: "chino", labels: ["vaso", "cristal", "cubata", "tubo"], warranty: "3 años"},
            {name: "Cuchillos", price: 20, description: "Juego de cuchillos", stock: 20, vendor: "Jose Carlos", labels: ["cuchillos", "acero", "juego de cuchillos"], warranty: "3 años"},
            {name: "Tenedores", price: 1, description: "Tenedores de acero inoxidable", stock: 50, vendor: "Jose Carlos", labels: ["cuberteria", "acero"], warranty: "3 años"},
            {name: "Platos", price: 2, description: "Platos blanco soso", stock: 40, vendor: "Chino", labels: ["vajilla", "plato"], warranty: "3 años"}
        ]))
    }, [])

    return(
        <div className='Products'>
            Products
            <div>
                {
                products.map((product, index) => (
                    <ProductCard key={index} data={product} />
                ))
            
            }</div>

        </div>
    )
}

export default Products