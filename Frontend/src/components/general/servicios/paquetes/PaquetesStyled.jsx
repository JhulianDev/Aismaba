import styled from "styled-components"
import { colores } from "../../../../assets/css/Colors"

export const PaquetesSection = styled.section`
  background-color: ${colores.colorFondo};
  color: ${colores.colorAcento};
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  padding: 80px 0;
  overflow: hidden;
`

export const PaquetesTitulo = styled.h1`
  font-family: Cinzel;
  font-size: 2rem;
  letter-spacing: 0.2rem;

  margin-bottom: 20px;
  color: var(--color-acento);

  @media screen and (max-width: 1440px){
    font-size: 1.8rem;
  }

  @media screen and (max-width: 1024px){
    font-size: 1.6rem;
  }
`

export const PaquetesSubtitulo = styled.h2`
  font-family: Cinzel;
  font-size: 1.4rem;
  letter-spacing: 0.2rem;
  color: var(--color-acento);
  margin-bottom: 40px;

  @media screen and (max-width: 1440px){
    font-size: 1.2rem;
  }

  @media screen and (max-width: 1024px){
    font-size: 1rem;
  }
`