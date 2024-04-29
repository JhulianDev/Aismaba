import styled from "styled-components";
import { Link } from "react-router-dom"
import { fonts } from "../../../../assets/fonts/FontsHandler";
import { coloresV2 } from "../../../../assets/css/Colors";

export const ContainerHero = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 12px;

  @media screen and (max-width: 768px){
    flex-direction: column;
    justify-content: center;
    margin-top: 60px;
  }

  @media screen and (max-width: 425px){
    margin-top: 40px;
  }
`

export const BoxTexts = styled.div`
  display: flex;
  flex-direction: column;
  color: ${coloresV2.colorTextos};
  font-family: ${fonts.MainTypography};
  width: 50%;

  @media screen and (max-width: 768px){
    text-align: center;
    align-items: center;
    width: 100%;
    margin-top: 20px;
    order: 2;
  }
`

export const Title = styled.h1`
  font-size: 4.3rem;
  margin-top: 10px;

  @media screen and (max-width: 1535px){
    font-size: 3.35rem;
  }

  @media screen and (max-width: 1232px){
    font-size: 2.74rem;
  }

  @media screen and (max-width: 1024px){
    font-size: 1.95rem;
  }

  @media screen and (max-width: 768px){
    font-size: 3.2rem;
    margin-top: 0px;
  }

  @media screen and (max-width: 596px){
    font-size: 2.3rem;
  }

  @media screen and (max-width: 425px){
    font-size: 2rem;
  }

  @media screen and (max-width: 375px){
    font-size: 1.6rem;
  }
`

export const Uppercase = styled.span`
  font-size: 5.2rem;

  @media screen and (max-width: 1535px){
    font-size: 4.05rem;
  }

  @media screen and (max-width: 1232px){
    font-size: 3.3rem;
  }

  @media screen and (max-width: 1024px){
    font-size: 2.36rem;
  }

  @media screen and (max-width: 768px){
    font-size: 3.7rem;
  }

  @media screen and (max-width: 596px){
    font-size: 2.7rem;
  }

  @media screen and (max-width: 425px){
    font-size: 2.2rem;
  }

  @media screen and (max-width: 375px){
    font-size: 1.9rem;
  }
`

export const Description = styled.p`
  font-family: ${fonts.SecondaryTypography};
  font-size: 1.7rem;

  @media screen and (max-width: 1535px){
    font-size: 1.5rem;
  }

  @media screen and (max-width: 1232px){
    font-size: 1.4rem;
  }

  @media screen and (max-width: 1024px){
    font-size: 1rem;
  }

  @media screen and (max-width: 768px){
    font-size: 1.5rem;
  }

  @media screen and (max-width: 596px){
    font-size: 1.3rem;
  }

  @media screen and (max-width: 425px){
    display: none;
  }
`

export const BoxButtons = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 17px;
  gap: 20px;

  @media screen and (max-width: 768px){
    justify-content: space-between;
    gap: 10px;
  }

  @media screen and (max-width: 596px){
    flex-direction: column;
  }
`

export const Button = styled(Link)`
  background-color: ${(props) => props.$bgColor};
  color: ${coloresV2.colorTextos};
  border: 1px solid ${coloresV2.colorTextos};
  border-radius: 7px;
  font-size: 1.3rem;
  font-weight: bold;
  text-align: center;
  padding: 10px 20px;
  transition: all .2s ease-in-out;

  &:hover{
    background-color: ${coloresV2.colorTextos};
    color: white;
  }

  @media screen and (max-width: 1232px){
    font-size: 1.1rem;
  }

  @media screen and (max-width: 768px){
    font-size: 1.4rem;
  }

  @media screen and (max-width: 596px){
    width: 100%;
  }
`

export const BoxImage = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 768px){
    width: 100%;
  }
`

export const Image = styled.img`
  width: 640px;
  display: ${(props) => props.$mobile ? "none" : "flex"};

  @media screen and (max-width: 1535px){
    width: 500px;
  }

  @media screen and (max-width: 1232px){
    width: 400px;
  }

  @media screen and (max-width: 1024px){
    width: 300px;
  }

  @media screen and (max-width: 768px){
    display: ${(props) => props.$mobile ? "flex" : "none"};
    width: 100%;
    margin-top: 30px;
  }
`