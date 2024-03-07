import styled from "styled-components"
import { fonts } from "../../../../../assets/fonts/FontsHandler"
import { coloresV2 } from "../../../../../assets/css/Colors"
import { Link } from "react-router-dom"

export const BoxTexts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`

export const Title = styled.h1`
  background-color: ${(props) => 
    (props.$type === "A" ? coloresV2.colorPrincipal : 
    (props.$type === "B" ? coloresV2.colorSecundario : "inherit"
  ))};
  font-family: ${fonts.MainTypography};
  color: ${coloresV2.colorTextos};
  font-size: 3rem;
  font-weight: 100;
  text-align: center;
  padding: 10px 27px 2px;
  border-radius: 7px;
  border: 1px solid ${coloresV2.colorTextos};

  @media screen and (max-width: 1535px){
    font-size: 2.8rem;
  }

  @media screen and (max-width: 1024px){
    font-size: 2.5rem;
  }

  @media screen and (max-width: 1024px){
    font-size: 2.3rem;
  }

  @media screen and (max-width: 425px){
    font-size: 2.1rem;
  }
`

export const Note = styled.span`
  background-color: ${coloresV2.colorTextos} ;
  font-family: ${fonts.SecondaryTypography};
  color: ${coloresV2.colorSecundario};
  text-align: center;
  font-size: .9rem;
  padding: 8px 10px 6px;
  border-radius: 7px;

  @media screen and (max-width: 768px){
    margin-bottom: 10px;
    font-size: .7rem;
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
    font-size: 1.6rem;
  }
`

export const MainBoxPack = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border: 1px solid ${coloresV2.colorTextos};
  border-radius: 7px;
  margin-top: 40px;
  position: relative;

  @media screen and (max-width: 768px){
    grid-template-columns: repeat(1, 1fr);
    border-radius: 0 0 7px 7px;
    margin-top: 60px;
  }
`

export const BoxItems = styled.ul`
  display: grid;
  grid-template-rows: repeat(10, 1fr);
  border-right: 1px solid ${coloresV2.colorTextos};

  li:not(:last-child) {
    border-bottom: 1px solid ${coloresV2.colorTextos};
  }

  @media screen and (max-width: 768px){
    border-right: none;

    li {
      border-bottom: 1px solid ${coloresV2.colorTextos};
    }
  }
`

export const Item = styled.li`
  display: ${(props) => props.$mobile ? "none" : "flex"};
  align-items: center;
  list-style: none;
  padding: 13px 20px 9px 20px;
  gap: 10px;

  @media screen and (max-width: 768px){
    display: ${(props) => props.$mobile && "flex"};
  }
`

export const ItemTitle = styled.h2`
  width: 100%;
  font-family: ${fonts.MainTypography};
  text-align: center;
`

export const Number = styled.span`
  font-family: ${fonts.SecondaryTypography};
  font-weight: bold;
  font-size: 1.5rem;
  white-space: nowrap;
`

export const Description = styled.span`
  font-family: ${fonts.SecondaryTypography};
  font-size: 1.1rem;
  text-transform: uppercase;
`

export const BoxAdditionals = styled.div`
  background-color: ${(props) => 
    (props.$type === "A" ? coloresV2.colorPrincipal : 
    (props.$type === "B" ? coloresV2.colorSecundario : "inherit"
  ))};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 0 7px 7px 0;
  padding: 40px;
  gap: 20px;
  overflow: hidden;

  @media screen and (max-width: 768px){
    border-radius: 0 0 7px 7px;
    padding: 40px 20px;
    gap: 17px;
  }
`

export const AdditionalsTitle = styled.h2`
  font-family: ${fonts.MainTypography};
  font-size: 2.6rem;
  font-weight: 100;
`

export const BoxItemsAditionals = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const ItemAditional = styled.li`
  display: flex;
  align-items: center;
  list-style: none;
`

export const AdditionalDescription = styled.span`
  font-family: ${fonts.SecondaryTypography};
  font-size: 1.2rem;
  list-style: none;
  margin-left: 5px;
`

export const BoxPrice = styled.div`
  background-color: ${coloresV2.colorTextos};
  color: ${(props) => 
    (props.$type === "A" ? coloresV2.colorSecundario : 
    (props.$type === "B" ? coloresV2.colorPrincipal : "inherit"
  ))};
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
  right: -1px;
  top: -30px;

  @media screen and (max-width: 768px){
    width: calc(100% + 2px);
    height: 70px;
    left: -1px;
    top: -70px;
    padding: 0 10px;
    border-radius: 7px 7px 0 0;
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

export const Button = styled(Link)`
  background-color: ${coloresV2.colorTextos};
  color: white;
  font-family: ${fonts.MainTypography};
  font-size: 1.4rem;
  text-align: center;
  width: 100%;
  padding: 10px;
  border: 1px solid ${coloresV2.colorTextos};
  border-radius: 7px;
  margin-top: 12px;
  cursor: pointer;
  transition: all .2s ease-in-out;

  &:hover{
    background-color: ${(props) => 
      (props.$type === "A" ? coloresV2.colorPrincipal : 
      (props.$type === "B" ? coloresV2.colorSecundario : "inherit"
    ))};
    color: ${coloresV2.colorTextos};
  }

  &:active{
    background-color: ${coloresV2.colorSecundario};
  }
`