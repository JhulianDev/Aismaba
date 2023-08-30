import styled, { css } from "styled-components"
import { colores } from "../../../assets/css/Colors"

const textStyles = css`
  font-family: Cinzel;
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: .2rem;
  text-align: left;
  padding-top: 2px;

  @media screen and (max-width: 425px){
    font-size: 1rem;
  }
`

export const ItemBox = styled.div`
  color: ${colores.colorAcento};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  border-bottom: solid 2px ${colores.colorAcento};

  @media screen and (max-width: 768px){
    padding: 10px 20px 10px 10px;
  }
`

export const ItemDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 10%;
  margin-right: 10px;

  @media screen and (max-width: 768px){
    width: 15%;
  }

  @media screen and (max-width: 375px){
    display: none;
  }
`

export const ItemImg = styled.img`
  width: 100%;
` 

export const ItemName = styled.span`
  ${textStyles};
  width: 50%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const ItemPrice = styled.span`
  ${textStyles};
  width: 22%;
`

export const BoxIcon = styled.div`
  display: flex;
  justify-content: center;
  width: 5%;
`

export const DeleteIcon = styled.img`
  width: 40%;
  cursor: pointer;

  @media screen and (max-width: 1024px){
    width: 60%;
  }

  @media screen and (max-width: 768px){
    width: 100%;
  }
`