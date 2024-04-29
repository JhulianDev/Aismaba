import styled from "styled-components";
import { fonts } from "../../../../assets/fonts/FontsHandler";
import { coloresV2 } from "../../../../assets/css/Colors";

export const Title = styled.h1`
  font-family: ${fonts.MainTypography};
  color: ${coloresV2.colorTextos};
  font-size: 3.5rem;
  text-align: center;

  @media screen and (max-width: 1535px){
    font-size: 3rem;
  }

  @media screen and (max-width: 1024px){
    font-size: 2.5rem;
  }
`

export const Subtitle = styled.h2`
  font-family: ${fonts.SecondaryTypography};
  color: ${coloresV2.colorTextos};
  font-size: 2.2rem;
  font-weight: 400;
  text-align: center;

  @media screen and (max-width: 1024px){
    font-size: 1.8rem;
  }

  @media screen and (max-width: 768px){
    margin: -30px 0;
  }
`

export const BoxSteps = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 60px;
  gap: 60px;

  @media screen and (max-width: 1535px){
    margin-top: 50px;
    gap: 50px;
  }

  @media screen and (max-width: 1232px){
    margin-top: 40px;
    gap: 40px;
  }

  @media screen and (max-width: 1024px){
    margin-top: 30px;
    gap: 30px;
  }

  @media screen and (max-width: 768px){
    margin-top: 20px;
    gap: 20px;
  }
`