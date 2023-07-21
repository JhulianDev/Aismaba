import styled from "styled-components"
import { colores } from "../../../../assets/css/Colors"

export const TestimoniosSection = styled.section`
  background-color: ${colores.colorSecundario};
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px 0;
  overflow: hidden;
`

export const TestimoniosDiv = styled.div`
  width: 1120px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${colores.colorBlanco};

  @media screen and (max-width: 1440px){
    width: 1024px;
  }

  @media screen and (max-width: 1024px){
    width: 768px;
  }
`

export const TestimoniosTitulo = styled.h1`
  font-family: Cinzel;
  font-size: 32px;
  letter-spacing: 4px;

  @media screen and (max-width: 1440px){
    font-size: 25.6px;
  }

  @media screen and (max-width: 1024px){
    font-size: 24px;
  }
`

export const TestimoniosFrase = styled.p`
  font-family: Roboto;
  font-size: 19.2px;
  font-weight: 400;
  letter-spacing: 4px;
  margin-top: 10px;

  @media screen and (max-width: 1440px){
    font-size: 12.8px;
  }

  @media screen and (max-width: 1024px){
    font-size: 11.2px;
  }
`

export const TestimoniosBoxTarjetas = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  @media screen and (max-width: 1024px){
    padding: 0 40px;
  }

  @media screen and (max-width: 730px){
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

