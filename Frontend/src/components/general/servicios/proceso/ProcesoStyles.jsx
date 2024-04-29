import styled, { css } from "styled-components";
import { coloresV2 } from "../../../../assets/css/Colors";
import { fonts } from "../../../../assets/fonts/FontsHandler";

const titleStyles = css`
  grid-column: 1/5;
  border-bottom: 1px solid ${coloresV2.colorTextos};

  @media screen and (max-width: 1232px){
    grid-column: 1/4;
  }

  @media screen and (max-width: 1024px){
    grid-column: 1/3;
  }

  @media screen and (max-width: 596px){
    grid-column: 1/2;
  }
`
const imageStyles = css`

  @media screen and (max-width: 1232px){
    grid-column: 2/4;
  }

  @media screen and (max-width: 1024px){
    grid-column: 2/3;
  }

  @media screen and (max-width: 596px){
    grid-column: 1/2;
  }
`

export const MainContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border: 1px solid ${coloresV2.colorTextos};
  border-bottom: none;
  border-radius: 7px;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.3);
  overflow: hidden;

  & > div:nth-child(2),
  & > div:nth-child(3),
  & > div:nth-child(4),
  & > div:nth-child(6),
  & > div:nth-child(7),
  & > div:nth-child(8) {
    border-right: 1px solid ${coloresV2.colorTextos};
  }

  @media screen and (max-width: 1232px){
    grid-template-columns: repeat(3, 1fr);

    & > div:nth-child(7),
    & > div:nth-child(4) {
      border-right: none;
    }

    & > div:nth-child(5) {
      border-right: 1px solid ${coloresV2.colorTextos};
    }
  }

  @media screen and (max-width: 1024px){
    grid-template-columns: repeat(2, 1fr);

    & > div:nth-child(3),
    & > div:nth-child(5) {
      border-right: none;
    }

    & > div:nth-child(4) {
      border-right: 1px solid ${coloresV2.colorTextos};
    }
  }

  @media screen and (max-width: 596px){
    grid-template-columns: repeat(1, 1fr);

    & > div:nth-child(2),
    & > div:nth-child(4),
    & > div:nth-child(6),
    & > div:nth-child(8) {
      border-right: none;
    }
  }
`

export const Box = styled.div`
  ${props => props.$title && titleStyles}
  ${props => props.$image && imageStyles}
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: start;
  font-family: ${fonts.MainTypography};
  padding: ${(props) => props.$image ? "0px" : "30px"};
  border-bottom: 1px solid ${coloresV2.colorTextos};
`

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: 100;

  @media screen and (max-width: 768px){
    text-align: center;
  }
`

export const Step = styled.span`
  font-size: 3rem;
`

export const Subtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 100;
  margin-bottom: 8px;
  text-transform: uppercase;
`

export const Description = styled.p`
  font-family: ${fonts.SecondaryTypography};
  text-align: justify;
  line-height: 1.3rem;
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`