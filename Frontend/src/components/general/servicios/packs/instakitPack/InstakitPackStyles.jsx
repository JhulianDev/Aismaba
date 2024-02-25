import styled from "styled-components"
import { fonts } from "../../../../../assets/fonts/FontsHandler"
import { coloresV2 } from "../../../../../assets/css/Colors"
import { Link } from "react-router-dom"

export const Title = styled.h1`
  font-family: ${fonts.MainTypography};
  color: ${coloresV2.colorTextos};
  font-size: 3.5rem;
  text-align: center;

  @media screen and (max-width: 1535px){
    font-size: 3rem;
  }

  @media screen and (max-width: 1024px){
    font-size: 2.5rem;
  }

  @media screen and (max-width: 425px){
    font-size: 2rem;
  }
`

export const Subtitle = styled.h2`
  font-family: ${fonts.SecondaryTypography};
  color: ${coloresV2.colorTextos};
  font-size: 2.1rem;
  font-weight: 400;
  text-align: center;
  margin-top: 10px;

  @media screen and (max-width: 1024px){
    font-size: 1.8rem;
  }

  @media screen and (max-width: 768px){
    margin: -30px 0;
  }

  @media screen and (max-width: 425px){
    font-size: 1.7rem;
    margin: -20px 0;
  }
`

export const ContainerPack = styled.div`
  background-color: ${coloresV2.colorSecundario};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: fit-content;
  margin-top: 40px;
  border-radius: 7px;
  gap: 20px;
  padding: 40px;
  position: relative;

  @media screen and (max-width: 1024px){
    padding: 40px 30px;
  }

  @media screen and (max-width: 768px){
    margin-top: 20px;
  }
`

export const BoxPrice = styled.div`
  background-color: ${coloresV2.colorTextos};
  color: ${coloresV2.colorPrincipal};
  width: fit-content;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  padding: 0 20px;
  border-radius: 7px;
  gap: 5px;
  position: absolute;
  right: 0;
  top: -30px;

  @media screen and (max-width: 768px){
    height: 50px;
    padding: 0 10px;
  }
`

export const Sign = styled.span`

`

export const Price = styled.span`
  font-size: 3rem;

  @media screen and (max-width: 768px){
    font-size: 2rem;
  }
`

export const Currency = styled.span`
  font-size: .8rem;
`

export const SubtitlePack = styled.h3`
  font-family: ${fonts.MainTypography};
  font-size: 2rem;

  @media screen and (max-width: 425px){
    font-size: 1.7rem;
  }
`

export const ContainerItems = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  width: 100%;
  gap: 20px;

  @media screen and (max-width: 1232px){
    grid-template-columns: auto auto;
  }

  @media screen and (max-width: 768px){
    grid-template-columns: auto;
  }
`

export const BoxItem = styled.div`
  width: 100%;
  border: 1px solid ${coloresV2.colorTextos};
  border-radius: 7px;
  padding: 15px 20px 13px;

  @media screen and (max-width: 1024px){
    padding: 15px 12px 13px;
  }
`

export const BoxBonus = styled.div`
  width: 100%;
  border: 1px solid ${coloresV2.colorTextos};
  border-radius: 7px;
  padding: 15px 20px 13px;
  grid-column: 2 / 4;

  @media screen and (max-width: 1232px){
    grid-column: 1 / 3;
  }

  @media screen and (max-width: 1024px){
    padding: 15px 12px 13px;
  }

  @media screen and (max-width: 768px){
    grid-column: 1 / 2;
  }
`

export const ItemPack = styled.span`
  font-family: ${fonts.SecondaryTypography};
  font-size: 1rem;
  white-space: nowrap;

  @media screen and (max-width: 1024px){
    white-space: normal;
  }
`

export const Button = styled(Link)`
  background-color: ${coloresV2.colorTextos};
  color: white;
  font-family: ${fonts.MainTypography};
  font-size: 1.4rem;
  text-align: center;
  width: 100%;
  padding: 10px;
  border: 1px solid ${coloresV2.colorTextos};
  border-radius: 100px;
  cursor: pointer;
  transition: all .2s ease-in-out;

  &:hover{
    background-color: ${coloresV2.colorPrincipal};
    color: ${coloresV2.colorTextos} ;
  }

  &:active{
    background-color: ${coloresV2.colorSecundario};
  }
`