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
                                        <a className="nav-link text-white m-4" href="#">Televisores</a>
                                    </div>
                                    <li className="nav-item">
                                        <a className="nav-link text-white m-4" href="#">Computadoras</a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle text-white m-4" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Celulares
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Iphone</a></li>
                                            <li><a className="dropdown-item" href="#">Samsung</a></li>
                                            <li><a className="dropdown-item" href="#">Motorola</a></li>
                                        </ul>
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
