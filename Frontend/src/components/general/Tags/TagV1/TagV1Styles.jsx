import styled from "styled-components"
import { coloresV2 } from "../../../../assets/css/Colors"
import { fonts } from "../../../../assets/fonts/FontsHandler"

export const BoxTag = styled.div`
  display: ${(props) => props.$mobile ? "none" : "flex"};
  background-color: ${coloresV2.colorPrincipal};
  width: fit-content;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: ${(props) => props.$border && "1px solid #30303081"};
  border-radius: 100px;
  padding: 7px 22px 7px 20px;
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
  height: 15px;
`