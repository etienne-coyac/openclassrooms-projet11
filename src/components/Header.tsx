import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import "../style/header.scss";
function Header() {
  return (
    <div id="header">
      <svg>
        <use xlinkHref={logo + "#logo"} />
      </svg>
      <nav className="links">
        <Link to="/" >Accueil</Link>
        <Link to="/a-propos" >À propos</Link>
      </nav>
    </div>
  );
}

export default Header;
