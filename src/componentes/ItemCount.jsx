import { useState, useEffect} from "react";
import { Link } from "react-router-dom";

const ItemCount = ({stock, onAdd}) => {
    const [counter, setCounter] = useState(1);
    const [itemStock, setItemStock] = useState(stock);
    const [estadoBoton, setEstadoBoton] = useState(true);

    const incrementar = () => {
        if (counter < itemStock) {
            setCounter(counter + 1)
        }
    }

    const decrementar = () => {
        if (counter > 1) {
            setCounter(counter - 1);
        }
    }

    const AgregarCarrito = () => {
        if (counter <= itemStock) {
            setItemStock(itemStock - counter);
            setCounter(1);
            onAdd(counter)
            setEstadoBoton(false)
            console.log("Agregaste " + counter + " productos al carrito. Quedan " + (itemStock - counter) + " productos disponibles.");
        }
    }

    useEffect(()=>{
        setItemStock(stock)
    },[stock])

    return (
        <>
            <div className="row my-1">
                <div className="col-md-5">
                    {estadoBoton ?  <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-dark" onClick={decrementar}>-</button>
                        <button type="button" className="btn btn-dark">{counter}</button>
                        <button type="button" className="btn btn-dark" onClick={incrementar}>+</button>
                    </div> : ""}
                </div>
            </div>
            <div className="row my-1">
                <div className="col-md-5">
                    {estadoBoton ? <button type="button" className="btn btn-dark" onClick={AgregarCarrito}>Agregar al Carrito</button> : <Link to={"/cart"} type="button" className="btn btn-dark">Finalizar compra</Link>}
                </div>
            </div>
        </>
    )
}

export default ItemCount;