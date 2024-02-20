import { Link } from "react-router-dom";
import logoTecno from "../assets/Logo.png";

const Logo = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Link to={"/"}>
            <img src={logoTecno} alt="Logo Tecno" className="img-fluid" style={{ maxWidth: "150px", maxHeight: "150px" }} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Logo;
