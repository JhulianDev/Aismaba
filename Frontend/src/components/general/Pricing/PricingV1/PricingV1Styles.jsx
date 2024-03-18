import styled from "styled-components"
import { fonts } from "../../../../assets/fonts/FontsHandler"
import { coloresV2 } from "../../../../assets/css/Colors"

export const Title = styled.h1`
  font-family: ${fonts.MainTypography};
  color: ${coloresV2.colorTextos};
  font-size: 3.5rem;
  text-align: center;

  @media screen and (max-width: 1535px){
    font-size: 3rem;
  }

  @media screen and (max-width: 1232px){
    font-size: 2.7rem;
  }

  @media screen and (max-width: 1024px){
    font-size: 2.5rem;
  }

  @media screen and (max-width: 768px){
    font-size: 2.2rem;
  }
`

export const Subtitle = styled.h2`
  font-family: ${fonts.SecondaryTypography};
  color: ${coloresV2.colorTextos};
  text-align: center;
  font-size: 2.2rem;
  font-weight: 400;
  margin-top: 10px;

  @media screen and (max-width: 1024px){
    font-size: 1.8rem;
  }

  @media screen and (max-width: 768px){
    margin: -20px 0;
  }
`

export const Wave = styled.img`
  position: absolute;
  bottom: 0;
  height: 90vh;
  z-index: -1;

  @media screen and (max-width: 1440px){
    height: 100vh;
  }
`