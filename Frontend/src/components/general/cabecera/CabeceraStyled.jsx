import styled, { css } from "styled-components"
import { colores } from "../../../assets/css/Colors"

const cabeceraHeight = css`
  height: 400px;

  @media screen and (max-width: 1440px){
    height: 300px;
  }

  @media screen and (max-width: 768px){
    height: 230px;
  }
`

export const CabeceraMainContainer = styled.div`
  ${cabeceraHeight};
  background-image: url(${props => props.$imagen});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  width: 100%;
  overflow: hidden;
`

export const CabeceraBoxVideo = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`

export const CabeceraVideo = styled.video`
  width: 100%;
  height: auto;

  @media screen and (max-width: 425px){
    transform: scale(1.1);
  }

  @media screen and (max-width: 375px){
    transform: scale(1.4);
  }
`

export const CabeceraBoxTextos = styled.div`
  ${cabeceraHeight};
  background-color: #bf9b7ad7;
  color: ${colores.colorBlanco};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 400px;
  padding: 0 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 0.6rem;
  overflow: hidden;
`

export const CabeceraTituloS = styled.h1`
  font-family: Cinzel;
  font-size: 2.6rem;
  letter-spacing: 0.6rem;

  @media screen and (max-width: 1440px){
    font-size: 2.4rem;
  }

  @media screen and (max-width: 1024px){
    font-size: 2.2rem;
  }

  @media screen and (max-width: 768px){
    font-size: 2rem;
    letter-spacing: 0.4rem;
  }

  @media screen and (max-width: 425px){
    font-size: 2.2rem;
    letter-spacing: 0.4rem;
  }

  @media screen and (max-width: 375px){
    font-size: 1.8rem;
    letter-spacing: 0.4rem;
  }
`

export const CabeceraTituloM = styled.h1`
  font-family: Cinzel;
  font-size: 4rem;
  letter-spacing: 1rem;

  @media screen and (max-width: 1440px){
    font-size: 3.8rem;
    letter-spacing: 0.9rem;
  }

  @media screen and (max-width: 1024px){
    font-size: 3.6rem;
    letter-spacing: 0.8rem;
  }

  @media screen and (max-width: 768px){
    font-size: 3.4rem;
    letter-spacing: 0.7rem;
  }

  @media screen and (max-width: 425px){
    font-size: 3rem;
    letter-spacing: 0.6rem;
  }

  @media screen and (max-width: 375px){
    font-size: 2rem;
    letter-spacing: 0.6rem;
  }
`

export const CabeceraParrafo = styled.p`
  background-color: #b99069d6;
  color: ${colores.colorBlanco};
  width: 100%;
  font-family: Roboto;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px 60px;
  margin-top: 20px;

  @media screen and (max-width: 1440px){
    font-size: 1rem;
  }

  @media screen and (max-width: 1024px){
    font-size: .9rem;
  }

  @media screen and (max-width: 768px){
    padding: 20px 30px;
    font-size: 1rem;
  }
`