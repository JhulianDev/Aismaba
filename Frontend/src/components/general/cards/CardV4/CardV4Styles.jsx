import styled, { css } from "styled-components";
import { Link } from "react-router-dom"
import { coloresV2 } from "../../../../assets/css/Colors";
import { fonts } from "../../../../assets/fonts/FontsHandler";

export const CardContainer = styled.div`
  background-color: ${coloresV2.colorSecundario};
  border: 1px solid ${coloresV2.colorTextos};
  max-width: 340px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 17px rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  overflow: hidden;

  @media screen and (max-width: 596px){
    max-width: 100%;
  }
`

export const BoxImage = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid ${coloresV2.colorTextos};
`

export const Image = styled.img`
  width: 100%;
`

export const FooterCard = styled.div`
  width: 100%;
  padding: 17px;
`

export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
`

export const ButtonAddToCart = styled.button`
  display: flex;
  cursor: pointer;
  background-color: transparent;
  border: none;
`

export const CartIcon = styled.img`
  width: 26px;
  opacity: .6;
  transition: all .3s ease;

  ${ButtonAddToCart}:hover & {
    opacity: 1;
  }

  @media screen and (max-width: 1535px){
    width: 23px;
  }

  @media screen and (max-width: 596px){
    width: 26px;
  }
`

export const ToolTip = styled.span`
  background-color: ${coloresV2.colorTextos};
  color: ${coloresV2.colorSecundario};
  width: 80%;
  height: 40px;
  border-radius: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: ${fonts.SecondaryTypography};
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: -45px;
  opacity: 0;
  visibility: hidden;
  transition: all .3s ease;

  ${ButtonAddToCart}:hover & {
    opacity: 1;
    visibility: visible;
  }
`

export const BoxPrice = styled.div`
  background-color: ${coloresV2.colorPrincipal};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  width: fit-content;
  height: fit-content;
  padding: 7px 12px;
  gap: 2px;
  grid-column: 2;
`

export const Price = styled.span`
  font-family: ${fonts.MainTypography};
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  white-space: nowrap;

  @media screen and (max-width: 1535px){
    font-size: 1rem;
  }

  @media screen and (max-width: 768px){
    font-size: 1.2rem;
  }
`

export const Title = styled.h1`
  font-family: ${fonts.MainTypography};
  font-size: 1.7rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  margin-top: 6px;

  @media screen and (max-width: 1535px){
    font-size: 1.5rem;
    margin-top: 5px;
  }

  @media screen and (max-width: 1232px){
    font-size: 1.4rem;
  }

  @media screen and (max-width: 768px){
    font-size: 1.5rem;
    margin-top: 7px;
  }

  @media screen and (max-width: 596px){
    font-size: 1.8rem;
  }
`

export const Description = styled.p`
  font-family: ${fonts.SecondaryTypography};
  font-size: 1.2rem;
  margin-top: 2px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  @media screen and (max-width: 1535px){
    font-size: 1rem;
  }

  @media screen and (max-width: 596px){
    font-size: 1.2rem;
  }
`

export const ButtonViewProduct = styled(Link)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: ${fonts.MainTypography};
  font-weight: bold;
  font-size: 1.2rem;
  padding: 10px;
  border-radius: 7px;
  background-color: ${coloresV2.colorPrincipal};
  color: ${coloresV2.colorTextos};
  border: 1px solid ${coloresV2.colorTextos};
  margin-top: 7px;
  transition: all .2s ease;

  &:hover{
    background-color: ${coloresV2.colorTextos};
    color: ${coloresV2.colorSecundario};
  }

  @media screen and (max-width: 1535px){
    font-size: 1.1rem;
    margin-top: 5px;
  }
`