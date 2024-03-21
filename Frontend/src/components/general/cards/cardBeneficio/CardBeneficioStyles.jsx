import styled from "styled-components";
import { fonts } from "../../../../assets/fonts/FontsHandler";
import { coloresV2 } from "../../../../assets/css/Colors";

export const BoxCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${coloresV2.colorTextos};
  border-color: ${(props) => props.$color};
  border-radius: 8px;
  padding: 30px 40px;
  gap: 20px;
  overflow: hidden;

  @media screen and (max-width: 1535px){
    padding: 20px 30px;
    gap: 15px;
  }

  @media screen and (max-width: 1232px){
    padding: 15px 20px;
  }

  @media screen and (max-width: 1024px){
    padding: 10px 12px;
    gap: 10px;
  }

  @media screen and (max-width: 768px){
    padding: 25px 20px;
    gap: 20px;
    width: 100%;
  }

  @media screen and (max-width: 596px){
    justify-content: flex-start;
    padding: 20px 18px;
    width: 100%;
    gap: 15px;
  }

  @media screen and (max-width: 425px){
    padding: 20px 22px;
  }

  @media screen and (max-width: 375px){
    justify-content: flex-start;
  }
`

export const Icon = styled.img`
  height: 100px;

  @media screen and (max-width: 1535px){
    height: 80px;
  }

  @media screen and (max-width: 1232px){
    height: 65px;
  }

  @media screen and (max-width: 1024px){
    height: 40px;
  }

  @media screen and (max-width: 768px){
    height: 90px;
  }

  @media screen and (max-width: 596px){
    height: 70px;
  }

  @media screen and (max-width: 375px){
    height: 50px;
  }
`

export const BoxTexts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  color: ${(props) => props.$color || `${coloresV2.colorTextos}`};
  gap: 2px;
`

export const Title = styled.h1`
  font-family: ${fonts.MainTypography};
  font-size: 1.5rem;

  @media screen and (max-width: 1535px){
    font-size: 1.3rem;
  }

  @media screen and (max-width: 1232px){
    font-size: 1.1rem;
  }

  @media screen and (max-width: 1024px){
    font-size: .8rem;
  }

  @media screen and (max-width: 768px){
    font-size: 1.5rem;
  }

  @media screen and (max-width: 596px){
    font-size: 1.3rem;
  }

  @media screen and (max-width: 375px){
    font-size: 1rem;
  }
`

export const Paragraph = styled.p`
  font-family: ${fonts.SecondaryTypography};
  font-size: 1.3rem;

  @media screen and (max-width: 1535px){
    font-size: 1.2rem;
  }

  @media screen and (max-width: 1232px){
    font-size: 1rem;
  }

  @media screen and (max-width: 1024px){
    font-size: .8rem;
  }

  @media screen and (max-width: 768px){
    font-size: 1.4rem;
  }

  @media screen and (max-width: 596px){
    font-size: 1.3rem;
  }

  @media screen and (max-width: 375px){
    font-size: 1rem;
  }
`