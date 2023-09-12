import styled from "styled-components"
import { colores } from "../../../assets/css/Colors"

export const Section = styled.section`
  background-color: ${colores.colorFondo};
  width: 100%;
  min-height: 100vh;
  padding: 120px 60px 60px;
  display: flex;
  align-items: top;
  justify-content: center;

  @media screen and (max-width: 425px){
    padding: 120px 20px 60px;
  }
`