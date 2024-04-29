import { Link } from "react-router-dom";
import styled from "styled-components";
import { coloresV2 } from "../../../../assets/css/Colors";
import { fonts } from "../../../../assets/fonts/FontsHandler";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${coloresV2.colorPrincipal};
  color: ${coloresV2.colorTextos};
  width: 400px;
  min-width: 340px;
  padding: 40px 30px;
  border: 1px solid ${coloresV2.colorTextos};
  border-radius: 10px;
  gap: 15px;

  @media screen and (max-width: 1535px){
    width: 340px;
  }

  @media screen and (max-width: 1232px){
    
  }
`

export const Tag = styled.span`
  width: fit-content;
  background-color: #ceb3a5;
  color: ${coloresV2.colorPrincipal};
  font-family: ${fonts.MainTypography};
  font-size: .8rem;
  letter-spacing: 2px;
  font-weight: bold;
  padding: 4px 10px 2px;
  border-radius: 5px;
`

export const Title = styled.h1`
  font-family: ${fonts.MainTypography};
  font-size: 2rem;
`

export const Description = styled.p`
  font-family: ${fonts.SecondaryTypography};
  font-size: 1rem;
`

export const BoxPrice = styled.div`
  background-color: #e2d4cb;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${fonts.MainTypography};
  text-align: center;
  font-weight: bold;
  border-radius: 7px;
  padding: 7px;
  gap: 7px;
`

export const Sign = styled.span`

`

export const Price = styled.span`
  font-size: 2.2rem;
`

export const Currency = styled.span`

`

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  gap: 10px;
`

export const BoxItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
`

export const Icon = styled.img`
  width: 15px;
  margin-top: -2px;
`

export const Item = styled.span`
  font-family: ${fonts.SecondaryTypography};
`

export const Button = styled(Link)`
  width: 100%;
  background-color: ${coloresV2.colorTextos};
  color: white;
  border: 1px solid ${coloresV2.colorTextos};
  font-family: ${fonts.MainTypography};
  font-size: 1.4rem;
  text-align: center;
  padding: 10px;
  border-radius: 7px;
  cursor: pointer;
  transition: all .2s ease-in-out;

  &:hover{
    background-color: #e2d4cb;
    color: ${coloresV2.colorTextos};
  }
`