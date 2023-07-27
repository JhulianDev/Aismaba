import styled from "styled-components"
import { colores } from "../../../../assets/css/Colors"

export const PropuestaSection = styled.section`
  width: 100%;
  height: 570px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  @media screen and (max-width: 980px){
    height: auto;
    padding: 80px 0;
  }

  @media screen and (max-width: 660px){
    padding: 80px 0 30px 0;
  }
`

export const PropuestaDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 980px){
    flex-direction: column;
  }
`

export const PropuestaBoxPresentacion = styled.div`
  width: 360px;
  margin-right: 100px;

  @media screen and (max-width: 1440px){
    width: 315px;
    margin-right: 60px;
  }

  @media screen and (max-width: 1180px){
    width: 290px;
  }

  @media screen and (max-width: 980px){
    width: 350px;
    margin: 0 0 40px 0;
  }

  @media screen and (max-width: 375px){
    width: 280px;
  }
`

export const PropuestaH2 = styled.h2`
  font-family: Roboto;
  font-weight: 300;
  font-size: 1.2rem;
  color: ${colores.colorTexto};

  @media screen and (max-width: 1440px){
    font-size: 1rem;
  }

  @media screen and (max-width: 1180px){
    font-size: 0.9rem;
  }

  @media screen and (max-width: 980px){
    text-align: center;
  }

  @media screen and (max-width: 375px){
    font-size: 0.8rem;
  }
`

export const PropuestaH3 = styled.h3`
  font-family: Cinzel;
  font-size: 2.4rem;
  letter-spacing: 0.4rem;
  margin: 10px 0;
  color: ${colores.colorPrincipal};

  @media screen and (max-width: 1440px){
    font-size: 2.2rem;
  }

  @media screen and (max-width: 1180px){
    font-size: 2rem;
  }

  @media screen and (max-width: 980px){
    text-align: center;
  }

  @media screen and (max-width: 375px){
    font-size: 1.4rem;
  }
`
export const PropuestaParrafo = styled.p`
  font-family: Roboto;
  font-size: 1.5rem;
  font-style: italic;
  font-weight: 300;
  line-height: 30px;
  color: ${colores.colorTexto};

  @media screen and (max-width: 1440px){
    font-size: 1.3rem;
  }

  @media screen and (max-width: 1180px){
    font-size: 1.2rem;
  }

  @media screen and (max-width: 980px){
    text-align: center;
    font-size: 1.4rem;
  }

  @media screen and (max-width: 375px){
    font-size: 1rem;
  }
`

export const PropuestaBoxInfoIconos = styled.div`
  width: 850px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  @media screen and (max-width: 1440px){
    width: 690px;
  }

  @media screen and (max-width: 1180px){
    width: 530px;
  }

  @media screen and (max-width: 980px){
    width: 600px;
  }

  @media screen and (max-width: 660px){
    width: 280px;
  }
`