import { useEffect, useState } from "react";
//import arrayProductos from "./json/productos.json";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import Loading from "./Loading";

const ItemDetailContainer = () =>{

    const [producto, setProducto] = useState([]);
    const [loading, setLoading] = useState(true)
    const {id} = useParams();

/*     useEffect(() => {
        const promesa = new Promise(resolve => {
            setTimeout(() => {
                let productoIndividual = arrayProductos.find(prod=> prod.id == id)
                resolve(productoIndividual);
            }, 2000);
        })
        promesa.then(data => {
            setProducto(data);
        })
    }, [id]);*/

    useEffect(() => {
        const db = getFirestore();
        const producto = doc(db, "Items", id);
        getDoc(producto).then(resultado => {
            setLoading(false)
            setProducto({id:resultado.id, ...resultado.data()});
        });
    }, [id]);
    return(
        <>
            {loading ? <Loading/> : <ItemDetail producto={producto}/>}
        </>    
    )   
}

export default ItemDetailContainer;