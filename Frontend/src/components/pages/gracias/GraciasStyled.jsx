import styled from "styled-components"
import { colores } from "../../../assets/css/Colors"

export const GraciasSection = styled.section`
  background-color: ${colores.colorSecundario};
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`

export const GraciasBox = styled.div`
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 60px 0 0 0;

  @media screen and (max-width: 1440px){
    max-width: 930px;
  }

  @media screen and (max-width: 1024px){
    max-width: 690px;
  }

  @media screen and (max-width: 768px){
    margin: 60px 40px 0;
  }
`

export const GraciasBoxLottie = styled.div`
  width: 400px;
  height: 400px;

  @media screen and (max-width: 1440px){
    width: 380px;
    height: 380px;
  }

  @media screen and (max-width: 1024px){
    width: 350px;
    height: 350px;
  }

  @media screen and (max-width: 768px){
    width: 300px;
    height: 300px;
  }

  @media screen and (max-width: 768px){
    width: 250px;
    height: 250px;
  }
`

export const GraciasTitulo = styled.h1`
  color: ${colores.colorBlanco};
  font-family: Cinzel;
  font-size: 4.8rem;
  letter-spacing: 0.6rem;
  margin-top: -30px;

  @media screen and (max-width: 1440px){
    font-size: 4.4rem;
  }

  @media screen and (max-width: 1024px){
    font-size: 4rem;
  }

  @media screen and (max-width: 768px){
    font-size: 2.4rem;
    margin-top: -10px;
    margin-bottom: 5px;
  }

  @media screen and (max-width: 375px){
    font-size: 1.8rem;
    letter-spacing: 0.4rem;
  }
`

export const GraciasSubtitulo = styled.h2`
  font-family: Cinzel;
  letter-spacing: 0.2rem;
  font-size: 1.3rem;
  color: ${colores.colorBlanco};
  text-align: center;
  margin-bottom: 10px;

  @media screen and (max-width: 1024px){
    font-size: 1.2rem;
  }

  @media screen and (max-width: 768px){
    font-size: 1rem;
  }

  @media screen and (max-width: 375px){
    font-size: 0.8rem;
  }
`

export const GraciasDetalles = styled.h3`
  color: ${colores.colorBlanco};
  font-family: Roboto;
  font-size: 1.1rem;
  font-weight: 400;
  text-align: center;
  line-height: 1.2rem;
  margin-bottom: 20px;
`

export const GraciasParrafo = styled.p`
  color: ${colores.colorAcento};
  text-align: center;
  font-family: Roboto;
  font-size: 1.1rem;
  line-height: 2rem;

  /* margin-bottom: 15px; */

  @media screen and (max-width: 1024px){
    font-size: 1rem;
  }

  @media screen and (max-width: 768px){
    line-height: 1.5rem;
    text-align: justify;
  }
`