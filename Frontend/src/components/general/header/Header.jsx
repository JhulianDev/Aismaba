import { useState } from "react";
import { CARRITO_ICONO, ISOTIPO_BLANCO } from "../../../assets/img/images";
import HamburgerButton from "../Buttons/hamburger/HamburgerButton";
import { CartContainer, CartIcon, HeaderContainer, HeaderLi, HeaderLink, HeaderNav, HeaderUl, LogoContainer, LogoImage } from "./HeaderStyled";

const Header = () => {
  const [open, setOpen] = useState(false);
  const handleNav = () => {
    setOpen(!open);
  };

  return (
    <HeaderContainer>

      <LogoContainer>
        <LogoImage src={ISOTIPO_BLANCO} alt="Isotipo de Aismaba" />
      </LogoContainer>

      <HamburgerButton open={open} handleNav={handleNav} />

      <HeaderNav open={open} >
        <HeaderUl>
          <HeaderLi><HeaderLink to="/" onClick={handleNav}>Inicio</HeaderLink></HeaderLi>
          <HeaderLi><HeaderLink to="/servicios" onClick={handleNav}>Servicios</HeaderLink></HeaderLi>
          <HeaderLi><HeaderLink to="/Tienda" onClick={handleNav}>Tienda</HeaderLink></HeaderLi>
          <HeaderLi><HeaderLink to="/Contacto" onClick={handleNav}>Contacto</HeaderLink></HeaderLi>
        </HeaderUl>
      </HeaderNav>

      <CartContainer>
        <CartIcon src={CARRITO_ICONO} alt="Icono de carrito de compras" />
      </CartContainer>

    </HeaderContainer>
  );
};

export default Header;