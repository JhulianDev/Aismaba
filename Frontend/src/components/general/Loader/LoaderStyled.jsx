import styled from "styled-components"
import { colores } from "../../../assets/css/Colors"

export const ContainerLoader = styled.div`
  background-color: ${props => (props.$bgColor === true ? colores.colorFondo : "transparent" )};
  width: 100%;
  height: ${props => props.$height};
  display: flex;
  align-items: center;
  justify-content: center;
`