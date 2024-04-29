import styled from "styled-components";
import { fonts } from "../../../../assets/fonts/FontsHandler";

export const ContainerHero = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;

  @media screen and (max-width: 768px){
    flex-direction: column;
  }
`

export const Shadow = styled.img`
  position: absolute;
  width: 100%;
  height: 100vh;
  opacity: .3;
`

export const BoxTexts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40%;

  @media screen and (max-width: 768px){
    order: 2;
    width: 100%;
    text-align: center;
    align-items: center;
  }
`

export const Title = styled.h1`
  font-family: ${fonts.MainTypography};
  font-size: 4rem;
  margin-top: 10px;

  @media screen and (max-width: 1535px){
    font-size: 3.3rem;
  }

  @media screen and (max-width: 1232px){
    font-size: 2.7rem;
  }

  @media screen and (max-width: 1024px){
    font-size: 1.9rem;
  }

  @media screen and (max-width: 768px){
    font-size: 4rem;
  }

  @media screen and (max-width: 596px){
    font-size: 2.8rem;
  }

  @media screen and (max-width: 425px){
    font-size: 2.5rem;
  }
`

export const Description = styled.p`
  font-family: ${fonts.SecondaryTypography};
  font-size: 2rem;

  @media screen and (max-width: 1535px){
    font-size: 1.6rem;
  }

  @media screen and (max-width: 1232px){
    font-size: 1.3rem;
  }

  @media screen and (max-width: 1024px){
    font-size: 1.2rem;
  }

  @media screen and (max-width: 768px){
    font-size: 1.8rem;
    margin-top: 5px;
  }

  @media screen and (max-width: 596px){
    font-size: 1.3rem;
  }

  @media screen and (max-width: 425px){
    font-size: 1.2rem;
  }
`

export const SocialIcons = styled.img`
  width: 55%;
  margin-top: 15px;

  @media screen and (max-width: 1232px){
    margin-top: 10px;
  }

  @media screen and (max-width: 1024px){
    margin-top: 5px;
  }

  @media screen and (max-width: 768px){
    margin-top: 15px;
  }
`

export const BoxImage = styled.div`
  display: flex;
  width: 56%;
  overflow: hidden;

  @media screen and (max-width: 768px){
    width: 100%;
    order: 1;
    margin-top: 30px;
  }
`

export const Image = styled.img`
  width: 100%;
`