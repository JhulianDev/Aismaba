import styled from "styled-components"
import { Link } from "react-router-dom"
import { colores } from "../../../../assets/css/Colors"

export const TarjetaMarcaBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  border-radius: 5px;
  overflow: hidden;

  @media screen and (max-width: 768px){
    flex-direction: column;
  }
`

export const TarjetaMarcaImg = styled.img`
  width: 60%;

  @media screen and (max-width: 768px){
    width: 100%;
  }
`

export const TarjetaMarcaBoxTextos = styled.div`
  background-color: ${colores.colorFondo};
  color: ${colores.colorAcento};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 60px;
  gap: 20px;

  @media screen and (max-width: 1440px){
    padding: 0 50px;
    gap: 14px;
  }

  @media screen and (max-width: 1024px){
    padding: 0 40px;
    gap: 10px;
  }

  @media screen and (max-width: 768px){
    padding: 40px;
  }
`

export const TarjetaMarcaBoxPrecio = styled.div`
  background-color: #ffffffab;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px 11px 0;
  border-radius: 50px;
`

export const TarjetaMarcaMoneda = styled.span`
  font-size: 1.2rem;

  @media screen and (max-width: 1440px){
    font-size: 1rem;
  }

  @media screen and (max-width: 1024px){
    font-size: .9rem;
  }
`

export const TarjetaMarcaPrecio = styled.span`
  font-size: 1.5rem;

  @media screen and (max-width: 1440px){
    font-size: 1.4rem;
  }

  @media screen and (max-width: 1024px){
    font-size: 1.2rem;
  }
`

export const TarjetaMarcaNombre = styled.div`
  font-family: Cinzel;
  font-size: 1.9rem;
  font-weight: 600;

  @media screen and (max-width: 1440px){
    font-size: 1.7rem;
  }

  @media screen and (max-width: 1024px){
    font-size: 1.2rem;
  }

  @media screen and (max-width: 768px){
    font-size: 1.3rem;
  }
`

export const TarjetaMarcaDescripcion = styled.p`
  font-family: Roboto;
  font-size: 1rem;
  line-height: 1.4rem;
  text-align: justify;

  @media screen and (max-width: 1440px){
    line-height: 1.2rem;
  }

  @media screen and (max-width: 1024px){
    font-size: .9rem;
    line-height: 1rem;
  }

  @media screen and (max-width: 768px){
    font-size: 1rem;
  }
`

export const TarjetaMarcaButton = styled(Link)`
  background-color: ${colores.colorAcento};
  color: ${colores.colorBlanco};
  font-family: Cinzel;
  font-size: 1rem;
  letter-spacing: .05rem;
  padding: 8px 18px;
  border: solid 2px transparent;
  border-radius: 500px;
  margin-top: 10px;

  &:hover{
    background-color: ${colores.colorFondo};
    color: ${colores.colorAcento};
    border: solid 2px ${colores.colorAcento};
  }

  @media screen and (max-width: 1440px){
    font-size: .9rem;
  }

  @media screen and (max-width: 1024px){
    margin-top: 2px;
    font-size: .8rem;
  }
`