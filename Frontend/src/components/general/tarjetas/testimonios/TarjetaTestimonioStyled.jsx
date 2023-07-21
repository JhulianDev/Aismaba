import styled, { css } from "styled-components"
import { colores } from "../../../../assets/css/Colors"

const styledComillas = css`
  width: 2.1875rem;
  margin-bottom: .5rem;
  filter: 
  invert(54%) sepia(16%) 
  saturate(1104%) hue-rotate(341deg)
  brightness(85%) contrast(84%);
`

export const TestimonioBox = styled.div`
  background-color: ${colores.colorFondo};
  width: 500px;
  color: ${colores.colorAcento};
  padding: 30px 40px;
  margin-top: 60px;
  border-radius: 10px;
  box-shadow: 15px 15px 20px #0000001a;

  @media screen and (max-width: 1440px){
    width: 450px;
    margin-top: 60px;
  }

  @media screen and (max-width: 1024px){
    width: 300px;
    margin-top: 40px;
  }
`

export const TestimonioComillasPequeñas = styled.img`
  ${styledComillas};
`

export const TestimonioParrafo = styled.p`
  height: 170px;
  overflow: hidden;
  margin: 0;
  font-family: Roboto;
  line-height: 22.4px;
  letter-spacing: .0625rem;
  text-align: justify;
  font-style: italic;

  @media screen and (max-width: 1440px){
    height: 165px;
    font-size: 14.4px;
    line-height: 20.8px;
  }

  @media screen and (max-width: 1024px){
    height: 220px;
    font-size: 12.8px;
    line-height: 19.2px;
  }
`

export const TestimonioBoxIdentificador = styled.div`
  display: flex;
  align-items: center;
`

export const TestimonioLogo = styled.img`
  width: 70px;
  border-radius: 50%;
  border: solid .125rem ${colores.colorAcento};
  margin-right: 1.25rem;

  @media screen and (max-width: 1024px){
    width: 50px;
  }
`

export const TestimonioBoxDatos = styled.div`
  width: 80%;
`

export const TestimonioMarca = styled.h2`
  font-family: Cinzel;
  font-size: 16px;
  letter-spacing: .1875rem;

  @media screen and (max-width: 1024px){
    font-size: 12.8px;
  }
`

export const TestimonioRubro = styled.h2`
  font-family: Roboto;
  font-size: 12.8px;
  font-weight: 400;
  letter-spacing: .125rem;
  margin-top: .25rem;

  @media screen and (max-width: 1024px){
    font-size: 9.6px;
  }
`

export const TestimonioComillasGrandes = styled.img`
  ${styledComillas};
  width: 80px;
  opacity: 0.2;

  @media screen and (max-width: 1024px){
    width: 50px;
  }

  @media screen and (max-width: 425px){
    width: 40px;
  }
`