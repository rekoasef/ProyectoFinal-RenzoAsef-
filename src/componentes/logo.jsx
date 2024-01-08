import logoTecno from "../assets/Logo.png";

const Logo = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <img src={logoTecno} alt="Logo Tecno" className="img-fluid" style={{ maxWidth: "150px", maxHeight: "150px" }} />
        </div>
      </div>
    </div>
  );
}

export default Logo;
