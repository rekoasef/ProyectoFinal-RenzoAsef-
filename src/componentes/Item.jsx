import { Link } from "react-router-dom";

const Imagenes = ({item}) => {
    const estiloComponente = {
        padding: "20px",
        width: "250px",
        height:"250px",
        display:"flex",
        alingItems:"center",
        justifyContent:"center"
    };
  
    return (
      <div style={estiloComponente}>
        <img src={item.imagen} className="card-img-top image-fluid" alt={item.titulo} />
      </div>
    );
  };

const Item = ({item}) => {
    return (
        <div className="col-md-3 text-center">
            <div className="card border-1 rounded-3 border-dark-subtle my-1">
                <Link to={"/item/" + item.id} className="text-decoration-none text-dark">
                    <Imagenes item={item}/>
                    <div className="card-body">
                        <p className="card-text">{item.titulo}</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Item;