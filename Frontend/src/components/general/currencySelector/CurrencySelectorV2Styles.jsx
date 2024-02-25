import styled from "styled-components";
import { coloresV2 } from "../../../assets/css/Colors";
import { fonts } from "../../../assets/fonts/FontsHandler";

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 10px;
`

export const BoxCurrency = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #30303028;
  border: ${(props) => props.$selected && `2px solid ${coloresV2.colorTextos}`};
  border-radius: 6px;
  padding: 5px;
  gap: 5px;
  cursor: pointer;
  transition: all .2s ease-in-out;

  &:hover{
    border-color: ${(props) => !props.$selected && "#30303081"};
  }
`

export const Icon = styled.img`
  width: 30px;
  display: flex;

  @media screen and (max-width: 425px){
    width: 24px;
  }
`

export const Currency = styled.span`
  font-family: ${fonts.SecondaryTypography};
  color: ${coloresV2.colorTextos};
  margin-bottom: -4px;

  @media screen and (max-width: 425px){
    font-size: .81rem;
  }
`