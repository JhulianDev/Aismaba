import { Link } from "react-router-dom"
import { ISOTIPO_BLANCO, CARRITO_ICONO } from "../../assets/img/imagenes";
import { useEffect } from "react";

const MainHeader = () => {

  useEffect(() => {
    const hamburger = document.querySelector(".hamburger");
    const menu = document.querySelector(".header__menu");

    hamburger.addEventListener("click", function () {
      hamburger.classList.toggle("is-active");
      menu.classList.toggle("header__menu--activo");
    });

  }, [])

  return (
    <div className="header header--color">
      <Link to="/" className="header__container-logo">
        <img src={ISOTIPO_BLANCO} alt="Logotipo de Aismaba" className="header__logo" />
      </Link>

      <div className="header__container-hamburger">
        <button className="hamburger hamburger--spin">
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
      </div>

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
  );
};

export default MainHeader;