import { Link } from "react-router-dom";
import styled from "styled-components";
import { coloresV2 } from "../../../../assets/css/Colors";
import { fonts } from "../../../../assets/fonts/FontsHandler";

export const CardContainer = styled.div`
  background-color: ${coloresV2.colorPrincipal};
  width: 100%;
  max-height: 270px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${coloresV2.colorTextos};
  border-radius: 24px;
  overflow: hidden;

  @media screen and (max-width: 768px){
    flex-direction: column;
    max-height: fit-content;
    border-radius: 12px;
  }
`

export const BoxTexts = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0 40px;

  @media screen and (max-width: 1232px){
    padding: 0 30px;
  }

  @media screen and (max-width: 1024px){
    padding: 0 25px;
  }

  @media screen and (max-width: 768px){
    width: 100%;
    padding: 15px 20px 20px;
    order: 2;
  }
`

export const Title = styled.h1`
  font-family: ${fonts.MainTypography};
  font-size: 3.7rem;
  font-weight: 100;
  white-space: nowrap;
  margin-top: -7px;

  @media screen and (max-width: 1535px){
    font-size: 3rem;
  }

  @media screen and (max-width: 1232px){
    font-size: 2.6rem;
  }

  @media screen and (max-width: 1024px){
    font-size: 1.8rem;
    margin-top: 0;
  }

  @media screen and (max-width: 768px){
    font-size: 2.6rem;
    white-space: wrap;
  }

  @media screen and (max-width: 596px){
    font-size: 2.3rem;
  }

  @media screen and (max-width: 425px){
    font-size: 2rem;
  }
`

export const Description = styled.p`
  font-family: ${fonts.SecondaryTypography};
  font-size: 1.6rem;

  @media screen and (max-width: 1535px){
    font-size: 1.4rem;
  }

  @media screen and (max-width: 1232px){
    font-size: 1.2rem;
  }

  @media screen and (max-width: 1024px){
    font-size: .9rem;
  }

  @media screen and (max-width: 768px){
    font-size: 1.4rem;
  }

  @media screen and (max-width: 596px){
    font-size: 1.1rem;
  }
`

export const Icon = styled.img`
  width: 30px;
  filter: invert(99%) sepia(1%) saturate(4869%) hue-rotate(212deg) brightness(119%) contrast(77%);
  transition: all .2s ease;

  @media screen and (max-width: 1232px){
    width: 25px;
  }
`

export const BoxButton = styled(Link)`
  background-color: ${coloresV2.colorTextos};
  color: ${coloresV2.colorPrincipal};
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 10px 10px 30px;
  border: 1px solid ${coloresV2.colorTextos};
  border-radius: 100px;
  gap: 20px;
  margin-top: 12px;
  transition: all .2s ease;

  &:hover{
    background-color: ${coloresV2.colorPrincipal};
    color: ${coloresV2.colorTextos};
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);
  }

  &:hover ${Icon} {
    filter: invert(11%) sepia(12%) saturate(27%) hue-rotate(314deg) brightness(93%) contrast(79%);
  }

  @media screen and (max-width: 1232px){
    margin-top: 10px;
    gap: 12px;
  }

  @media screen and (max-width: 1024px){
    padding: 5px 5px 5px 20px;
    margin-top: 7px;
  }

  @media screen and (max-width: 768px){
    padding: 10px 10px 10px 20px;
    margin-top: 10px;
    /* display: none; */
  }

  @media screen and (max-width: 596px){
    padding: 7px 7px 7px 20px;
  }
`

export const TextButton = styled.span`
  font-family: ${fonts.MainTypography};
  font-size: 1.4rem;

  @media screen and (max-width: 1535px){
    font-size: 1.3rem;
  }

  @media screen and (max-width: 1232px){
    font-size: 1rem;
  }

  @media screen and (max-width: 768px){
    font-size: 1.4rem;
  }

  @media screen and (max-width: 596px){
    font-size: 1.1rem;
  }
`

export const BoxImage = styled.div`
  width: 50%;
  display: flex;

  @media screen and (max-width: 768px){
    width: 100%;
    order: 1;
    border-bottom: 1px solid ${coloresV2.colorTextos};
  }
`

export const Image = styled.img`
  width: 100%;
`