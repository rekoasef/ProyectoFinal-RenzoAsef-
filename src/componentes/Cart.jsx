import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./context/CartContext";
import trash from "../assets/trash.svg"

const Cart = () =>{

    const {cart, removeItem, clearCart,CantidadTotalProductos,TotalPrecioProductos} =  useContext(CartContext)

    if(CantidadTotalProductos() == 0){
        return(
            <div className="container my-3">
                <div className="row">
                    <div className="col text-center">
                        <p className="display-1">🖥️</p>
                        <div className="alert alert-danger" role="alert">
                            ¡NO HAY PRODUCTOS EN EL CARRITO!🛒
                        </div>
                        <Link to={"/"} className="btn btn-secondary">Volver al inicio</Link>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className="container">
                <div className="row">
                    <div className="col text-center my-4">
                        <h1>Productos Seleccionados</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Imagen</th>
                                <th>Nombre</th>
                                <th>Valor unitario</th>
                                <th>Cantidad</th>
                                <th>Precio total</th>
                                <th>Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map(product =>
                                <tr key={product.id}>
                                    <td><img src={product.imagen} alt={product.titulo} width={80} /></td>
                                    <td>{product.titulo}</td>
                                    <td>${product.precio}</td>
                                    <td>{product.cantidad}</td>
                                    <td>${product.cantidad * product.precio}</td>
                                    <td><a href="#" onClick={() => {removeItem(product.id)}}><img src={trash} alt="Eliminar Producto" title="Eliminar Producto"  /></a></td>
                                </tr>
                            )}
                            <tr>
                                <th colSpan={4}>Suma Total</th>
                                <th>${TotalPrecioProductos()}</th>
                                <td>&nbsp;</td>
                            </tr>
                        </tbody>
                    </table>

                    </div>
                </div>
            </div>
    )
}

export default Cart;