import styled from "styled-components"
import { Link } from "react-router-dom"
import { colores } from "../../../assets/css/Colors"

export const FooterContainer = styled.footer`
background-color: ${colores.colorSecundario};
  height: 150px;
  width: 100%;
  padding: 0 15px;
  overflow: hidden;

  @media screen and (max-width: 768px){
    height: 130px;
  }
`

export const FooterDiv = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${colores.colorBlanco};
`

export const FooterLinkInstagram = styled(Link)`
  display: flex;
`

export const FooterLogoInstagram = styled.img`
  width: 25px;
  height: 25px;
  cursor: pointer;
`

export const FooterCopyRight = styled.p`
  font-family: Cinzel;
  font-size: 16px;
  margin: 15px 0 20px;

  @media screen and (max-width: 1024px){
    font-size: 14.4px;
  }

  @media screen and (max-width: 768px){
    font-size: 11.2px;
  }

  @media screen and (max-width: 375px){
    font-size: 9.6px;
    margin: 10px 0 15px;
  }
`

export const FooterBoxLegales = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const FooterLinkLegales = styled(Link)`
color: ${colores.colorBlanco};
  font-family: Roboto;
  font-size: 16px;
  font-weight: 300;
  text-align: center;
  margin: 0 60px;
  cursor: pointer;

  @media screen and (max-width: 1024px){
    margin: 0 30px;
  }

  @media screen and (max-width: 768px){
    margin: 0 8px;
    font-size: 11.2px;
  }

  @media screen and (max-width: 375px){
    margin: 0 5px;
  }
`