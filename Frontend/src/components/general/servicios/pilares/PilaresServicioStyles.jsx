import styled, { css } from "styled-components";
import { coloresV2 } from "../../../../assets/css/Colors";
import { fonts } from "../../../../assets/fonts/FontsHandler";

const presentationStyles = css`
  grid-column: 1/3;

  @media screen and (max-width: 1024px){
    grid-column: 1/2;
  }
`

const titleStyles = css`
  grid-column: 3/5;
  background-color: ${coloresV2.colorPrincipal};

  @media screen and (max-width: 1024px){
    grid-column: 2/3;
  }

  @media screen and (max-width: 768px){
    grid-column: 1/2;
  }
`

export const MainContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: space-between;
  gap: 20px;

  @media screen and (max-width: 1024px){
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 768px){
    grid-template-columns: auto;
  }
`

export const Box = styled.div`
  ${props => props.$presentation && presentationStyles}
  ${props => props.$title && titleStyles}
  color: ${coloresV2.colorTextos};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${(props) => props.$description ? "flex-start" : "center"};
  border-radius: 7px;
  border: 1px solid ${coloresV2.colorTextos};
  padding: ${(props) => props.$description ? "50px" : "30px"};
  gap: 10px;
  position: relative;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.3);

  @media screen and (max-width: 1535px){
    padding: ${(props) => props.$description ? "35px" : "30px"};
  }

  @media screen and (max-width: 768px){
    max-width: 100%;
  }

  @media screen and (max-width: 320px){
    overflow: hidden;
  }
`

export const Presentation = styled.p`
  font-family: ${fonts.MainTypography};
  font-size: 1.8rem;
  font-weight: 100;
  text-align: center;

  @media screen and (max-width: 1535px){
    font-size: 1.4rem;
  }

  @media screen and (max-width: 1232px){
    font-size: 1.1rem;
  }

  @media screen and (max-width: 1024px){
    font-size: 1rem;
  }

  @media screen and (max-width: 768px){
    font-size: 1.4rem;
  }
`

export const Title = styled.h1`
  font-family: ${fonts.MainTypography};
  font-size: 3rem;
  font-weight: 100;
  text-align: center;

  @media screen and (max-width: 1535px){
    font-size: 2.6rem;
  }

  @media screen and (max-width: 1232px){
    font-size: 2.2rem;
  }

  @media screen and (max-width: 1024px){
    font-size: 1.4rem;
  }

  @media screen and (max-width: 768px){
    font-size: 2rem;
  }

  @media screen and (max-width: 596px){
    font-size: 1.8rem;
  }
`

export const Subtitle = styled.h2`
  width: 100%;
  font-family: ${fonts.MainTypography};
  font-size: 1.2rem;
  text-align: center;
  text-transform: uppercase;

  @media screen and (max-width: 1535px){
    font-size: 1rem;
  }

  @media screen and (max-width: 768px){
    font-size: 1.2rem;
  }
`

export const Description = styled.p`
  font-family: ${fonts.SecondaryTypography};
  font-size: 1.1rem;
  line-height: 1.6rem;
  text-align: justify;
  text-wrap: pretty;
  hyphens: auto;

  @media screen and (max-width: 1535px){
    font-size: 1rem;
  }
`

export const ClipIcon = styled.img`
  width: 20px;
  position: absolute;
  left: 20px;
  top: -4px;

  @media screen and (max-width: 1535px){
    width: 16px;
    left: 15px;
  }
`

export const PushpinIcon = styled.img`
  width: 20px;
  position: absolute;
  right: 18px;
  top: 18px;
  display: none;
`