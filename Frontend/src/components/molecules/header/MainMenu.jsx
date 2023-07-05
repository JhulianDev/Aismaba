import { Link } from "react-router-dom"

const MainMenu = () => {
  return (
    <nav className="header__menu">
      <ul className="header__lista">
        <li className="header__item"><Link to="/" className="header__link">Inicio</Link></li>
        <li className="header__item"><Link to="/" className="header__link">Servicios</Link></li>
        <li className="header__item"><Link to="/" className="header__link">Tienda</Link></li>
        <li className="header__item"><Link to="/" className="header__link">Contacto</Link></li>
      </ul>
    </nav>
  );
};

export default MainMenu;