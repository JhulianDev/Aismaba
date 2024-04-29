import styled from "styled-components";
import { fonts } from "../../../../assets/fonts/FontsHandler";
import { coloresV2 } from "../../../../assets/css/Colors";

export const Title = styled.h1`
  font-family: ${fonts.MainTypography};
  font-size: 5rem;
  font-weight: 100;
  text-align: justify;
  margin-bottom: 20px;

  @media screen and (max-width: 1535px){
    font-size: 4rem;
  }

  @media screen and (max-width: 1232px){
    font-size: 3.2rem;
  }

  @media screen and (max-width: 1024px){
    font-size: 2.3rem;
  }

  @media screen and (max-width: 768px){
    font-size: 2.1rem;
    margin-bottom: 0;
  }

  @media screen and (max-width: 596px){
    font-size: 2rem;
  }
`

export const Description = styled.p`
  font-family: ${fonts.SecondaryTypography};
  font-size: 1.5rem;
  line-height: 1.8rem;
  text-align: justify;

  @media screen and (max-width: 1535px){
    font-size: 1.4rem;
  }

  @media screen and (max-width: 1232px){
    font-size: 1.3rem;
  }

  @media screen and (max-width: 1024px){
    font-size: 1.2rem;
  }

  @media screen and (max-width: 768px){
    margin-top: -15px;
    margin-bottom: -20px;
  }
`

export const Image = styled.img`
  width: 200px;
  border: 1px solid ${coloresV2.colorTextos};
  border-radius: 8px;

  @media screen and (max-width: 1232px){
    display: ${(props) => props.$mobile && "none"};
  }

  @media screen and (max-width: 1024px){
    width: 140px;
  }

  @media screen and (max-width: 768px){
    width: 100%;
    display: ${(props) => props.$mobile && "flex"};
  }
`