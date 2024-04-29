import styled from "styled-components";
import { fonts } from "../../../../assets/fonts/FontsHandler";
import { coloresV2 } from "../../../../assets/css/Colors";

export const Title = styled.h1`
  font-family: ${fonts.MainTypography};
  color: ${coloresV2.colorTextos};
  font-size: 3.5rem;
  text-align: center;
  margin-bottom: 10px;

  @media screen and (max-width: 1535px){
    font-size: 3rem;
    margin-bottom: 8px;
  }

  @media screen and (max-width: 1232px){
    font-size: 2.7rem;
    margin-bottom: 6px;
  }

  @media screen and (max-width: 1024px){
    font-size: 2.5rem;
    margin-bottom: 5px;
  }

  @media screen and (max-width: 768px){
    font-size: 2.3rem;
    margin: -25px 0;
  }
`

export const Subtitle = styled.h2`
  font-family: ${fonts.SecondaryTypography};
  color: ${coloresV2.colorTextos};
  text-align: center;
  font-size: 2rem;
  font-weight: 400;
  margin-bottom: 30px;

  @media screen and (max-width: 1535px){
    margin-bottom: 25px;
  }

  @media screen and (max-width: 1232px){
    font-size: 1.9rem;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 1024px){
    font-size: 1.8rem;
  }

  @media screen and (max-width: 768px){
    font-size: 1.6rem;
    margin-bottom: 0px;
  }
`

export const ContainerImages = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: flex-start;
  justify-content: space-between;
  gap: 40px;

  @media screen and (max-width: 1535px){
    gap: 30px;
  }

  @media screen and (max-width: 1232px){
    gap: 20px;
  }

  @media screen and (max-width: 1024px){
    grid-template-columns: repeat(1, 1fr);
    gap: 30px;
  }
`

export const Image = styled.img`
  width: 100%;
  border-radius: 7px;
  box-shadow: 0px 0px 12px 1px rgba(0,0,0,0.3);
  transition: all .4s ease;

  &:hover{
    transform: scale(1.02);
  }
`