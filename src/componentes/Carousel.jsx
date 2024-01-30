import fondo1 from "../assets/fondo.png"
import fondo2 from "../assets/fondo2.png"
import fondo3 from "../assets/FondoCelular.png"

const Carousel = () =>{
    return(
        <>
            <div id="carouselExampleFade" class="carousel slide carousel-fade">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src={fondo1} class="d-block w-100" alt="Fondo"/>
                    </div>
                    <div class="carousel-item">
                    <img src={fondo2} class="d-block w-100" alt="Fondo2"/>
                    </div>
                    <div class="carousel-item">
                    <img src={fondo3} class="d-block w-100" alt="Fondo3"/>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
                </div>
        </>
    )
}

export default Carousel;