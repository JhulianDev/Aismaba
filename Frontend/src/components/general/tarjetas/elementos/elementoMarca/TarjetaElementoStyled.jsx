import styled, { css } from "styled-components"
import { colores } from "../../../../../assets/css/Colors"

const elementoAStyles = css`
  width: 23.5%;

  @media screen and (max-width: 768px){
    width: 100%;
    margin-top: 18px;
  }
`

const elementoBStyles = css`
  width: 49%;
  margin-top: 25px;
  padding-top: 25px;

  @media screen and (max-width: 1440px){
    margin-top: 18px;
  }

  @media screen and (max-width: 768px){
    width: 100%;
    padding-top: 40px;
  }
`

const elementoCStyles = css`
  width: 100%;
  margin-top: 25px;

  @media screen and (max-width: 1440px){
    margin-top: 18px;
  }

  @media screen and (max-width: 768px){
    width: 100%;
    padding: 45px 0 15px;
  }
`

const getStylesBasedOnType = (type) => {
  switch (type) {
    case "A":
      return elementoAStyles;
    case "B":
      return elementoBStyles;
    case "C":
      return elementoCStyles;
    default:
      return null;
  }
};

export const MarcaBoxElemento = styled.div`
  ${({ $type }) => getStylesBasedOnType($type)}
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 2px ${colores.colorAcento};
  position: relative;
`

export const ElementoImg = styled.img`
  width: 100%;
`
export const ElementoNombre = styled.span`
  font-family: Titulo;
  color: ${colores.colorAcento};
  font-size: .9rem;
  font-weight: 600;
  letter-spacing: 0.1rem;
  text-align: center;
  position: absolute;
  top: 20px;

  @media screen and (max-width: 1024px){
    font-size: .8rem;
  }

  @media screen and (max-width: 768px){
    font-size: 1rem;
    top: 30px;
  }
`