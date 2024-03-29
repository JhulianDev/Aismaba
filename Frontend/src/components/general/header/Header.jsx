import { useContext, useEffect, useState } from "react";
import { Outlet, useNavigate } from 'react-router-dom';
import Swal from "sweetalert2"
import { UserContext } from "../../../context/UserContext";
import HamburgerButton from "../Buttons/hamburger/HamburgerButton";
import { CARRITO_ICONO, ISOTIPO_BLANCO } from "../../../assets/img/images";
import { BoxContainer, BoxCounter, BoxLinkMobile, CartContainer, CartIcon, HeaderBox, HeaderButton, HeaderContainer, HeaderLi, HeaderLink, HeaderLinkMobile, HeaderNav, HeaderUl, LogoContainer, LogoImage, ProductCounter, Span } from "./HeaderStyled";
import { deleteToken } from "../../../helpers/token";
import { CartContext } from "../../../context/CartContext";
import { colores } from "../../../assets/css/Colors";

const Header = ({ color }) => {
  const { userData, setUserData } = useContext(UserContext)
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

    deleteToken()
    setUserData(null)
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

          <LogoContainer>
            <LogoImage src={ISOTIPO_BLANCO} alt="Isotipo de Aismaba" />
          </LogoContainer>

          <BoxContainer>
            <HeaderNav open={open}>
              <HeaderUl>
                <HeaderLi><HeaderLink onClick={handleNav} to="/">Inicio</HeaderLink></HeaderLi>
                <HeaderLi><HeaderLink onClick={handleNav} to="/servicios">Servicios</HeaderLink></HeaderLi>
                <HeaderLi><HeaderLink onClick={handleNav} to="/Tienda">Tienda</HeaderLink></HeaderLi>
                <HeaderLi><HeaderLink onClick={handleNav} to="/Contacto" $border="none">Contacto</HeaderLink></HeaderLi>

                <BoxLinkMobile>
                  {!userData ? (
                    <>
                      <HeaderLi><HeaderLinkMobile onClick={handleNav} to="/login" $bgColor="white" $colorText={colores.colorAcento}>Iniciar Sesión</HeaderLinkMobile></HeaderLi>
                      <HeaderLi><HeaderLinkMobile onClick={handleNav} to="/sign-up" $bgColor={colores.colorAcento}>Registrarse</HeaderLinkMobile></HeaderLi>
                    </>
                  ) :
                    <>
                      <HeaderLi><HeaderLinkMobile onClick={handleNav} to="/mis-compras" $bgColor="white" $colorText={colores.colorAcento}>Mis compras</HeaderLinkMobile></HeaderLi>
                      <HeaderLi><HeaderLinkMobile onClick={() => { handleSession() }} $bgColor={colores.colorAcento}>Cerrar Sesión</HeaderLinkMobile></HeaderLi>
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
                <ProductCounter>{state.cart.length}</ProductCounter>
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