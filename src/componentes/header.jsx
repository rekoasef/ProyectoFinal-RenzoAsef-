import NavBar from "./NavBar";
import Logo from "./Logo";

const Header = () => {
  return (
    <div className="container-fluid bg-black text-white">
      <div className="row">
        <div className="col d-flex align-items-center">
          <Logo />
        </div>
        <div className="col d-flex align-items-center">
          <NavBar />
        </div>
      </div>
    </div>
  );
};

export default Header;
