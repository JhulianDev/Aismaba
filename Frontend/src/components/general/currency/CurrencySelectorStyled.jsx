import styled from "styled-components"
import { colores } from "../../../assets/css/Colors"

export const CurrencySelectorBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  gap: 30px;

  @media screen and (max-width: 375px){
    gap: 10px;
  }
`

export const Title = styled.h1`
  color: ${colores.colorAcento};
  font-family: Cinzel;
  font-size: 1.5rem;

  @media screen and (max-width: 768px){
    font-size: 1.2rem;
  }

  @media screen and (max-width: 425px){
    font-size: 1.1rem;
  }

  @media screen and (max-width: 375px){
    font-size: .9rem;
  }
`

export const BoxLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`

export const CurrencyInput = styled.input`
  accent-color: ${colores.colorAcento};
  cursor: pointer;
`

export const CurrencyImg = styled.img`
  width: 45px;
  border: solid 1px ${colores.colorAcento};
  padding: 2px;
  cursor: pointer;
  transition: .2s ease;

  &:hover{
    transform: scale(1.1);
  }
`