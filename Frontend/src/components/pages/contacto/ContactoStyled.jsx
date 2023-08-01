import styled, { css } from "styled-components"
import { colores } from "../../../assets/css/Colors"

const inputStyles = css`
  color: ${colores.colorPrincipal};
  height: 50px;
  width: 550px;
  font-family: Roboto;
  font-weight: 500;
  letter-spacing: 0.1rem;
  border: none;
  border-radius: 5px;
  margin-bottom: 20px;
  padding: 15px 15px;
  outline: none;

  &::placeholder{
    font-weight: 400;
    color: #b6b6b6;
  }

  @media screen and (max-width: 1440px){
    height: 40px;
    width: 450px;
    margin-bottom: 10px;

    &::placeholder{
      font-size: 0.9rem;
    }
  }

  @media screen and (max-width: 1024px){
    height: 30px;
    width: 335px;
    padding: 7px 15px;
    margin-bottom: 10px;

    &::placeholder{
      font-size: 0.7rem;
    }
  }

  @media screen and (max-width: 768px){
    height: 30px;
    width: 320px;
    margin-bottom: 15px;
    padding: 10px 15px;

    &::placeholder{
      font-size: 0.8rem;
    }
  }

  @media screen and (max-width: 375px){
    height: 30px;
    width: 270px;
    margin-bottom: 10px;
    padding: 10px 15px;
  }
`

export const ContactoSection = styled.section`
  background-color: ${colores.colorSecundario};
  width: 100%;
  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 110px 0;
  overflow: hidden;
`

export const ContactoBox = styled.div`
  background-color: #ffffff;
  width: 1200px;
  height: 700px;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 60px;
  border-radius: 10px;
  overflow: hidden;

  @media screen and (max-width: 1440px){
    width: 960px;
    height: 560px;
  }

  @media screen and (max-width: 1024px){
    width: 720px;
    height: 420px;
  }

  @media screen and (max-width: 768px){
    flex-direction: column;
    width: 360px;
    height: auto;
  }

  @media screen and (max-width: 375px){
    width: 300px;
  }
`

export const ContactoImg = styled.img`
  height: 100%;
  width: 50%;

  @media screen and (max-width: 768px){
    width: 280px;
    height: auto;
  }
`

export const ContactoBoxFormulario = styled.div`
  background-color: ${colores.colorFondo};
  color: ${colores.colorAcento};
  height: 100%;
  width: 50%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px){
    width: 100%;
    height: auto;
    padding: 20px;
  }
`
export const ContactoTitulo = styled.h1`
  text-align: center;
  font-family: Cinzel;
  letter-spacing: 0.1rem;

  @media screen and (max-width: 1440px){
    font-size: 1.8rem;
  }

  @media screen and (max-width: 1024px){
    font-size: 1.4rem;
  }

  @media screen and (max-width: 768px){
    font-size: 1.6rem;
  }
`

export const ContactoParrafo = styled.p`
  text-align: center;
  font-family: Roboto;
  line-height: 1.8rem;

  margin: 20px 40px;

  @media screen and (max-width: 1440px){
    font-size: 0.9rem;
    line-height: 1.6rem;
    margin: 10px 20px 15px;
  }

  @media screen and (max-width: 1024px){
    font-size: 0.7rem;
    line-height: 1.3rem;
    margin: 10px 15px;
    text-align: justify;
  }

  @media screen and (max-width: 768px){
    font-size: 0.9rem;
    margin: 10px;
  }

  @media screen and (max-width: 375px){
    margin: 10px 0;
    width: 270px;
  }
`

export const ContactoFormulario = styled.form`
  display: flex;
  flex-direction: column;
`

export const ContactoAlerta = styled.span`
  font-family: Roboto;
  font-size: 1rem;
  margin-bottom: 5px;
  display: none;

  @media screen and (max-width: 1440px){
    font-size: 0.9rem;
  }

  @media screen and (max-width: 1024px){
    font-size: 0.7rem;
    margin-bottom: 2px;
  }
`

export const ContactoInput = styled.input`
  ${inputStyles};
`

export const ContactoTextArea = styled.textarea`
  ${inputStyles};
  height: 100px;
  resize: none;

  @media screen and (max-width: 1440px){
    height: 80px;
  }

  @media screen and (max-width: 1024px){
    height: 60px;
  }

  @media screen and (max-width: 768px){
    height: 50px;
  }
`

export const ContactoButton = styled.button`
  background-color: ${colores.colorPrincipal};
  color: white;
  height: 40px;

  border: none;
  border-radius: 10px;
  cursor: pointer;

  font-family: Roboto;
  font-size: 1.1rem;
  font-weight: 300;
  letter-spacing: 0.1rem;

  &:hover{
    background-color: ${colores.colorAcento};
  }

  &:active{
    background-color: ${colores.colorPrincipal};;
    color: ${colores.colorBlanco};
  }
`