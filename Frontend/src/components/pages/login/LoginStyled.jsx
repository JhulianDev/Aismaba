import styled from "styled-components"
import { colores } from "../../../assets/css/Colors"

export const Section = styled.section`
  background-color: ${colores.colorFondo};
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 45px 20px 0;

  @media screen and (max-width: 768px){
    padding: 0px 20px;
  }
`