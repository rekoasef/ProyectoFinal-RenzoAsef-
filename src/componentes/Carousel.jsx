import fondo1 from "../assets/fondo.png"
import fondo2 from "../assets/fondo2.png"
import fondo3 from "../assets/FondoCelular.png"

const Carousel = () =>{
    return(
        <>
            <div id="carouselExampleFade" className="carousel slide carousel-fade">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src={fondo1} className="d-block w-100" alt="Fondo"/>
                    </div>
                    <div className="carousel-item">
                    <img src={fondo2} className="d-block w-100" alt="Fondo2"/>
                    </div>
                    <div className="carousel-item">
                    <img src={fondo3} className="d-block w-100" alt="Fondo3"/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                </div>
        </>
    )
}

export default Carousel;