import { Link } from "react-router-dom"
import { ISOTIPO_BLANCO, CARRITO_ICONO } from "../../assets/img/imagenes";

const MainHeader = () => {
  return (
    <div className="header header--color">
      <div className="max-width">
        <Link to="/" className="header__container-logo">
          <img src={ISOTIPO_BLANCO} alt="Logotipo de Aismaba" className="header__logo" />
        </Link>

        <nav className="header__menu">
          <ul className="header__lista">
            <li className="header__item"><Link to="/">Inicio</Link></li>
            <li className="header__item"><Link to="/">Servicios</Link></li>
            <li className="header__item"><Link to="/">Tienda</Link></li>
            <li className="header__item"><Link to="/">Contacto</Link></li>
          </ul>
        </nav>

        <Link className="header__container-cart">
          <img src={CARRITO_ICONO} alt="Icono de carrito de compras" className="header__cart" />
        </Link>
      </div>
    </div>
  );
};

export default MainHeader;