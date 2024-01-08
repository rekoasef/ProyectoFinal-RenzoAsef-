import carrito from '../assets/cart-fill.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

const CartWidget = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col d-flex justify-content-end aling-items-center">
                    <button type="button" className="btn btn-secondary position-relative">
                        <img
                            src={carrito}
                            style={{ fill: 'white', width: '25px', height: '25px' }}
                            alt="carrito de compras"
                        />
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            1
                        </span>
                    </button>

                </div>
            </div>
        </div>
    );
}

export default CartWidget;
