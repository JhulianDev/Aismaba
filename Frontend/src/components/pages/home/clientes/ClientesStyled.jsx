import styled, { keyframes } from "styled-components"
import { colores } from "../../../../assets/css/Colors"

const sliderAnimation = keyframes`
  0% {
    margin-left: 500%;
  }
  11% {
    margin-left: 500%;
  }
  22% {
    margin-left: 250%;
  }
  33% {
    margin-left: 250%;
  }
  44% {
    margin-left: 0%;
  }
  55% {
    margin-left: 0%;
  }
  66% {
    margin-left: -250%;
  }
  77% {
    margin-left: -250%;
  }
  88% {
    margin-left: -500%;
  }
  100% {
    margin-left: -500%;
  }
`

export const ClientesSection = styled.section`
  height: 50vh;
  background-image: url(../../../src/assets/img/generales/sombras-arbol.jpg);
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;

  @media screen and (max-width: 768px){
    height: 60vh;
  }
`

export const ClientesDiv = styled.div`
  background-color: rgba(240, 236, 231, 0.904);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`

export const ClientesTitulo = styled.h1`
  color: ${colores.colorTexto};
  font-family: Libre;
  font-size: 22px;
  font-weight: 100;
  font-style: italic;
  margin-top: 10px;
  margin-bottom: 20px;

  @media screen and (max-width: 1024px){
    font-size: 20px;
  }
`

export const ClientesSubtitulo = styled.h2`
  color: ${colores.colorPrincipal};
  font-family: Cinzel;
  font-size: 25.6px;
  letter-spacing: .6rem;
  margin: 0 20px 20px;
  text-align: center;

  @media screen and (max-width: 1024px){
    font-size: 22.4px;
  }

  @media screen and (max-width: 768px){
    font-size: 17.6px;
    margin-bottom: 0px;
  }
`

export const ClientesBoxSlider = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px){
    width: 200px;
    height: 200px;
    margin: 10px 0;
    overflow: hidden;
  }
`

export const ClientesSliderMovil = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 100px;

  @media screen and (max-width: 1024px){
    margin-bottom: 10px;
    gap: 50px;
  }

  @media screen and (max-width: 768px){
    margin-left: 500%;
    animation: ${sliderAnimation} 10s infinite;
  }
`

export const ClientesLogo = styled.img`
  width: 100px;

  @media screen and (max-width: 768px){
    width: 200px;
  }
`

export const Clientesh3 = styled.h3`
  color: ${colores.colorTexto};
  font-family: Cinzel;
  font-size: 13px;
  letter-spacing: 3.2px;
  margin: 20px 0 30px;

  @media screen and (max-width: 1024px){
    font-size: 12px;
    margin: 20px 0 25px;
  }

  @media screen and (max-width: 768px){
    margin-top: 0;
  }
`