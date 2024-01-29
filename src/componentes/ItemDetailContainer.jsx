import { useEffect, useState } from "react";
import arrayProductos from "./json/productos.json";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () =>{

    const [producto, setProducto] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        const promesa = new Promise(resolve => {
            setTimeout(() => {
                let productoIndividual = arrayProductos.find(prod=> prod.id == id)
                resolve(productoIndividual);
            }, 2000);
        })
        promesa.then(data => {
            setProducto(data);
        })
    }, [id]);
    return(
        <ItemDetail producto={producto}/>
    )
}

export default ItemDetailContainer;