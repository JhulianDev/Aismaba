import styled from "styled-components"
import { colores } from "../../../../assets/css/Colors"

export const PlantillasSection = styled.section`
  background-color: ${colores.colorFondo};
  width: 100%;
  padding: 0px 60px 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  @media screen and (max-width: 768px){
    padding: 0px 20px 10px;
  }
`

export const PlantillasBoxTarjetas = styled.div`
  max-width: 1200px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8%;

  @media screen and (max-width: 1440px){
    max-width: 934px;
    gap: 5%;
  }

  @media screen and (max-width: 768px){
    gap: 4%;
  }

  @media screen and (max-width: 375px){
    gap: 0%;
  }
`