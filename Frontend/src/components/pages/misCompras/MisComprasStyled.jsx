import styled from "styled-components"
import { colores, coloresV2 } from "../../../assets/css/Colors"
import { fonts } from "../../../assets/fonts/FontsHandler"

export const Section = styled.section`
  background-color: ${colores.colorFondo};
  color: ${colores.colorAcento};
  width: 100%;
  min-height: 100vh;
  padding: 120px 60px 60px;
  display: flex;
  align-items: top;
  justify-content: center;
  overflow: hidden;

  @media screen and (max-width: 768px){
    padding: 120px 20px 60px;
  }
`

export const CardContainer = styled.div`
  background-color: ${coloresV2.colorPrincipal};
  height: fit -content;
  width: 100%;
  padding: 15px 40px 45px;
  border-radius: 8px;
  margin-top: 60px;
  border: 1px solid ${coloresV2.colorTextos};
  font-family: ${fonts.SecondaryTypography};
  overflow: hidden;

  box-shadow:
  1.1px 1.1px 2.2px rgba(0, 0, 0, 0.02),
  2.7px 2.7px 5.3px rgba(0, 0, 0, 0.028),
  5px 5px 10px rgba(0, 0, 0, 0.035),
  8.9px 8.9px 17.9px rgba(0, 0, 0, 0.042),
  16.7px 16.7px 33.4px rgba(0, 0, 0, 0.05),
  40px 40px 80px rgba(0, 0, 0, 0.07);
`

export const Title = styled.h1`
  width: 100%;
  font-family: ${fonts.MainTypography};
  font-size: 1.8rem;
  font-weight: bold;
  text-align: center;
`

export const Subtitle = styled.h2`
  font-size: 1.4rem;
  font-weight: bold;

  @media screen and (max-width: 375px){
    display: ${(props) => props.$download && "none"};
  }
`

export const Paragraph = styled.p` 
  width: 100%;
  font-size: 1.4rem;
  text-align: center;
`

export const BoxItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid black;
  padding: 20px 0;
  gap: 25px;
`

export const Product = styled.h1`
  font-size: 1.4rem;
  font-weight: 100;
`

export const DownloadButton = styled.a`
  display: flex;
  margin-right: 30px;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover{
    transform: scale(1.2);
  }
`

export const DownloadIcon = styled.img`
  width: 50px;
  filter: invert(100%);
`