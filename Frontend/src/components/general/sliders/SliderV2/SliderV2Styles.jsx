import styled from "styled-components";
import { coloresV2 } from "../../../../assets/css/Colors";
import { fonts } from "../../../../assets/fonts/FontsHandler";

export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  border: 1px solid ${coloresV2.colorTextos};
  border-radius: 7px;
  overflow: hidden;
  margin-top: 30px;

  @media screen and (max-width: 1535px){
    width: 90%;
  }

  @media screen and (max-width: 1232px){
    flex-direction: column;
    width: 80%;
  }

  @media screen and (max-width: 1024px){
    width: 100%;
  }
`

export const WindowSlider = styled.div`
  width: 60%;
  display: flex;
  overflow: hidden;
  position: relative;

  @media screen and (max-width: 1232px){
    width: 100%;
  }
`

export const MovilSlider = styled.div`
  width: 100%;
  display: flex;
  transform: ${({ $currentImage }) => `translateX(${$currentImage * -100}%)`};
  transition: transform 0.6s ease-in-out;
`

export const Image = styled.img`
  width: 100%;
  border-right: 1px solid ${coloresV2.colorTextos};

  @media screen and (max-width: 1232px){
    border-right: none;
    border-bottom: 1px solid ${coloresV2.colorTextos};
  }
`

export const Arrow = styled.img`
  background-color: ${coloresV2.colorPrincipal};
  border: 1px solid ${coloresV2.colorTextos};
  width: 40px;
  border-radius: 100px;
  padding: 10px;
  position: absolute;
  top: 50%;
  transform: 
    translateY(-50%) 
    ${(props) => (
      props.$left ? "rotate(90deg)" : 
      props.$right ? "rotate(-90deg)" : 
      "rotate(0deg)"
    )};
  right: ${(props) => props.$right && "20px"};
  left: ${(props) => props.$left && "20px"};
  opacity: .8;
  cursor: pointer;
  transition: all .2s ease;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5) ;

  &:hover {
    opacity: 1;
    transform: 
      translateY(-50%) 
      ${(props) => (
        props.$left ? "rotate(90deg) scale(1.2)" : 
        props.$right ? "rotate(-90deg) scale(1.2)" : 
        "rotate(0deg) scale(1.2)"
      )};
  }
`;

export const BoxCounter = styled.div`
  background-color: white;
  color: ${coloresV2.colorTextos};
  border: 1px solid ${coloresV2.colorTextos};
  border-radius: 20px;
  padding: 5px 10px 3px;
  position: absolute;
  bottom: 20px;
  right: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
`

export const Counter = styled.span`
  font-family: ${fonts.SecondaryTypography};
  user-select: none;
`

export const BoxTexts = styled.div`
  background-color: ${coloresV2.colorPrincipal};
  color: ${coloresV2.colorTextos};
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 70px;

  @media screen and (max-width: 1535px){
    padding: 60px;
  }

  @media screen and (max-width: 1232px){
    padding: 50px;
    width: 100%;
  }

  @media screen and (max-width: 596px){
    padding: 30px;
  }
`

export const BoxPrice = styled.div`
  background-color: ${coloresV2.colorSecundario};
  padding: 10px 15px;
  border-radius: 7px;
`

export const Price = styled.span`
  font-family: ${fonts.MainTypography};
  font-weight: bold;
  font-size: 1.2rem;
`

export const Title = styled.h1`
  font-family: ${fonts.MainTypography};
  font-size: 2rem;
  margin-top: 15px;
  text-align: center;

  @media screen and (max-width: 1535px){
    font-size: 1.8rem;
    margin-top: 10px;
  }

  @media screen and (max-width: 1232px){
    font-size: 1.6rem;
  }

  @media screen and (max-width: 596px){
    font-size: 2rem;
  }
`

export const Description = styled.p`
  font-family: ${fonts.SecondaryTypography};
  font-size: 1.3rem;
  text-align: justify;
  line-height: 1.7rem;
  margin-top: 10px;

  @media screen and (max-width: 1535px){
    font-size: 1.1rem;
  }

  @media screen and (max-width: 1232px){
    font-size: 1.2rem;
  }

  @media screen and (max-width: 596px){
    font-size: 1rem;
  }
`

export const Button = styled.button`
  background-color: ${coloresV2.colorTextos};
  color: ${coloresV2.colorSecundario};
  font-family: ${fonts.SecondaryTypography};
  border: 1px solid ${coloresV2.colorTextos};
  padding: 10px 20px;
  border-radius: 100px;
  margin-top: 15px;
  cursor: pointer;
  transition: all .2s ease-out;

  &:hover{
    background-color: ${coloresV2.colorSecundario};
    color: ${coloresV2.colorTextos};
  }

  @media screen and (max-width: 1535px){
    margin-top: 10px;
  }
`