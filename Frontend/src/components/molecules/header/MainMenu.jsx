import { Link } from "react-router-dom"

const MainMenu = () => {
  return (
    <nav className="header__menu">
      <ul className="header__lista">
        <li className="header__item"><Link to="/">Inicio</Link></li>
        <li className="header__item"><Link to="/">Servicios</Link></li>
        <li className="header__item"><Link to="/">Tienda</Link></li>
        <li className="header__item"><Link to="/">Contacto</Link></li>
      </ul>
    </nav>
  );
};

export default MainMenu;