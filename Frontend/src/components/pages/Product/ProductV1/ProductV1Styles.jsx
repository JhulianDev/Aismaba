import styled from "styled-components";
import { fonts } from "../../../../assets/fonts/FontsHandler";
import { coloresV2 } from "../../../../assets/css/Colors";

export const Table = styled.div`
  border: 1px solid ${coloresV2.colorTextos};
  border-radius: 7px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 30px;

  & > *:not(:last-child) {
    border-bottom: 1px solid ${coloresV2.colorTextos};
  }

  @media screen and (max-width: 1535px){
    width: 90%;
  }

  @media screen and (max-width: 1232px){
    width: 80%;
  }

  @media screen and (max-width: 1024px){
    width: 100%;
  }

  @media screen and (max-width: 768px){
    margin-top: 0px;
  }

  @media screen and (max-width: 596px){
    
  }
`

export const Title = styled.h1`
  font-family: ${fonts.MainTypography};
  font-size: 2.2rem;
  padding:  20px;

  @media screen and (max-width: 1535px){
    font-size: 2.1rem;
  }

  @media screen and (max-width: 1232px){
    font-size: 2rem;
  }

  @media screen and (max-width: 1024px){
    font-size: 1.9rem;
  }
`

export const Item = styled.p`
  width: 100%;
  font-family: ${fonts.SecondaryTypography};
  font-size: 1.4rem;
  line-height: 1.6rem;
  padding: 20px;

  @media screen and (max-width: 1535px){
    font-size: 1.3rem;
  }

  @media screen and (max-width: 1232px){
    font-size: 1.2rem;
  }

  @media screen and (max-width: 1024px){
    font-size: 1.1rem;
  }
`