import { Link } from "react-router-dom";
import styled from "styled-components";
import { coloresV2 } from "../../../../assets/css/Colors";
import { fonts } from "../../../../assets/fonts/FontsHandler";

export const Hover = styled.span`
  background-color: #30303068;
  color: white;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: ${fonts.MainTypography};
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: 2px;
  border-bottom: 1px solid #30303099;
  position: absolute;
  opacity: 0;
  transition: all .3s ease;
`

export const CardContainer = styled(Link)`
  background-color: ${coloresV2.colorPrincipal};
  border: 1px solid ${coloresV2.colorTextos};
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
  transition: all .3s ease;

  &:hover{
    transform: scale(1.03);
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);
  }

  &:hover ${Hover}{
    opacity: 1;
  }
`

export const BoxImage = styled.div`
  position: relative;
`

export const Image = styled.img`
  display: flex;
  width: 100%;
  border-bottom: 1px solid ${coloresV2.colorTextos};
`

export const BoxText = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 10px 5px 20px;

  @media screen and (max-width: 1232px){
    padding: 5px 10px 5px 15px;
  }
`

export const Title = styled.h1`
  font-family: ${fonts.MainTypography};
  font-size: 2rem;
  font-weight: 100;
  color: ${coloresV2.colorTextos};

  @media screen and (max-width: 1535px){
    font-size: 1.7rem;
  }

  @media screen and (max-width: 1232px){
    font-size: 1.35rem;
  }

  @media screen and (max-width: 768px){
    font-size: 2rem;
  }

  @media screen and (max-width: 596px){
    font-size: 1.7rem;
  }
`

export const Icon = styled.img`
  width: 30px;

  @media screen and (max-width: 596px){
    width: 27px;
  }
`