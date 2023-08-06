import styled from "styled-components"
import { colores } from "../../../../assets/css/Colors"

export const CategoriasSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 60px;

  @media screen and (max-width: 768px){
    padding: 0 10px;
  }
`

export const CategoriasBoxTarjetas = styled.div`
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1440px){
    max-width: 934px;
  }
`

export const CategoriasTarjeta = styled.div`
  position: relative;
  width: 28%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  box-shadow:  0px 0px 10px 2px rgb(0 0 0 / 25%);
  overflow: hidden;

  @media screen and (max-width: 768px){
    width: 30%;
  }
`

export const CategoriasImg = styled.img`
  display: flex;
  width: 100%;
`

export const CategoriasBoxTextos = styled.div`
  background-color: #b1866a;
  width: 100%;
  padding: 22px 0;
  font-family: Cinzel;
  letter-spacing: 0.2rem;
  text-align: center;
  color: white;
  position: absolute;

  @media screen and (max-width: 768px){
    padding: 15px 0;
  }

  @media screen and (max-width: 425px){
    padding: 10px 0;
  }
`

export const CategoriasTarjetaTitulo = styled.h1`
  font-size: 2rem;
  margin-top: -7px;
  margin-bottom: 2px;

  @media screen and (max-width: 1440px){
    font-size: 1.6rem;
  }

  @media screen and (max-width: 1024px){
    font-size: 1.4rem;
  }

  @media screen and (max-width: 768px){
    font-size: 1.2rem;
    letter-spacing: .1rem;
  }

  @media screen and (max-width: 425px){
    margin-top: 0px;
    
  }
`

export const CategoriasTarjetaSubtitulo = styled.h2`
  font-size: 0.8rem;

  @media screen and (max-width: 1440px){
    font-size: 0.7rem;
  }

  @media screen and (max-width: 1024px){
    font-size: 0.6rem;
  }

  @media screen and (max-width: 768px){
    letter-spacing: .1rem;
  }
`