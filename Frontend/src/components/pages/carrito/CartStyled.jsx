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

export const CartSection = styled.section`
  display: flex;
  align-items: top;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  padding: 120px 60px 60px;
  overflow: hidden;

  @media screen and (max-width: 768px){
    padding: 120px 20px 60px;
  }
`

export const CartMaxWidth = styled.div`
  max-width: 1200px;
  width: 100%;

  @media screen and (max-width: 1440px){
    max-width: 934px;
  }
`

export const CartBoxTable = styled.div`
  background-color: #f7f5f3;
  border: solid 2px ${colores.colorAcento};
  border-width: 2px 2px 0;
`

export const TableHeader = styled.div`
  background-color: ${colores.colorPrincipal};
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  border-bottom: solid 2px ${colores.colorAcento};

  @media screen and (max-width: 768px){
    padding: 10px 20px 10px 10px;
  }
`

export const TextProducto = styled.span`
  ${textStyles};
  width: 50%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const TextPrecio = styled.span`
  ${textStyles};
  width: 22%;
`

export const TableBoxProduct = styled.div`
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

export const TableDiv = styled.div`
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

export const ProductImg = styled.img`
  width: 100%;
`

export const TableBoxIcon = styled.div`
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
