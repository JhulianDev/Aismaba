import styled, { css } from "styled-components"
import { Link } from "react-router-dom"
import { colores } from "../../../../assets/css/Colors"

const styledSize = css`
  @media screen and (max-width: 1440px){
    width: 16.875rem;
    height: 16.875rem;
  }

  @media screen and (max-width: 1024px){
    width: 13.75rem;
    height: 13.75rem;
  }

  @media screen and (max-width: 768px){
    width: 18.75rem;
    height: 18.75rem;
  }
`

export const MockupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`

export const MockupLink = styled(Link)`
  width: 18.75rem;
  height: 18.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  ${styledSize};
`

export const MockupHover = styled.span`
  width: 18.75rem;
  height: 18.75rem;
  background-color: #bf9b7a88;
  position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: OpenSans;
  font-size: 22.4px;
  letter-spacing: 1.6px;
  color: white;

  border: solid .125rem ${colores.colorAcento};
  transition: all 0.4s ease;
  opacity: 0;

  &:hover{
    opacity: 1;
  }

  ${styledSize};
`

export const MockupImg = styled.img`
  width: 18.75rem;
  height: 18.75rem;
  border: solid .125rem ${colores.colorPrincipal};
  ${styledSize};
`

export const MockupTitulo = styled.h1`
  font-family: Cinzel;
  font-size: 17.6px;
  letter-spacing: 1.6px;
  text-align: center;
  color: ${colores.colorPrincipal};

  @media screen and (max-width: 1440px){
    font-size: 16px;
  }

  @media screen and (max-width: 1024px){
    font-size: 12.8px;
  }

  @media screen and (max-width: 768px){
    font-size: 17.6px;
  }
`