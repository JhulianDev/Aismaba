import styled from "styled-components"
import { colores } from "../../../../assets/css/Colors"

export const PlantillaSection = styled.section`
  background-color: ${colores.colorFondo};
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 120px 60px 60px;
  color: ${colores.colorAcento};
  gap: 25px;
  overflow: hidden;

  @media screen and (max-width: 768px){
    padding: 120px 20px 60px;
  }
`

export const PlantillaBoxInfo = styled.div`
  max-width: 1200px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1440px){
    max-width: 934px;
  }
`

export const PlantillaInfoTitulo = styled.h1`
  font-family: Cinzel;
  font-size: 1.5rem;
  margin-bottom: 10px;

  @media screen and (max-width: 768px){
    text-align: center;
  }
`

export const PlantillaInfoParrafo = styled.p`
  font-family: Roboto;
  font-size: 1rem;
  line-height: 1.6rem;
  text-align: justify;

  @media screen and (max-width: 425px){
    font-size: 1.1rem;
  }
`

export const PlantillaTerminos = styled.p`
  background-color: ${colores.colorTerciario};
  max-width: 1200px;
  font-family: Roboto;
  font-size: 1rem;
  line-height: 1.4rem;
  text-align: center;
  padding: 20px 200px;
  margin-top: 10px;
  border: double 4px ${colores.colorAcento};

  @media screen and (max-width: 1440px){
    max-width: 934px;
    padding: 20px 70px;
  }

  @media screen and (max-width: 768px){
    padding: 20px 40px;
  }
`