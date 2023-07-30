import styled from "styled-components"
import { colores } from "../../../assets/css/Colors"

export const InfoPasoBox = styled.div`
  max-width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  @media screen and (max-width: 768px){
    max-width: 500px;
  }
`

export const InfoPasoIcono = styled.img`
  width: 80px;
  filter: invert(66%) sepia(3%) saturate(4484%) hue-rotate(349deg)
  brightness(100%) contrast(74%);

  @media screen and (max-width: 768px){
    width: 100px;
  }
`

export const InfoPasoTitulo = styled.h2`
  font-family: Roboto;
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
  color: ${colores.colorPrincipal};
  margin: 10px 0;
`

export const InfoPasoParrafo = styled.p`
  font-family: Roboto;
  font-size: 1rem;
  line-height: 1.4rem;
  text-align: justify;
  color: ${colores.colorTexto};
  height: 110px;

  @media screen and (max-width: 768px){
    height: auto;
    font-size: 1.2rem;
    text-align: center;
  }
`