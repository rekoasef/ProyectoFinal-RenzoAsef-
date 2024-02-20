import { useContext } from 'react';
import carrito from '../assets/cart-fill.svg';
import { Link } from "react-router-dom";
import { CartContext } from './context/CartContext';


const CartWidget = () => {

    const {CantidadTotalProductos} = useContext(CartContext)

    return (
        <div className="container">
            <div className="row">
                <div className="col d-flex justify-content-end aling-items-center">
                    <Link to={"/cart"} className="btn btn-secondary position-relative">
                        <img
                            src={carrito}
                            style={{ fill: 'white', width: '25px', height: '25px' }}
                            alt="carrito de compras"
                        />
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            {CantidadTotalProductos()}
                        </span>
                    </Link>

                </div>
            </div>
        </div>
    );
}

export default CartWidget;
