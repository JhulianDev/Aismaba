import styled from "styled-components"
import { fonts } from "../../../assets/fonts/FontsHandler";

export const Title = styled.h1`
  font-family: ${fonts.MainTypography};
  font-size: 3rem;

  @media screen and (max-width: 596px){
    font-size: 2.5rem;
  }
`