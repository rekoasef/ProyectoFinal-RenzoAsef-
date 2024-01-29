import { useState } from "react";
import arrayProductos from "./json/productos.json";
import { useEffect } from "react";
import ItemList from "./ItemList";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const promesa = new Promise(resolve => {
            setTimeout(() => {
                resolve(arrayProductos);
            }, 2000);
        })
        promesa.then(data => {
            setItems(data);
            console.log(data);
        })
    }, []);

    return (
        <>
            <ItemList items={items} />
        </>
    )
}

export default ItemListContainer;