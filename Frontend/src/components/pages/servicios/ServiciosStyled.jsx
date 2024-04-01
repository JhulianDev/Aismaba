import styled from "styled-components"
import { fonts } from "../../../assets/fonts/FontsHandler"
import { coloresV2 } from "../../../assets/css/Colors"

export const Title = styled.h1`
  font-family: ${fonts.MainTypography};
  color: ${coloresV2.colorTextos};
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 10px;

  @media screen and (max-width: 1535px){
    font-size: 2.2rem;
    margin-bottom: 8px;
  }

  @media screen and (max-width: 1232px){
    font-size: 2rem;
    margin-bottom: 6px;
  }

  @media screen and (max-width: 1024px){
    font-size: 1.9rem;
    margin-bottom: 5px;
  }

  @media screen and (max-width: 768px){
    font-size: 1.8rem;
    margin: 40px 0 -25px 0;
  }
`

export const Subtitle = styled.h2`
  font-family: ${fonts.SecondaryTypography};
  color: ${coloresV2.colorTextos};
  text-align: center;
  font-size: 1.4rem;
  font-weight: 400;

  @media screen and (max-width: 1535px){
    font-size: 1.3rem;
  }

  @media screen and (max-width: 1232px){
    font-size: 1.2rem;
  }

  @media screen and (max-width: 1024px){
    font-size: 1.1rem;
  }
`