import { Link } from "react-router-dom"
import { ISOTIPO_BLANCO } from "../../../assets/img/imagenes";

const LogoLink = () => {
  return (
    <Link to="/" className="header__container-logo">
      <img src={ISOTIPO_BLANCO} alt="Isotipo de Aismaba" className="header__logo" />
    </Link>
  );
};

export default LogoLink;