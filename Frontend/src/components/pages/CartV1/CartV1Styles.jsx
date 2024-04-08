import styled from "styled-components";
import { fonts } from "../../../assets/fonts/FontsHandler";
import { coloresV2 } from "../../../assets/css/Colors";

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

export const BoxIcon = styled.span`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: transparent;
  padding: 10px;
`

export const DeleteIcon = styled.img`
  height: 30px;
  display: flex;
  cursor: pointer;
  grid-column: 4;

  @media screen and (max-width: 768px){
    height: 25px;
  }
`