import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { colores, coloresV2 } from '../../../assets/css/Colors';
import { fonts } from '../../../assets/fonts/FontsHandler';

const linkStyle = css`
  color: ${props => props.$colorText || 'white'};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 1024px){
    padding: 20px 0;
    border-bottom: ${props => (props.$border === 'none' ? 'none' : '1px solid #ffffff84')};
  }
`

export const HeaderContainer = styled.header`
  background-color: ${props => props.$scrolling ? colores.colorPrincipal : props.$backgroundColor};
  border-bottom: 1px solid ${coloresV2.colorTextos};
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
    padding: 0 30px;
  }

  @media screen and (max-width: 596px){
    padding: 0 20px;
  }
`

export const HeaderBox = styled.div`
  height: 100%;
  width: 100%;
  max-width: 1416px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 1535px){
    max-width: 1112px;
  }

  @media screen and (max-width: 1232px){
    max-width: 904px;
  }

  @media screen and (max-width: 1024px){
    max-width: 648px;
  }

  @media screen and (max-width: 768px){
    max-width: 536px;
  }
`

export const LogoContainer = styled(Link)`
  display: flex;

  @media screen and (max-width: 1024px){
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

  @media screen and (max-width: 1232px){
    position: static;
    transform: none;
  }

  @media screen and (max-width: 1024px){
    background-color: ${coloresV2.colorPrincipal};
    position: absolute;
    width: 0;
    left: 0px;
    right: 0px;
    top: 0px;
    opacity: 0;
    height: 0;
    overflow: hidden;
    transition: all 0.5s ease;
    ${props => props.open && css`
      height: 100vh;
      width: 100vw;
      opacity: 1;
    `}
  }
`

export const HeaderUl = styled.ul`
  width: 85%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.875rem;
  list-style: none;

  @media screen and (max-width: 1024px){
    flex-direction: column;
    gap: 0;
  }
`

export const HeaderLi = styled.li`
  width: 100%;
  font-family: ${fonts.SecondaryTypography};
  font-size: 1.1rem;
  text-align: center;
`

export const HeaderLink = styled(Link)`
  color: ${props => props.$colorText || coloresV2.colorTextos};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 1024px){
    padding: 20px 0;
    border-bottom: ${props => (props.$border === 'none' ? 'none' : `1px solid ${coloresV2.colorTextos}`)};
  }
`;

export const BoxLinkMobile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 15px;
`

export const HeaderLinkMobile = styled(Link)`
  ${linkStyle}
  background-color: ${props => props.$bgColor || 'transparent'};
  display: none;

  @media screen and (max-width: 1024px){
    padding: 10px 0;
    border-bottom: none;
    border-radius: 20px;
    display: block;
  }
`

const buttonTypeA = css`
  background-color: white;
  color: ${coloresV2.colorTextos};

  &:hover{
    background-color: ${coloresV2.colorTextos};
    color: white;
  }
`

const buttonTypeB = css`
  background-color: transparent;
  color: ${coloresV2.colorTextos};
  border: solid 1px ${coloresV2.colorTextos};

  &:hover{
    background-color: ${coloresV2.colorTextos};
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
  transition: all .3s ease;

  @media screen and (max-width: 1024px){
    display: none;
  }
`

export const Span = styled.span`
  background-color: ${coloresV2.colorTextos};
  height: 30px;
  width: 2px;

  @media screen and (max-width: 1024px){
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
  filter: invert(80%);
`

export const BoxCounter = styled.div`
  background-color: white;
  border: 1px solid ${coloresV2.colorTextos};
  width: 18px;
  height: 18px;
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
  color: ${coloresV2.colorTextos};
  font-family: Nunito, sans-serif;
  font-size: .9rem;
  line-height: 12px;

  @media screen and (max-width: 1440px){
    margin-top: 3px;
  }
`