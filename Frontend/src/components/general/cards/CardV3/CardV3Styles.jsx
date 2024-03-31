import { Link } from "react-router-dom";
import styled from "styled-components";
import { coloresV2 } from "../../../../assets/css/Colors";
import { fonts } from "../../../../assets/fonts/FontsHandler";

export const CardContainer = styled.div`
  background-color: ${coloresV2.colorPrincipal};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${coloresV2.colorTextos};
  border-radius: 24px;
  position: relative;
  overflow: hidden;
  margin: 20px 0;

  @media screen and (max-width: 768px){
    flex-direction: column;
    padding: 40px 20px;
    gap: 20px;
    margin: 0;
    border-radius: 12px;
  }
`

export const Shadow = styled.img`
  width: 100%;
  height: 100%;
  opacity: .4;
  position: absolute;
  top: 0;
`

export const BoxTexts = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 10px;

  @media screen and (max-width: 768px){
    width: 100%;
    order: 2;
  }
`

export const Quotes = styled.img`
  width: 47px;

  @media screen and (max-width: 768px){
    display: none;
  }
`

export const Title = styled.h1`
  font-family: ${fonts.MainTypography};
  font-size: 2.5rem;

  @media screen and (max-width: 1535px){
    font-size: 2rem;
  }

  @media screen and (max-width: 1232px){
    font-size: 1.7rem;
  }

  @media screen and (max-width: 1024px){
    font-size: 1.4rem;
  }

  @media screen and (max-width: 768px){
    font-size: 2rem;
  }

  @media screen and (max-width: 596px){
    font-size: 1.6rem;
  }
`

export const Subtitle = styled.h2`
  font-family: ${fonts.SecondaryTypography};
  font-size: 1.1rem;
  font-weight: 100;

  @media screen and (max-width: 1535px){
    font-size: 1rem;
  }

  @media screen and (max-width: 1232px){
    font-size: .9rem;
  }

  @media screen and (max-width: 1024px){
    font-size: .7rem;
    font-weight: bold;
  }

  @media screen and (max-width: 768px){
    font-size: 1rem;
  }

  @media screen and (max-width: 596px){
    font-size: .8rem;
  }
`

export const Button = styled(Link)`
  background-color: ${coloresV2.colorTextos};
  color: white;
  font-family: ${fonts.MainTypography};
  font-size: 1.3rem;
  padding: 10px 20px;
  border: 1px solid ${coloresV2.colorTextos};
  border-radius: 100px;
  margin-top: 10px;
  z-index: 1;
  transition: all .3s ease;

  &:hover{
    background-color: white;
    color: ${coloresV2.colorTextos};
    font-weight: bold;
  }

  @media screen and (max-width: 1535px){
    margin-top: 5px;
  }

  @media screen and (max-width: 1232px){
    margin-top: 0px;
    font-size: 1.2rem;
  }

  @media screen and (max-width: 1024px){
    margin-top: 0px;
    font-size: 1.1rem;
  }

  @media screen and (max-width: 768px){
    font-size: 1.3rem;
  }
`

export const BoxImage = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 0;

  @media screen and (max-width: 768px){
    width: 100%;
    order: 1;
    padding: 0;
  }
`

export const Image = styled.img`
  width: 80%;
`