import styled from "styled-components"
import { Link } from "react-router-dom"
import { colores } from "../../../../assets/css/Colors"

export const TarjetaPaqueteBox = styled.div`
  background-color: ${colores.colorTerciario};
  color: ${colores.colorAcento};
  width: 350px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 50px 0;
  border-radius: 50px;
  border: solid 2px ${colores.colorAcento};

  @media screen and (max-width: 1440px){
    width: 300px;
    padding: 40px 0;
  }

  @media screen and (max-width: 1024px){
    width: 240px;
  }

  @media screen and (max-width: 768px){
    width: 300px;
  }
`

export const TarjetaPaqueteBoxPrecios = styled.div`
  color: ${colores.colorAcento};
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: Nunito;
  font-weight: 600;
  gap: 6px;
`

export const TarjetaPaqueteSimbolo = styled.span`
  font-size: 1.5rem;
  margin-left: 35px;

  @media screen and (max-width: 1440px){
    font-size: 1.3rem;
    margin-left: 25px;
  }

  @media screen and (max-width: 1024px){
    font-size: 1.1rem;
    margin-left: 30px;
  }

  @media screen and (max-width: 768px){
    font-size: 1.3rem;
    margin-left: 36px;
  }
`

export const TarjetaPaqueteMonto = styled.span`
  font-size: 3.8rem;

  @media screen and (max-width: 1440px){
    font-size: 3.4rem;
  }

  @media screen and (max-width: 1024px){
    font-size: 2.8rem;
  }

  @media screen and (max-width: 768px){
    font-size: 3rem;
  }
`

export const TarjetaPaqueteDivisa = styled.span`
  font-size: 1.5rem;

  @media screen and (max-width: 1440px){
    font-size: 1.3rem;
  }

  @media screen and (max-width: 1024px){
    font-size: 1.1rem;
  }

  @media screen and (max-width: 768px){
    font-size: 1.3rem;
  }
`

export const TarjetaPaqueteTitulo = styled.h1`
  background-color: white;
  color:${colores.colorPrincipal};

  font-family: Roboto;
  font-size: 0.8rem;
  letter-spacing: 0.2rem;
  font-weight: 600;
  text-align: center;

  border-radius: 50px;
  padding: 10px 30px 8px;
  margin: 10px 0;

  @media screen and (max-width: 1440px){
    font-size: 0.7rem;
    margin: 5px 0;
  }

  @media screen and (max-width: 1024px){
    font-size: 0.6rem;
  }

  @media screen and (max-width: 768px){
    font-size: 0.7rem;
  }
`

export const TarjetaPaqueteLista = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 10px;
`

export const TarjetaPaqueteItem = styled.li`
  font-family: Roboto;
  font-size: 1rem;

  margin-bottom: 10px;

  @media screen and (max-width: 1440px){
    font-size: 0.9rem;
  }

  @media screen and (max-width: 1024px){
    font-size: 0.7rem;
  }

  @media screen and (max-width: 768px){
    font-size: 0.9rem;
  }
`

export const TarjetaPaqueteParrafo = styled.p`
  font-family: Roboto;
  font-size: 1rem;
  width: 240px;
  line-height: 1.6rem;
  margin-bottom: 10px;

  @media screen and (max-width: 1024px){
    font-size: 0.8rem;
    line-height: 1.4rem;
    width: 220px;
  }

  @media screen and (max-width: 768px){
    font-size: 1rem;
    line-height: 1.4rem;
    width: 220px;
  }
`

export const TarjetaPaqueteButton = styled(Link)`
  background-color: ${colores.colorPrincipal};
  color: ${colores.colorBlanco};
  box-shadow: 0rem 0rem .3125rem .125rem #0000002a;
  background-color: ${colores.colorPrincipal};
  padding: 16px 30px;
  border-radius: 50px;
  margin-top: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-family: Cinzel;
  font-size: 12px;
  letter-spacing: 3.2px;

  transition: 0.3s;

  &:hover{
    background-color: ${colores.colorBlanco};
    color: ${colores.colorPrincipal};
  }

  &:active{
    background-color: ${colores.colorPrincipal};
    color: ${colores.colorBlanco};
  }

  @media screen and (max-width: 1024px){
    font-size: 11px;
  }

  @media screen and (max-width: 768px){
    margin-top: 5px;
  }
`
