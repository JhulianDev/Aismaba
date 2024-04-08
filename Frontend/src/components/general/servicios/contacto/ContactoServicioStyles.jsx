import { Link } from "react-router-dom";
import styled from "styled-components";
import { fonts } from "../../../../assets/fonts/FontsHandler";
import { coloresV2 } from "../../../../assets/css/Colors";

export const Parrafo = styled.p`
  font-family: ${fonts.MainTypography};
  font-size: 2rem;
  text-align: center;

  @media screen and (max-width: 1232px){
    font-size: 1.6rem;
  }
`

export const Button = styled(Link)`
  background-color: ${coloresV2.colorTextos};
  color: white;
  font-family: ${fonts.MainTypography};
  font-size: 1.4rem;
  text-align: center;
  padding: 12px 20px;
  margin-top: 20px;
  border-radius: 100px;
  border: 1px solid ${coloresV2.colorTextos};
  transition: all 0.2s ease-in-out;

  &:hover{
    background-color: white;
    color: ${coloresV2.colorTextos};
  }

  @media screen and (max-width: 1232px){
    font-size: 1.2rem;
  }

  @media screen and (max-width: 768px){
    margin-top: -18px;
  }
`