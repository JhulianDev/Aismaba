import styled from "styled-components";
import { Link } from "react-router-dom"
import { fonts } from "../../../../assets/fonts/FontsHandler";
import { coloresV2 } from "../../../../assets/css/Colors";

export const ContainerHero = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;

  @media screen and (max-width: 768px){
    flex-direction: column;
    justify-content: center;
  }
`

export const BoxTexts = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  gap: 7px;

  @media screen and (max-width: 768px){
    width: 100%;
    order: 2;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 20px;
  }
`

export const BoxTag = styled.div`
  display: ${(props) => props.$mobile ? "none" : "flex"};
  background-color: ${coloresV2.colorPrincipal};
  width: fit-content;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 100px;
  padding: 5px 20px;
  gap: 10px;

  @media screen and (max-width: 768px){
    display: ${(props) => props.$mobile ? "flex" : "none"};
    padding: 10px 20px;
    border: 1px solid ${coloresV2.colorTextos};
  }
`

export const Tag = styled.h1`

  color: ${coloresV2.colorTextos};
  font-family: ${fonts.SecondaryTypography};
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: -3px;

  @media screen and (max-width: 1535px){
    font-size: .9rem;
  }

  @media screen and (max-width: 1024px){
    font-size: .8rem;
  }

  @media screen and (max-width: 768px){
    font-size: .9rem;
  }
`

export const Icon = styled.img`
  width: 10px;
`

export const Title = styled.h2`
  font-family: ${fonts.MainTypography};
  font-size: 4rem;
  color: ${coloresV2.colorTextos};

  @media screen and (max-width: 1535px){
    font-size: 3.3rem;
  }

  @media screen and (max-width: 1232px){
    font-size: 2.5rem;
  }

  @media screen and (max-width: 1024px){
    font-size: 1.8rem;
  }

  @media screen and (max-width: 768px){
    font-size: 3rem;
  }

  @media screen and (max-width: 596px){
    font-size: 2.2rem;
  }
`

export const Description = styled.p`
  font-family: ${fonts.SecondaryTypography};
  font-size: 1.8rem;
  color: ${coloresV2.colorTextos};

  @media screen and (max-width: 1535px){
    font-size: 1.4rem;
  }

  @media screen and (max-width: 1024px){
    font-size: 1rem;
  }

  @media screen and (max-width: 768px){
    font-size: 1.4rem;
  }
`

export const Button = styled(Link)`
  width: fit-content;
  background-color: ${coloresV2.colorTextos};
  color: white;
  font-family: ${fonts.MainTypography};
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  padding: 10px 30px;
  border: 1px solid ${coloresV2.colorTextos};
  border-radius: 7px;
  margin-top: 10px;
  transition: all .2s ease-in-out;
  
  &:hover{
    background-color: ${coloresV2.colorPrincipal};
    color: ${coloresV2.colorTextos};
  }

  @media screen and (max-width: 1535px){
    font-size: 1.4rem;
  }

  @media screen and (max-width: 1232px){
    font-size: 1.3rem;
    margin-top: 5px;
  }

  @media screen and (max-width: 1024px){
    font-size: 1.1rem;
  }

  @media screen and (max-width: 768px){
    font-size: 1.4rem;
    margin-top: 10px;
    border-radius: 100px;
  }
`

export const BoxImage = styled.div`
  width: 50%;

  @media screen and (max-width: 768px){
    width: 100%;
    order: 1;
    margin-top: 30px;
  }
`

export const Image = styled.img`
  width: 100%;
`