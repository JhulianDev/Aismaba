import styled, { css } from "styled-components";
import { Link } from "react-router-dom"
import { fonts } from "../../../assets/fonts/FontsHandler";
import { coloresV2 } from "../../../assets/css/Colors";

const stylesButton = css`
  font-family: ${fonts.MainTypography};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 1.2rem;
  font-weight: bold;
  letter-spacing: 1px;
  border: 1px solid ${coloresV2.colorTextos};
  padding: 10px 20px;
  border-radius: 7px;
  transition: all .2s ease-out;
  position: relative;
`

export const Title = styled.h1`
  font-family: ${fonts.SecondaryTypography};
  font-size: 1.8rem;
  font-weight: 100;
  margin-top: 7px;
  text-align: center;
  margin-top: 60px;

  @media screen and (max-width: 768px){
    font-size: 1.7rem;
    margin: 30px 0 -25px 0;
  }

  @media screen and (max-width: 596px){
    font-size: 1.6rem
  }

  @media screen and (max-width: 425px){
    font-size: 1.4rem
  }
`

export const ContainerTable = styled.div`
  background-color: ${coloresV2.colorSecundario};
  border: solid 2px ${coloresV2.colorTextos};
  width: 100%;
  border-width: 1px 1px 0;
  margin-top: 30px;
  border-radius: 7px;
  overflow: hidden;

  @media screen and (max-width: 768px){
    margin-top: 0px;
  }
`

export const TableHeader = styled.div`
  background-color: ${coloresV2.colorPrincipal};
  color: ${coloresV2.colorTextos};
  width: 100%;
  display: grid;
  grid-template-columns: 15% 50% 25% 10%;
  align-items: center;
  justify-content: space-between;
  font-family: ${fonts.SecondaryTypography};
  font-size: 1.4rem;
  border-bottom: solid 1px ${coloresV2.colorTextos};
`

export const Product = styled.span`
  display: flex;
  height: 100%;
  grid-column: 2;
  border-left: solid 1px ${coloresV2.colorTextos};
  padding: 10px;
`

export const Price = styled.span`
  grid-column: 3;
  border-left: solid 1px ${coloresV2.colorTextos};
  border-right: solid 1px ${coloresV2.colorTextos};
  padding: 10px;
`

export const ContainerProduct = styled.div`
  color: ${coloresV2.colorTextos};
  display: grid;
  grid-template-columns: 15% 50% 25% 10%;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid 1px ${coloresV2.colorTextos};
  font-family: ${fonts.SecondaryTypography};
  font-size: 1.2rem;
`

export const ProductImage = styled.img`
  width: 100%;
  grid-column: 1;
  padding: 10px;
`

export const ProductName = styled.span`
  width: 100%;
  height: 100%;
  grid-column: 2;
  display: flex;
  align-items: center;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 10px;
  border-left: 1px solid ${coloresV2.colorTextos};
`

export const ProductPrice = styled.span`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  grid-column: 3;
  padding: 10px;
  border-left: 1px solid ${coloresV2.colorTextos};
  border-right: 1px solid ${coloresV2.colorTextos};
`

export const DeleteIcon = styled.img`
  height: 25px;
  display: flex;
  grid-column: 4;
  transition: all .2s ease-out;
`

export const BoxIcon = styled.button`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding: 10px;
  transition: all .2s ease-out;

  &:hover{
    background-color: ${coloresV2.colorPrincipal};
  }

  &:hover ${DeleteIcon}{
    transform: scale(1.15);
  }
`

export const ButtonIcon = styled.img`
  width: 20px;
  position: absolute;
  right: 20px;
  filter: ${(props) => props.$typeA && "invert(99%) sepia(3%) saturate(122%) hue-rotate(335deg) brightness(115%) contrast(100%)"};
  transition: all .2s ease-out;
`

export const TableFooter = styled.div`
  background-color: ${coloresV2.colorPrincipal};
  color: ${coloresV2.colorTextos};
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 15% 50% 25% 10%;
  align-items: center;
  justify-content: space-between;
  font-family: ${fonts.SecondaryTypography};
  font-size: 1.4rem;
  border-bottom: solid 1px ${coloresV2.colorTextos};

  @media screen and (max-width: 768px){
    font-size: 1.3rem;
  }
`

export const Total = styled.span`
  grid-column:1/3;
  padding: 10px;
  font-weight: bold;
`

export const TotalPrice = styled.span`
  height: 100%;
  display: flex;
  align-items: center;
  grid-column:3/4;
  padding: 10px;
  border-left: solid 1px ${coloresV2.colorTextos};
`

export const PurchaseButton = styled.button`
  ${stylesButton}
  background-color: ${coloresV2.colorTextos};
  color: white;
  margin-top: 20px;

  &:hover{
    background-color: ${coloresV2.colorPrincipal};
    color: ${coloresV2.colorTextos};
  }

  &:hover ${ButtonIcon} {
    filter: invert(14%) sepia(11%) saturate(8%) hue-rotate(3deg) brightness(104%) contrast(90%);
  }

  @media screen and (max-width: 768px){
    margin-top: -10px;
  }
`

export const LinkButton = styled(Link)`
  ${stylesButton}
  width: ${(props) => props.$typeB ? "auto" : "100%"};
  color: ${coloresV2.colorTextos};
  margin-top: 10px;

  &:hover{
    background-color: ${coloresV2.colorPrincipal};
  }

  @media screen and (max-width: 768px){
    margin-top: ${(props) => props.$typeB ? "5px" : "-20px"};
  }
`