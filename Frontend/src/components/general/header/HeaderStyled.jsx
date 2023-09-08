import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { colores } from '../../../assets/css/Colors';

export const HeaderContainer = styled.header`
  background-color: ${props => props.$scrolling ? colores.colorPrincipal : props.$backgroundColor};
  width: 100%;
  height: 60px;
  padding: 0 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 10;
  transition: background-color 0.5s ease;

  @media screen and (max-width: 768px){
    padding: 0 20px;
  }
`

export const HeaderBox = styled.div`
  height: 100%;
  width: 100%;
  max-width: 1400px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const LogoContainer = styled(Link)`
  display: flex;

  @media screen and (max-width: 850px){
    display: none;
  }
`

export const LogoImage = styled.img`
  width: 30px;
`

export const BoxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`

export const HeaderNav = styled.nav`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media screen and (max-width: 1110px){
    position: static;
    transform: none;
  }

  @media screen and (max-width: 850px){
    background-color: ${colores.colorPrincipal};
    position: absolute;
    width: 100vw;
    left: 0px;
    right: 0px;
    top: 0px;
    height: 0;
    opacity: 0;
    overflow: hidden;
    transition: all 0.5s ease;
    ${props => props.open && css`
      height: 100vh;
      opacity: 1;
    `}
  }
`

export const HeaderUl = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.875rem;
  list-style: none;

  @media screen and (max-width: 850px){
    flex-direction: column;
    gap: 3.75rem;
  }
`

export const HeaderLi = styled.li`
  font-family: Nunito;
  font-size: 1.1rem;
`;

export const HeaderLink = styled(Link)`
  color: ${colores.colorBlanco};
`;

const buttonTypeA = css`
  background-color: white;
  color: ${colores.colorAcento};

  &:hover{
    background-color: ${colores.colorAcento};
    color: white;
  }
`

const buttonTypeB = css`
  background-color: transparent;
  color: white;
  border: solid 1px white;

  &:hover{
    background-color: ${colores.colorAcento};
    color: white;
    border: solid 1px transparent;
  }
`

export const HeaderButton = styled(Link)`
  ${({ $type }) => ($type === 'B' ? buttonTypeB : buttonTypeA)}
  font-family: "Nunito";
  font-size: .9rem;
  padding: 5px 15px;
  border-radius: 100px;

  @media screen and (max-width: 850px){
    display: none;
  }
`

export const Span = styled.span`
  background-color: white;
  height: 30px;
  width: 2px;

  @media screen and (max-width: 850px){
    display: none;
  }
`

export const CartContainer = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 20;
`

export const CartIcon = styled.img`
  width: 30px;
`

export const BoxCounter = styled.div`
  background-color: ${colores.colorPrincipal};
  width: 16px;
  height: 16px;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: -3px;
  bottom: -3px;
`

export const ProductCounter = styled.span`
  display: flex;
  color: white;
  font-size: .9rem;
  margin-top: 2px;
`