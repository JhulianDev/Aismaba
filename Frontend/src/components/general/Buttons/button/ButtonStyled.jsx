import styled, { css } from "styled-components"
import { Link } from "react-router-dom"
import { colores } from "../../../../assets/css/Colors"

const buttonStyleA = css`
  background-color: ${colores.colorAcento};
  color: white;
`

const buttonStyleB = css`
  background-color: transparent;
  color: ${colores.colorAcento};
  border: solid 1px ${colores.colorAcento};
`

const buttonTypeStyle = css`
  width: 100%;
  height: 100%;
  color: inherit;
  font-family: Cinzel;
  font-size: 1.2rem;
  letter-spacing: .1rem;
  padding-bottom: 1px;
  padding: 12px 20px;
  cursor: pointer;
`

export const BoxButton = styled.div`
  ${({ $style }) => ($style === 'B' ? buttonStyleB : buttonStyleA)}
  width: 100%;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
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
  ${buttonTypeStyle}
`

export const ButtonButton = styled.button`
  ${buttonTypeStyle}
  background-color: transparent;
  border: none;
`