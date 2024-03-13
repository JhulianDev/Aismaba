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

export const CardBox = styled.div`
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  background-color: white;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  margin-top: 60px;
  padding: 50px;
  gap: 4%;

  @media screen and (max-width: 1535px){
    margin-top: 50px;
  }

  @media screen and (max-width: 1232px){
    margin-top: 40px;
    padding: 40px;
  }

  @media screen and (max-width: 1024px){
    border: 1px solid ${coloresV2.colorTextos};
    flex-direction: column;
    padding: 30px;
    margin-top: 30px;
    gap: 30px;
  }
`

export const Image = styled.img`
  width: 47%;
  border-radius: 12px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 1024px){
    width: 100%;
    border: 1px solid ${coloresV2.colorTextos};
  }
`

export const BoxDescription = styled.div`
  width: 59%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: ${fonts.SecondaryTypography};
  color: ${coloresV2.colorTextos};
  gap: 20px;

  @media screen and (max-width: 1024px){
    width: 100%;
  }
`

export const Description = styled.p`
  font-size: 1.6rem;

  @media screen and (max-width: 1535px){
    font-size: 1.2rem;
  }

  @media screen and (max-width: 1232px){
    font-size: 1rem;
  }

  @media screen and (max-width: 1024px){
    font-size: 1.3rem;
  }

  @media screen and (max-width: 596px){
    text-align: justify;
  }
`