import { useContext, useEffect, useState } from "react";
import { Outlet, useNavigate } from 'react-router-dom';
import Swal from "sweetalert2"
import { UserContext } from "../../../context/UserContext";
import HamburgerButton from "../Buttons/hamburger/HamburgerButton";
import { CARRITO_ICONO } from "../../../assets/img/images";
import { BoxContainer, BoxCounter, BoxLinkMobile, CartContainer, CartIcon, HeaderBox, HeaderButton, HeaderContainer, HeaderLi, HeaderLink, HeaderLinkMobile, HeaderNav, HeaderUl, LogoContainer, LogoImage, ProductCounter, Span } from "./HeaderStyled";
import { deleteToken } from "../../../helpers/token";
import { CartContext } from "../../../context/CartContext";
import { coloresV2 } from "../../../assets/css/Colors";
import ISOTIPO_GRIS from "../../../assets/img/generales/isotipo_gris.svg"
import useUserStore from "../../../stores/useUserStore";
import useCartStore from "../../../stores/useCartStore";

const Header = ({ color }) => {
  const { userData, deleteUserData, deleteUserToken } = useUserStore();
  const { totalItems } = useCartStore();
  const { state } = useContext(CartContext)
  const [scrolling, setScrolling] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleNav = () => {
    setOpen(!open);
  };

  const handleSession = () => {
    Swal.fire({
      icon: "success",
      title: "Hasta Luego",
      text: "¡Vuelve Pronto!",
      showConfirmButton: false,
      timer: 1600
    })

    deleteUserToken()
    deleteUserData()
    setOpen(!open)
    navigate("/")
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <HeaderContainer $scrolling={scrolling} $backgroundColor={color}>
        <HeaderBox>

          <HamburgerButton open={open} handleNav={handleNav} />

          <LogoContainer to="/">
            <LogoImage src={ISOTIPO_GRIS} alt="Isotipo de Aismaba" />
          </LogoContainer>

          <BoxContainer>
            <HeaderNav open={open}>
              <HeaderUl>
                <HeaderLi><HeaderLink onClick={handleNav} to="/">Inicio</HeaderLink></HeaderLi>
                <HeaderLi><HeaderLink onClick={handleNav} to="/servicios">Servicios</HeaderLink></HeaderLi>
                <HeaderLi><HeaderLink onClick={handleNav} to="/Tienda">Tienda</HeaderLink></HeaderLi>
                <HeaderLi><HeaderLink onClick={handleNav} to="https://wa.link/cdi3nc" target="_blank" $border="none">Contacto</HeaderLink></HeaderLi>

                <BoxLinkMobile>
                  {!userData ? (
                    <>
                      <HeaderLi><HeaderLinkMobile onClick={handleNav} to="/login" $bgColor="white" $colorText={coloresV2.colorTextos}>Iniciar Sesión</HeaderLinkMobile></HeaderLi>
                      <HeaderLi><HeaderLinkMobile onClick={handleNav} to="/sign-up" $bgColor={coloresV2.colorTextos}>Registrarse</HeaderLinkMobile></HeaderLi>
                    </>
                  ) :
                    <>
                      <HeaderLi><HeaderLinkMobile onClick={handleNav} to="/mis-compras" $bgColor="white" $colorText={coloresV2.colorTextos}>Mis compras</HeaderLinkMobile></HeaderLi>
                      <HeaderLi><HeaderLinkMobile onClick={() => { handleSession() }} $bgColor={coloresV2.colorTextos}>Cerrar Sesión</HeaderLinkMobile></HeaderLi>
                    </>
                  }
                </BoxLinkMobile>
              </HeaderUl>
            </HeaderNav>

            {!userData ? (
              <>
                <HeaderButton $type="A" to="/login">Iniciar Sesión</HeaderButton>
                <HeaderButton $type="B" to="/sign-up">Registrarse</HeaderButton>
              </>
            ) :
              <>
                <HeaderButton $type="A" to="/mis-compras">Mis compras</HeaderButton>
                <HeaderButton $type="B" onClick={() => { handleSession() }}>Cerrar Sesión</HeaderButton>
              </>
            }

            <Span />

            <CartContainer to="/carrito">
              <CartIcon src={CARRITO_ICONO} alt="Icono de carrito de compras" />
              <BoxCounter>
                <ProductCounter>{totalItems()}</ProductCounter>
              </BoxCounter>
            </CartContainer>

          </BoxContainer>

        </HeaderBox>
      </HeaderContainer>

      <Outlet />
    </>
  );
};

export default Header;