import styled from "styled-components";
import { fonts } from "../../../../../assets/fonts/FontsHandler";
import { coloresV2 } from "../../../../../assets/css/Colors";

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
    margin: 0 0 -25px 0;
  }
`

export const Subtitle = styled.h2`
  font-family: ${fonts.SecondaryTypography};
  color: ${coloresV2.colorTextos};
  text-align: center;
  font-size: 1.4rem;
  font-weight: 400;
  margin-bottom: 30px;

  @media screen and (max-width: 1535px){
    font-size: 1.3rem;
    margin-bottom: 25px;
  }

  @media screen and (max-width: 1232px){
    font-size: 1.2rem;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 1024px){
    font-size: 1.1rem;
  }

  @media screen and (max-width: 768px){
    margin-bottom: -10px;
  }
`

export const BoxCards = styled.div`
  width: 100%;
  display: grid;
  align-items: center;
  justify-content: space-between;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin: 20px 0;

  @media screen and (max-width: 768px){
    grid-template-columns: repeat(1, 1fr);
    margin: -10px 0 10px 0;
  }
`