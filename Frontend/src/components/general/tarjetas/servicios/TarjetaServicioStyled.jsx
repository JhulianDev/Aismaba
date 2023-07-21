import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { colores } from '../../../../assets/css/Colors';

const textStyle = css`
  color: ${colores.colorAcento};
  text-align: justify;
  font-family: Roboto;
  font-size: 14px;
  line-height: 28.8px;

  @media screen and (max-width: 1440px){
    font-size: 15.36px;
    line-height: 25.6px;
  }

  @media screen and (max-width: 1024px){
    font-size: 11.68px;
    line-height: 19.2px;
  }

  @media screen and (max-width: 768px){
    font-size: 14.4px;
    line-height: 22.4px;
  }
`

export const TarjetaBox = styled.div`
  background-color: ${colores.colorTerciario};
  width: 320px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding: 0 40px;
  border: solid 2px ${colores.colorPrincipal};
  border-radius: 20px;

  @media screen and (max-width: 1440px){
    width: 285px;
  }

  @media screen and (max-width: 1024px){
    width: 236px;
  }

  @media screen and (max-width: 768px){
    width: 300px;
  }
`

export const TarjetaImg = styled.img`
  width: 220px;
  border: solid 2px ${colores.colorPrincipal};
  border-radius: 20px;
  margin-top: 50px;

  @media screen and (max-width: 1440px){
    width: 200px;
  }

  @media screen and (max-width: 1024px){
    width: 150px;
  }

  @media screen and (max-width: 768px){
    width: 200px;
  }
`


export const TarjetaTitulo = styled.h1`
  color: ${colores.colorAcento};
  text-align: center;
  font-family: Cinzel;
  font-size: 17.6px;
  letter-spacing: .0625rem;
  margin: 1.375rem 0 1.125rem;

  @media screen and (max-width: 1440px){
    font-size: 16px;
    margin: 20px 0 16px;
  }

  @media screen and (max-width: 1024px){
    font-size: 11.2px;
    margin: 18px 0 14px;
  }

  @media screen and (max-width: 768px){
    font-size: 20.8px;
    margin: 18px 0 14px;
  }
`

export const TarjetaDescripcionA = styled.p`
  ${textStyle};
`


export const TarjetaDescripcionB = styled.p`
  ${textStyle};
  height: 200px;
  margin-top: .625rem;

  @media screen and (max-width: 1024px){
    height: 160px;
  }
`

export const TarjetaLink = styled(Link)`
  background-color: ${colores.colorPrincipal};
  color: white;
  font-family: Roboto;
  font-size: 13.6px;
  font-weight: 400;
  letter-spacing: .0625rem;
  border: none;
  border-radius: 1.875rem;
  margin: 1.25rem 0 2.5rem;
  padding: .625rem 1.875rem;
  transition: 0.3s;
  cursor: pointer;

  &:hover{
    background-color: ${colores.colorBlanco};
    color: ${colores.colorPrincipal};
    transform: scale(1.1);
  }

  &:active{
    background-color: ${colores.colorPrincipal};
  color: ${colores.colorBlanco};
  }
`