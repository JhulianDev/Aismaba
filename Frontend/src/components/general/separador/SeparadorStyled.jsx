import styled from "styled-components"
import { colores } from "../../../assets/css/Colors"

export const SeparadorMainContainer = styled.div`
  background-color: ${props => props.$bgColor || "white"};
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${props => (props.$padding ? "0 60px" : "0")};
  margin-top: ${props => props.$top || null};
  overflow: hidden;

  @media screen and (max-width: 1440px){
    height: 110px;
  }

  @media screen and (max-width: 1024px){
    height: 100px;
  }

  @media screen and (max-width: 768px){
    padding: ${props => (props.$padding ? "0 20px" : "0")};
    height: 80px;
  }
`
export const SeparadorBox = styled.div`
  width: 1200px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media screen and (max-width: 1440px){
    width: 934px;
  }
`

export const SeparadorLinea = styled.span`
  background-color: ${colores.colorAcento};
  width: 100%;
  height: 2px;
`

export const SeparadorTitulo = styled.h1`
  background-color: ${props => props.$bgColor || "white"};
  color: ${colores.colorAcento};
  font-size: 1rem;
  letter-spacing: 0.2rem;
  text-align: center;
  padding: 0 20px;
  position: absolute;

  @media screen and (max-width: 425px){
    font-size: .9rem;
  }

  @media screen and (max-width: 375px){
    padding: 0 10px;
  }
`
