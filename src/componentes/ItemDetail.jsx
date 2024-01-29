import ItemCount from "./ItemCount";

const ItemDetail = ({producto}) =>{
    return(
        <div className="container my-5">
            <div className="row">
                <div className="col-md-4">
                    <img src={producto.imagen} alt={producto.titulo} className="img-fluid" />
                </div>
                <div className="col-md-8">
                    <h2>{producto.titulo}</h2>
                    <p>-{producto.descripcion1}</p>
                    <p>-{producto.descripcion2}</p>
                    <p>-{producto.descripcion3}</p>
                    <p>-{producto.descripcion4}</p>
                    <hr />
                    <p><b>${producto.precio}</b></p>
                    <ItemCount stock={producto.stock}/>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;