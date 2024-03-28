import styled, { keyframes } from "styled-components";
import { fonts } from "../../../../assets/fonts/FontsHandler";
import { coloresV2 } from "../../../../assets/css/Colors";

const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
`;

export const MainContainer = styled.div`
  background-color: ${coloresV2.colorPrincipal};
  width: 100%;
  display: flex;
  align-items: center;
  border-top: 1px solid ${coloresV2.colorTextos};
  border-bottom: 1px solid ${coloresV2.colorTextos};
`

export const Separator = styled.span`
  width: 100%;
  font-family: ${fonts.MainTypography};
  font-size: 2.5rem;
  text-align: center;
  white-space: nowrap;
  animation: ${scroll} 40s linear infinite;
`