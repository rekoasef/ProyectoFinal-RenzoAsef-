import { useState } from "react";
//import arrayProductos from "./json/productos.json";
import { useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import Carousel from "./Carousel";
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore"
import Loading from "./Loading";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] =useState(true)
    const {id} = useParams()


//Se llamo los productos desde el archivo JSON
/*     useEffect(() => {
        const promesa = new Promise(resolve => {
            setTimeout(() => {
                resolve(id ? arrayProductos.filter(item => item.categoria == id) : arrayProductos);
            }, 2000);
        })
        promesa.then(data => {
            setItems(data);
        })
    },[id]); */


//Lo que se hizo aca es subir los datos a la base de datos para no tener que hacerlos uno por uno
/*     useEffect(()=> {
        const db = getFirestore()

        const itemCollection = collection(db, "Items")

        arrayProductos.forEach(prod => {
            addDoc(itemCollection, prod)
        })
    },[]) */

//Llamamos a los productos desde el firestore
useEffect(()=>{
    const db = getFirestore()
    const itemCollection = collection(db, "Items")

    const consulta = id ? query(itemCollection, where("categoria", "==", id)) : itemCollection

    getDocs(consulta).then(resultado =>{
        setLoading(false)
        setItems(resultado.docs.map(producto => ({id:producto.id, ...producto.data()})))

    })
},[id])    

    return (
        <>
            <Carousel/>
            {loading ? <Loading/> : <ItemList items={items} />}
        </>
    )
}

export default ItemListContainer;