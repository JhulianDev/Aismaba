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
    padding: 120px 20px 40px;
  }
`