import styled, { css } from "styled-components"
import { Link } from "react-router-dom"
import { colores } from "../../../../assets/css/Colors"

const buttonTypeA = css`
  background-color: ${colores.colorAcento};
  color: white;
`

const buttonTypeB = css`
  background-color: transparent;
  color: ${colores.colorAcento};
  border: solid 1px ${colores.colorAcento};
`

export const BoxButton = styled.div`
  ${({ $type }) => ($type === 'B' ? buttonTypeB : buttonTypeA)}
  width: 100%;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  margin-top: ${(props) => props.$top || 0};
`

export const ButtonIcon = styled.img`
  position: absolute;
  width: 18px;
  left: 18px;

  @media screen and (max-width: 768px){
    left: 22px;
  }

  @media screen and (max-width: 375px){
    display: none;
  }
`

export const ButtonLink = styled(Link)`
  width: 100%;
  height: 100%;
  color: inherit;
  font-family: Cinzel;
  font-size: 1.2rem;
  letter-spacing: .1rem;
  padding-bottom: 1px;
  padding: 12px 20px;
`