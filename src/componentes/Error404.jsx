import { Link } from "react-router-dom";
const Error404 = () =>{
    return(
        <div className="container my-5">
            <div className="row">
                <div className="col">
                <div className="alert alert-warning" role="alert">
                    🚨🚨PAGINA NO ENCONTRADA🚨🚨 <Link to={"/"} className="alert-link">Toca aqui</Link>. Para volver a la pagina principal
                </div>
                </div>
            </div>
        </div>
    )
}

export default Error404;