import styled from "styled-components";
import { fonts } from "../../../../assets/fonts/FontsHandler";
import { coloresV2 } from "../../../../assets/css/Colors";

export const Title = styled.h1`
  width: 100%;
  font-family: ${fonts.MainTypography};
  font-size: 2.4rem;
  text-align: center;
  color: ${coloresV2.colorTextos};
  margin-top: -20px;
  margin-bottom: 10px;

  @media screen and (max-width: 768px){
    margin-top: -10px;
    font-size: 2.2rem;
  }

  @media screen and (max-width: 425px){
    font-size: 2rem;
  }
`

export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
`

export const BoxItem = styled.div`
  background-color: ${coloresV2.colorSecundario};
  display: flex;
  flex-direction: column;
  border: 1px solid ${coloresV2.colorTextos};
  border-radius: 7px;
  width: 680px;
  width: 100%;
  overflow: hidden;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
`

export const ArrowIcon = styled.img`
  display: ${(props) => props.$open ? "none" : "flex"};
  width: 20px;
`

export const BoxHeader = styled.div`
  background-color: ${(props) =>
    props.$open ? `${coloresV2.colorTextos}` :
    props.$bgColor === `${coloresV2.colorPrincipal}` ? coloresV2.colorSecundario :
    props.$bgColor === `${coloresV2.colorSecundario}` ? coloresV2.colorPrincipal :
    "none"};
  color: ${(props) => props.$open && "white"};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 30px;
  cursor: pointer;
  transition: all 0.4s ease;

  &:hover{
    background-color:${coloresV2.colorTextos};
    color: white;

    & ${ArrowIcon} {
      filter: invert(100%) sepia(100%) saturate(2%) hue-rotate(334deg) brightness(102%) contrast(100%);
    }
  }
`

export const Question = styled.h2`
  font-family: ${fonts.SecondaryTypography};
  font-size: 1.2rem;
  font-weight: 100;
  margin-bottom: -3px;
  margin-right: 10px;
`

export const MinimizeIcon = styled.img`
  display: ${(props) => props.$open ? "flex" : "none"};
  width: 20px;
  filter: ${(props) => props.$open && "invert(100%) sepia(100%) saturate(2%) hue-rotate(334deg) brightness(102%) contrast(100%)"};
`

export const Answer = styled.p`
  font-family: ${fonts.SecondaryTypography};
  text-align: justify;
  font-size: 1.2rem;
  color: ${coloresV2.colorTextos};
  width: 96%;
  padding: ${(props) => props.$open ? "15px 30px": "0 30px"};
  height: ${(props) => props.$open ? "auto" : "0"};
  transition: all 0.4s ease;
`