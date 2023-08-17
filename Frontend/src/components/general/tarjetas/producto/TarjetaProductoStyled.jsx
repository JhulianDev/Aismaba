import styled, { css } from "styled-components"
import { Link } from "react-router-dom"
import { colores } from "../../../../assets/css/Colors"

const stylesFlecha = css`
  background-color: white;
  color: ${colores.colorAcento};
  box-shadow: 1px 4px 8px rgba(110,119,125,.5);
  border-radius: 30px;
  opacity: 0.7;
  transition: .2s ease;
  cursor: pointer;
  position: absolute;
  
  &:hover{
    opacity: 1;
    transform: scale(1.2);
  }
`

export const TarjetaProductoBox = styled.div`
  background-color: ${colores.colorFondo};
  max-width: 1200px;
  display: flex;
  border: 2px solid ${colores.colorAcento};
  border-radius: 10px;
  overflow: hidden;

  @media screen and (max-width: 1440px){
    max-width: 934px;
  }

  @media screen and (max-width: 768px){
    flex-direction: column;
    gap: 20px;
  }
`

export const SliderVentana = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 2px solid ${colores.colorAcento};
  position: relative;
  overflow: hidden;

  @media screen and (max-width: 768px){
    width: 100%;
    border-right: 0;
    border-bottom: 2px solid ${colores.colorAcento};
  }
`

export const SliderMovil = styled.div`
  display: flex;
  transform: ${({ $currentImage }) => `translateX(${$currentImage * -100}%)`};
  transition: transform 0.4s ease-in-out;
`

export const SliderImg = styled.img`
  width: 100%;
  display: flex;
`

export const SliderContadorBox = styled.div`
  background-color: white;
  color: ${colores.colorAcento};
  border: 1px solid ${colores.colorAcento};
  border-radius: 20px;
  padding: 5px 10px 4px;
  position: absolute;
  bottom: 20px;
  right: 20px;
  box-shadow: 1px 4px 8px rgba(110,119,125,.5);
`

export const SliderContador = styled.span`
  font-family: Roboto;
  user-select: none;
`

export const TarjetaProductoInfoBox = styled.div`
  background-color: ${colores.colorFondo};
  color: ${colores.colorAcento};
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 60px;
  gap: 10px;

  @media screen and (max-width: 1440px){
    padding: 0 50px;
  }

  @media screen and (max-width: 1024px){
    padding: 0 30px;
  }

  @media screen and (max-width: 768px){
    width: 100%;
  }

  @media screen and (max-width: 768px){
    padding: 0 50px 30px;
  }
`

export const TarjetaProductoBoxPrecio = styled.div`
  background-color: white;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 1px 8px 2px;

  @media screen and (max-width: 1440px){
    padding: 1px 8px;
  }
`

export const TarjetaProductoMoneda = styled.span`
  font-family: Cinzel;
  font-size: 1.2rem;
  margin-bottom: -3px;

  @media screen and (max-width: 1440px){
    margin-bottom: 0px;
  }

  @media screen and (max-width: 1024px){
    font-size: 1rem;
    margin-bottom: -2px;
  }
`

export const TarjetaProductoPrecio = styled.span`
  font-family: Cinzel;
  font-size: 1.6rem;

  @media screen and (max-width: 1440px){
    font-size: 1.4rem;
  }

  @media screen and (max-width: 1024px){
    font-size: 1.2rem;
  }
`

export const TarjetaProductoNombre = styled.h1`
  font-family: Cinzel;
  font-size: 1.6rem;
  text-align: center;

  @media screen and (max-width: 1440px){
    font-size: 1.4rem;
  }

  @media screen and (max-width: 1024px){
    font-size: 1.2rem;
  }

  @media screen and (max-width: 768px){
    font-size: 1.4rem;
  }
`

export const TarjetaProductoDescripcion = styled.p`
  font-family: Roboto;
  font-size: 1rem;
  line-height: 1.6rem;
  text-align: justify;
  margin: 8px;

  @media screen and (max-width: 1440px){
    margin: 0px 0 8px;
    font-size: .9rem;
    line-height: 1.4rem;
  }

  @media screen and (max-width: 1024px){
    font-size: .8rem;
    line-height: 1.2rem;
    margin: 0;
  }

  @media screen and (max-width: 768px){
    font-size: 1rem;
    margin-bottom: 5px;
  }
`

export const FlechaIzquierda = styled.svg`
  ${stylesFlecha};
  left: 16px;
`

export const FlechaDerecha = styled.svg`
  ${stylesFlecha};
  right: 16px;
`

export const AddToCartButton = styled(Link)`
  background-color: ${colores.colorAcento};
  color: white;
  padding: 12px 24px;
  border: 2px solid transparent;
  box-shadow: 1px 4px 8px rgba(110,119,125,.5);
  border-radius: 25px;
  font-family: Roboto;
  font-size: 1rem;
  text-align: center;
  transition: 0.3s;

  &:hover{
    background-color: white;
    color: ${colores.colorAcento};
    border: solid 2px ${colores.colorAcento};
  }

  @media screen and (max-width: 1024px){
    font-size: .9rem;
  }
`