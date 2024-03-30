import styled from "styled-components";
import { coloresV2 } from "../../../../assets/css/Colors";
import { fonts } from "../../../../assets/fonts/FontsHandler";

export const Title = styled.h1`
  font-family: ${fonts.MainTypography};
  color: ${coloresV2.colorTextos};
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 10px;
  margin-top: -10px;

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
    margin: -25px 0;
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

export const ContainerCards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @media screen and (max-width: 1535px){
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 768px){
    grid-template-columns: repeat(1, 1fr);
  }
`

export const Card = styled.div`
  background-color: ${coloresV2.colorPrincipal};
  border: 1px solid ${coloresV2.colorTextos};
  display: flex;
  flex-direction: column;
  padding: 25px;
  border-radius: 10px;
  gap: 15px;
  box-shadow: 4px 4px 0px rgba(0, 0, 0, 1);
  `

export const Quotes = styled.img`
  width: 40px;
  `

export const Paragraph = styled.p`
  font-family: ${fonts.SecondaryTypography};
  font-size: 1rem;
  line-height: 1.3rem;
  text-align: justify;
  hyphens: auto;
`

export const ContainerIdentifier = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
`

export const BrandLogo = styled.img`
  width: 100px;
  display: flex;
  aspect-ratio: 1/1;
  width: 70px;
  border: 1px solid ${coloresV2.colorTextos};
  border-radius: 100px;
`

export const BoxTexts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`

export const BrandName = styled.span`
  font-family: ${fonts.MainTypography};
  font-size: 1.1rem;
  letter-spacing: .13rem;
  font-weight: bold;
`

export const BrandCategory = styled.span`
  font-family: ${fonts.SecondaryTypography};
  font-size: 1.1rem;
`