import styled from "styled-components";
import { Link } from "react-router-dom"
import { coloresV2 } from "../../../assets/css/Colors";
import { fonts } from "../../../assets/fonts/FontsHandler";

export const Title = styled.h1`
  font-family: ${fonts.MainTypography};
  font-size: ${(props) => props.$error ? "4rem" : "6rem"};
  letter-spacing: 7px;
  font-weight: 100;
  text-align: center;
  margin-top: 60px;

  @media screen and (max-width: 1535px){
    font-size: ${(props) => props.$error ? "3rem" : "6rem"};
  }

  @media screen and (max-width: 1024px){
    font-size: ${(props) => props.$error ? "2rem" : "6rem"};
    font-weight: ${(props) => props.$error ? "bold" : "100"};
  }

  @media screen and (max-width: 768px){
    font-size: ${(props) => props.$error ? "2rem" : "4rem"};
    font-weight: bold;
  }

  @media screen and (max-width: 596px){
    font-size: ${(props) => props.$error ? "2rem" : "3.1rem"};
  }
`

export const Description = styled.p`
  font-family: ${fonts.SecondaryTypography};
  font-size: 2.2rem;
  font-weight: 100;
  text-align: center;
  margin-top: 10px;

  @media screen and (max-width: 1535px){
    font-size: 1.8rem;
  }

  @media screen and (max-width: 1024px){
    font-size: 1.6rem;
  }

  @media screen and (max-width: 768px){
    margin-top: ${(props) => props.$error ? "-10px" : "-23px"};
  }

  @media screen and (max-width: 596px){
    font-size: 1.4rem;
  }
`

export const BoxButtons = styled.div`
  display: flex;
  margin-top: 20px;
  gap: 20px;

  @media screen and (max-width: 1024px){
    flex-direction: column;
  }

  @media screen and (max-width: 768px){
    margin-top: -15px;
    gap: 10px;
  }
`

export const ButtonLink = styled(Link)`
  background-color: ${(props) => props.$shop ? `${coloresV2.colorTextos}` : `${coloresV2.colorPrincipal}`};
  color: ${(props) => props.$shop ? `${coloresV2.colorSecundario}` : `${coloresV2.colorTextos}`};
  font-family: ${fonts.SecondaryTypography};
  font-size: 1.4rem;
  text-align: center;
  border: 1px solid ${coloresV2.colorTextos};
  padding: 12px 20px 10px;
  border-radius: 100px;
  cursor: pointer;
  transition: all .1s ease;

  &:hover{
    background-color: ${(props) => props.$shop ? `white` : `${coloresV2.colorTextos}`};
    color: ${(props) => props.$shop ? `${coloresV2.colorTextos}` : `${coloresV2.colorSecundario}`};
  }

  &:active{
    transform: scale(.97); 
  }

  @media screen and (max-width: 768px){
    
  }
`