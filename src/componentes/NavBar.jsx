import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";


const NavBar = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-1 d-flex justify-content-center aling-items-center">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                                <ul className="navbar-nav">
                                    <div className="nav-item">
                                        <NavLink className="nav-link text-white m-4" to={"/category/televisores"}>Televisores</NavLink>
                                    </div>
                                    <li className="nav-item">
                                        <NavLink className="nav-link text-white m-4" to={"/category/computadora"}>Computadoras</NavLink>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <NavLink className="nav-link text-white m-4" to={"/category/celulares"}>Celulares</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    
                </div>
                <div className="col-md-10 d-flex justify-content-end align-items-center">
                        <div className="row">
                            <div className="col">
                                <CartWidget/>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
}

export default NavBar;