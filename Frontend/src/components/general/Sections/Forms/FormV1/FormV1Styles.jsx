import styled from "styled-components";
import { coloresV2 } from "../../../../../assets/css/Colors";
import { fonts } from "../../../../../assets/fonts/FontsHandler";

export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  background-color: ${coloresV2.colorPrincipal};
  border: 1px solid ${coloresV2.colorTextos};
  border-radius: 12px;
  overflow: hidden;

  @media screen and (max-width: 1024px){
    flex-direction: column;
  }
`

export const BoxImage = styled.div`
  width: 50%;
  display: flex;
  border-right: 1px solid ${coloresV2.colorTextos};

  @media screen and (max-width: 1024px){
    width: 100%;
    border-right: 0;
    border-bottom: 1px solid ${coloresV2.colorTextos};
  }
`

export const Image = styled.img`
  width: 100%;
  display: flex;
`

export const Form = styled.form`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  gap: 10px;

  @media screen and (max-width: 1232px){
    padding: 30px;
  }

  @media screen and (max-width: 1024px){
    width: 100%;
  }

  @media screen and (max-width: 596px){
    padding: 30px 20px;
  }
`

export const Title = styled.h1`
  font-family: ${fonts.MainTypography};
  font-size: 3rem;
  text-align: center;

  @media screen and (max-width: 1535px){
    font-size: 2.6rem;
  }

  @media screen and (max-width: 1232px){
    font-size: 2rem;
  }

  @media screen and (max-width: 1024px){
    font-size: 2.6rem;
  }

  @media screen and (max-width: 596px){
    font-size: 1.9rem;
  }
`

export const Description = styled.p`
  font-family: ${fonts.SecondaryTypography};
  font-size: 1.4rem;
  text-align: center;

  @media screen and (max-width: 1535px){
    font-size: 1.2rem;
  }

  @media screen and (max-width: 1232px){
    font-size: 1rem;
  }

  @media screen and (max-width: 1024px){
    font-size: 1.2rem;
  }
`

export const BoxInputs = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  margin-top: 10px;
`

export const Input = styled.input`
  width: 100%;
  padding: 16px 15px 13px;
  border-radius: 8px;
  background-color: ${coloresV2.colorSecundario};
  background-color: transparent;
  border: 1px solid ${coloresV2.colorTextos};
  font-family: ${fonts.SecondaryTypography};
  outline: none;

  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px ${coloresV2.colorSecundario} inset;
    -webkit-text-fill-color: ${coloresV2.colorTextos};
  }

  &::placeholder{
    font-weight: 100;
    color: #3030307f;
  }

  @media screen and (max-width: 1535px){
    padding: 14px 15px 11px;
  }
`

export const Button = styled.button`
  width: 100%;
  background-color: ${coloresV2.colorTextos};
  border: 1px solid ${coloresV2.colorTextos};
  color: white;
  padding: 12px;
  border-radius: 8px;
  font-family: ${fonts.MainTypography};
  font-weight: bold;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all .2s ease-out;

  &:hover{
    background-color: ${coloresV2.colorPrincipal};
    color: ${coloresV2.colorTextos};
  }

  &:active{
    transform: scale(.97);
  }

  @media screen and (max-width: 1535px){
    padding: 10px;
    font-size: 1.15rem;
  }

  @media screen and (max-width: 1024px){
    padding: 12px;
    font-size: 1.2rem;
  }
`