import styled from "styled-components";
import { fonts } from "../../../assets/fonts/FontsHandler";
import { coloresV2 } from "../../../assets/css/Colors";

export const FooterContainer = styled.footer`
  background-color: ${coloresV2.colorPrincipal};
  border-top: 1px solid ${coloresV2.colorTextos};
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`

export const CopyRight = styled.span`
  color: ${coloresV2.colorTextos};
  font-family: ${fonts.SecondaryTypography};
  font-size: 1.1rem;
  margin-top: 3px;
  text-align: center;

  @media screen and (max-width: 768px){
    margin: 0 50px;
  }

  @media screen and (max-width: 425px){
    margin: 0 30px;
    font-size: .75rem;
  }
`