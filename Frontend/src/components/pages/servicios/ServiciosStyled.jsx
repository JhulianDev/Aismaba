import styled from "styled-components"
import { colores } from "../../../assets/css/Colors"

export const ServiciosContainer = styled.div`
  background-color: ${colores.colorFondo};
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 75px 0;
  gap: 60px;
  overflow: hidden;

  @media screen and (max-width: 768px){
    gap: 20px;
  }
`

export const ServiciosTitulo = styled.h1`
  font-family: Cinzel;
  font-size: 28.8px;
  letter-spacing: 4.8px;
  font-weight: 300;
  text-align: center;
  color: ${colores.colorPrincipal};
  padding: 0 40px;

  @media screen and (max-width: 768px){
    margin-bottom: 50px;
  }

  @media screen and (max-width: 425px){
    font-size: 25.6px;
    padding: 0 60px;
  }
`