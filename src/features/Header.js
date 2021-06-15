import logo from "../assets/img/logo.png";
import searchIcon from "../assets/img/loupe.svg";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Router>
        <Link to="/">
          <img className="logo-size" src={logo} alt="Netflix logo" />
        </Link>
        <div className="header-menu">
          <Link className="nav-menu" to="/series">
            Séries de TV
          </Link>
          <Link className="nav-menu" to="/movies">
            Filmes
          </Link>
          <Link className="nav-menu" to="/recently">
            Adicionados Recentemente
          </Link>
          <Link className="nav-menu" to="/list">
            Minha Lista
          </Link>
        </div>
        <div className="header-right">
          <Link to="/search">
            <img className="search-svg" src={searchIcon} alt="Busca" />
          </Link>
        </div>
      </Router>
    </div>
  );
};

export default Header;
