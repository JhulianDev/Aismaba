import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { colores } from '../../../assets/css/Colors';

export const HeaderContainer = styled.header`
  background-color: ${colores.colorPrincipal};
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10%;
  position: absolute;
  z-index: 10;

  @media screen and (max-width: 1024px){
    padding: 0 8%;
  }

  @media screen and (max-width: 768px){
    flex-wrap: wrap;
    padding: 0;
  }
`;

export const LogoContainer = styled(Link)`
  display: flex;
`;

export const LogoImage = styled.img`
  width: 30px;

  @media screen and (max-width: 768px){
    display: none;
  }
`;

export const HeaderNav = styled.nav`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px){
    width: 100vw;
    height: 0;
    opacity: 0;
    overflow: hidden;
    transition: all 0.5s ease;
    background-color: ${colores.colorPrincipal};
    ${props => props.open && css`
      height: 100vh;
      opacity: 1;
    `}
  }
`;

export const HeaderUl = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.875rem;

  @media screen and (max-width: 768px){
    flex-direction: column;
    gap: 3.75rem;
  }
`;

export const HeaderLi = styled.li`
  font-family: NewYork;
  font-size: 17.6px;
  letter-spacing: 0.25rem;
`;

export const HeaderLink = styled(Link)`
  color: var(--color-blanco);
`;

export const CartContainer = styled(Link)`
  display: flex;
`;

export const CartIcon = styled.img`
  width: 30px;

  @media screen and (max-width: 768px){
    display: none;
  }
`;