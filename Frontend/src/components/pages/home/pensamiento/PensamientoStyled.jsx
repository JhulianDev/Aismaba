import styled from 'styled-components';
import { FONDO_PENSAMIENTO } from '../../../../assets/img/images';

export const PensamientoSection = styled.section `
  background-image: url(${FONDO_PENSAMIENTO});
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`

export const PensamientoDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 55%;

  @media screen and (max-width: 1024px){
    margin-right: 35%;
  }

  @media screen and (max-width: 768px){
    margin-right: 0;
    margin-bottom: 3.875rem;
  }
`

export const PensamientoComillas = styled.img`
  width: 50px;
  margin-bottom: 6px;

  @media screen and (max-width: 1024px){
    width: 40px;
  }

  @media screen and (max-width: 768px){
    display: none;
  }
`

export const PensamientoFraseA = styled.p`
  font-family: Libre;
  font-style: italic;
  font-size: 29px;
  text-align: center;
  color: #6d6d6d;

  @media screen and (max-width: 1024px){
    font-size: 26px;
  }

  @media screen and (max-width: 768px){
    font-size: 24px;
  }
`

export const PensamientoFraseB = styled.p`
  font-family: Roboto;
  font-weight: 600;
  font-size: 10.4px;
  letter-spacing: 1px;
  text-align: center;
  margin-top: 10px;
  color: #6d6d6d;

  @media screen and (max-width: 1024px){
    font-size: 9.6px;
  }

  @media screen and (max-width: 768px){
    font-size: 9px;
    font-weight: 700;
  }
`