import styled from "styled-components";
import { fonts } from "../../../../assets/fonts/FontsHandler";
import { coloresV2 } from "../../../../assets/css/Colors";

export const BoxTextos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${coloresV2.colorTextos};
  max-width: 540px;
  margin-top: 30px;
  gap: 10px;

  @media screen and (max-width: 1535px){
    max-width: 425px;
  }

  @media screen and (max-width: 1232px){
    max-width: 345px;
  }

  @media screen and (max-width: 1024px){
    max-width: 305px;
  }

  @media screen and (max-width: 768px){
    max-width: 425px;
    margin-top: 0;
    order: 2;
  }

  @media screen and (max-width: 596px){
    max-width: 368px;
  }

  @media screen and (max-width: 425px){
    max-width: 340px;
  }
`

export const Titulo = styled.h1`
  background-color: ${coloresV2.colorPrincipal};
  padding:5px 20px 2px;
  border-radius: 7px;
  border: 1px solid ${coloresV2.colorTextos};
  font-family: ${fonts.MainTypography};
  font-size: 2.2rem;
  display: ${(props) => props.$mobile ? "none" : "flex"};
  box-shadow:
  0px 0px 0.4px rgba(0, 0, 0, 0.081),
  0px 0px 1.3px rgba(0, 0, 0, 0.119),
  0px 0px 6px rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 1535px){
    font-size: 1.9rem;
  }

  @media screen and (max-width: 1232px){
    font-size: 1.7rem;
  }

  @media screen and (max-width: 768px){
    font-size: 2.4rem;
    display: ${(props) => props.$mobile ? "flex" : "none"};
    margin-bottom: 30px;
  }
`

export const Subtitulo = styled.h2`
  font-family: ${fonts.MainTypography};
  font-size: 4.1rem;

  @media screen and (max-width: 1535px){
    font-size: 3.2rem;
  }

  @media screen and (max-width: 1232px){
    font-size: 2.6rem;
  }

  @media screen and (max-width: 1024px){
    font-size: 2.3rem;
  }

  @media screen and (max-width: 768px){
    font-size: 3.2rem;
  }

  @media screen and (max-width: 596px){
    font-size: 2.8rem;
  }

  @media screen and (max-width: 425px){
    font-size: 2.5rem;
  }

  @media screen and (max-width: 375px){
    font-size: 2rem;
  }
`

export const Descripcion = styled.p`
  font-family: ${fonts.SecondaryTypography}; 
  font-size: 1.6rem;
  margin-top: -15px;
  text-wrap: pretty;

  @media screen and (max-width: 1535px){
    font-size: 1.3rem;
  }

  @media screen and (max-width: 1232px){
    font-size: 1rem;
  }

  @media screen and (max-width: 1024px){
    font-size: .9rem;
  }

  @media screen and (max-width: 768px){
    font-size: 1.3rem;
    margin-top: -10px;
  }

  @media screen and (max-width: 596px){
    font-size: 1.2rem;
  }

  @media screen and (max-width: 425px){
    font-size: 1.3rem;
  }

  @media screen and (max-width: 375px){
    font-size: 1rem;
  }
`

export const Button = styled.button`
  background-color: ${coloresV2.colorTextos};
  font-family: ${fonts.MainTypography};
  font-size: 1.6rem;
  color: white;
  padding: 9px 30px 7px;
  border-radius: 100px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover{
    background-color: white;
    color: ${coloresV2.colorTextos};
    border: 1px solid ${coloresV2.colorTextos};
    box-shadow:
    0px 0px 0.4px rgba(0, 0, 0, 0.081),
    0px 0px 1.3px rgba(0, 0, 0, 0.119),
    0px 0px 6px rgba(0, 0, 0, 0.2);
  }

  &:active{
    background-color: ${coloresV2.colorPrincipal};
  }

  @media screen and (max-width: 1535px){
    font-size: 1.5rem;
  }

  @media screen and (max-width: 1232px){
    font-size: 1.4rem;
  }

  @media screen and (max-width: 768px){
    font-size: 1.6rem;
    margin-top: 10px;
  }
`

export const Imagen = styled.img`
  width: 55%;
  margin-top: 60px;

  @media screen and (max-width: 1024px){
    width: 50%;
  }

  @media screen and (max-width: 768px){
    width: 100%;
    order: 1;
    margin: 0 0 20px;
  }
`