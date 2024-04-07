import styled from "styled-components";
import { fonts } from "../../../../../assets/fonts/FontsHandler";

export const ProductsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;
  gap: 20px;

  @media screen and (max-width: 1535px){
    margin-top: 35px;
  }

  @media screen and (max-width: 1232px){
    margin-top: 30px;
  }

  @media screen and (max-width: 1024px){
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 768px){
    grid-template-columns: repeat(2, 1fr);
    margin-top: 0px;
  }

  @media screen and (max-width: 596px){
    grid-template-columns: repeat(1, 1fr);
  }
`

export const Title = styled.h1`
  font-family: ${fonts.MainTypography};
  font-size: 3rem;
  font-weight: bold;
  text-align: center;

  @media screen and (max-width: 1535px){
    font-size: 2.8rem;
  }

  @media screen and (max-width: 1232px){
    font-size: 2.7rem;
  }

  @media screen and (max-width: 1024px){
    font-size: 2.6rem;
  }

  @media screen and (max-width: 768px){
    font-size: 2.5rem;
  }

  @media screen and (max-width: 596px){
    font-size: 2.2rem
  }

  @media screen and (max-width: 425px){
    font-size: 2rem
  }
`

export const Subtitle = styled.h2`
  font-family: ${fonts.SecondaryTypography};
  font-size: 1.8rem;
  font-weight: 100;
  margin-top: 7px;
  text-align: center;

  @media screen and (max-width: 768px){
    font-size: 1.7rem;
    margin: -25px 0;
  }

  @media screen and (max-width: 596px){
    font-size: 1.6rem
  }

  @media screen and (max-width: 425px){
    font-size: 1.4rem
  }
`