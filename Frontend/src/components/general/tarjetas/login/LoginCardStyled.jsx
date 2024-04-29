import styled, { css } from "styled-components"
import { Link } from "react-router-dom"
import { coloresV2 } from "../../../../assets/css/Colors"

export const LoginForm = styled.form`
  background-color: ${coloresV2.colorPrincipal};
  max-width: 380px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border: 1px solid ${coloresV2.colorTextos};
  border-radius: 20px;
  box-shadow: 1.2px 1.3px 0.7px rgba(0, 0, 0, 0.017),
    2.5px 2.8px 1.4px rgba(0, 0, 0, 0.025),
    4.3px 4.7px 2.4px rgba(0, 0, 0, 0.031), 
    6.4px 7px 3.6px rgba(0, 0, 0, 0.035),
    9.3px 10.1px 5.3px rgba(0, 0, 0, 0.04),
    13.1px 14.4px 7.4px rgba(0, 0, 0, 0.044),
    18.6px 20.4px 10.6px rgba(0, 0, 0, 0.049),
    27px 29.6px 15.3px rgba(0, 0, 0, 0.055),
    41.6px 45.6px 23.6px rgba(0, 0, 0, 0.063),
    74px 81px 42px rgba(0, 0, 0, 0.08);

  gap: 12px;
  padding: 60px 40px;

  @media screen and (max-width: 1440px){
    transform: scale(0.8);
  }

  @media screen and (max-width: 768px){
    transform: scale(.9);
  }
`

export const LoginLogo = styled.img`
  height: 80px;
  margin-bottom: 20px;
`

export const BoxInput = styled.div`
  background-color: ${coloresV2.colorSecundario};
  width: 100%;
  border: 1px solid ${coloresV2.colorTextos};
  border-radius: 30px;
  padding: 15px 22px 15px 50px;
  overflow: hidden;
  position: relative;
`

export const InputIcon = styled.img`
  width: 18px;
  position: absolute;
  top: 50%;
  left: 22px;
  transform: translateY(-50%);
`

export const Input = styled.input`
  background-color: ${coloresV2.colorSecundario};
  color: ${coloresV2.colorTextos};
  width: 100%;
  font-family: "Nunito", sans-serif;
  font-size: 0.9rem;
  font-weight: 500;
  margin-top: 2px;
  border: none;
  outline: none;

  &::placeholder{
    font-weight: 400;
    color: #30303081;
  }
`

const stylesButton = css`
  min-width: 100%;
  padding: 10px 0;
  font-family: "Nunito", sans-serif;
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  border-radius: 30px;
  border: 1px solid ${coloresV2.colorTextos};
  cursor: pointer;
  transition: 0.2s ease-out;
`

export const SubmitButton = styled.button`
  ${stylesButton};
  background-color: ${coloresV2.colorTextos};
  color: white;

  &:hover{
    background-color: white;
    color: ${coloresV2.colorTextos};
  }
`

export const RedirectButton = styled(Link)`
  ${stylesButton};
  background-color: ${coloresV2.colorPrincipal};
  color: ${coloresV2.colorTextos};
  margin-top: -4px;

  &:hover{
    background-color: white;
  }
`