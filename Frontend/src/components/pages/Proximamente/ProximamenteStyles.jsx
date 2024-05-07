import styled from "styled-components"
import { fonts } from "../../../assets/fonts/FontsHandler";
import { coloresV2 } from "../../../assets/css/Colors";

export const Section = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: ${(props) => props.$bgImage && `url(${props.$bgImage})`};
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
  position: relative;
`

export const Filter = styled.span`
  width: 100%;
  height: 100vh;
  position: absolute;
  background-color: #eae1dcce;
`

export const ContainerCountdown = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  margin-top: 40px;
  gap: 30px;

  @media screen and (max-width: 1535px){
    gap: 25px;
  }

  @media screen and (max-width: 1024px){
    gap: 12px;
  }
`

export const Title = styled.h1`
  font-family: ${fonts.MainTypography};
  font-size: 4rem;
  font-weight: 100;

  @media screen and (max-width: 1535px){
    font-size: 3.7rem;
  }

  @media screen and (max-width: 1024px){
    font-size: 3.3rem;
  }

  @media screen and (max-width: 596px){
    font-size: 2.5rem;
  }

  @media screen and (max-width: 320px){
    font-size: 10vw;
  }
`

export const ContainerItems = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  @media screen and (max-width: 1535px){
    gap: 15px;
  }

  @media screen and (max-width: 768px){
    flex-wrap: wrap;
  }
`

export const BoxItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 170px;
  aspect-ratio: 1/1;
  border: 1px solid ${coloresV2.colorTextos};
  border-radius: 7px;
  font-family: ${fonts.MainTypography};
  background-color: ${coloresV2.colorPrincipal};

  @media screen and (max-width: 1535px){
    width: 150px;
  }

  @media screen and (max-width: 768px){
    width: 190px;
  }

  @media screen and (max-width: 596px){
    width: 150px;
  }
`

export const NumberItem = styled.span`
  font-size: 5rem;

  @media screen and (max-width: 1535px){
    font-size: 4rem;
  }

  @media screen and (max-width: 1024px){
    font-size: 3rem;
  }
`

export const TwoDots = styled.span`
  font-size: 5rem;
  margin-top: -15px;

  @media screen and (max-width: 768px){
    display: none;
  }
`

export const TextItem = styled.span`
  font-size: 1.6rem;

  @media screen and (max-width: 1535px){
    font-size: 1.3rem;
  }

  @media screen and (max-width: 1024px){
    font-size: 1.2rem;
  }
`