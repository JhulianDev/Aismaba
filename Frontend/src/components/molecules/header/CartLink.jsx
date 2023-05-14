import { Link } from "react-router-dom"
import { CARRITO_ICONO } from "../../../assets/img/imagenes";

const CartLink = () => {
  return (
    <Link className="header__container-cart">
      <img src={CARRITO_ICONO} alt="Icono de carrito de compras" className="header__cart" />
    </Link>
  );
};

export default CartLink;