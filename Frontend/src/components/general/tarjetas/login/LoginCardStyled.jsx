import styled, { css } from "styled-components"
import { Link } from "react-router-dom"
import { colores } from "../../../../assets/css/Colors"

export const LoginForm = styled.form`
  background-color: ${colores.colorTerciario};
  max-width: 380px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border: 1px solid ${colores.colorAcento};
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
  background-color: white;
  width: 100%;
  border: 1px solid ${colores.colorAcento};
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
  filter: invert(51%) sepia(17%) saturate(1123%) hue-rotate(341deg) brightness(88%) contrast(79%);
`

export const Input = styled.input`
  color: ${colores.colorAcento};
  width: 100%;
  font-family: "Nunito", sans-serif;
  font-size: 0.9rem;
  font-weight: 500;
  margin-top: 2px;
  border: none;
  outline: none;

  &::placeholder{
    font-weight: 400;
    color: #8569568b;
  }
`

export const Select = styled.select`
  background-color: transparent;
  border: none;
  width: 100%;
  font-weight: 400;
  color: #8569568b;
  color: ${colores.colorAcento};
  margin-left: -3px;
  outline: none;
`

export const Option = styled.option`
  color: ${colores.colorAcento};
`

const stylesButton = css`
  min-width: 100%;
  padding: 10px 0;
  font-family: "Nunito", sans-serif;
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  border-radius: 30px;
  border: none;
  cursor: pointer;
  transition: 0.2s ease;
`

export const SubmitButton = styled.button`
  ${stylesButton};
  background-color: ${colores.colorAcento};
  color: white;

  &:hover{
    background-color: #8a4b22;
  }
`

export const RedirectButton = styled(Link)`
  ${stylesButton};
  background-color: white;
  color: ${colores.colorAcento};
  border: 1px solid ${colores.colorAcento};
  margin-top: -4px;

  &:hover{
    background-color: #8a4b22;
    color: white;
  }
`